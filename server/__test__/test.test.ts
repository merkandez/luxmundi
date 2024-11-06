import request from "supertest";
import { app } from "../src/app";
import User from "../src/models/userModel";
import { encrypt } from "../src/utils/handlePassword";
import { describe, beforeEach, it, expect } from "@jest/globals";

describe("Auth Controller", () => {
  beforeEach(async () => {
    await User.destroy({ where: {} }); // Limpia la BD antes de cada test
  });

  // Aquí irán todos los grupos de tests
  describe("Testeo de endpoints", () => {
    it("debería registrar un nuevo usuario exitosamente", async () => {
      const userData = {
        username: "testuser",
        email: "test@test.com",
        password: "password123",
        avatarUrl: "http://example.com/avatar.jpg",
      };

      const response = await request(app)
        .post("/api/auth/register")
        .send(userData)
        .expect(201);

      expect(response.body.message).toBe("Usuario registrado con éxito");
      expect(response.body.user.email).toBe(userData.email);
    });

    it("debería rechazar un registro con email duplicado", async () => {
      const userData = {
        username: "testuser",
        email: "test@test.com",
        password: "password123",
        avatarUrl: "http://example.com/avatar.jpg",
      };

      // Primer registro
      await User.create({
        ...userData,
        password: await encrypt(userData.password),
      });

      // Intento de registro duplicado
      const response = await request(app)
        .post("/api/auth/register")
        .send(userData)
        .expect(400);

      expect(response.body.message).toBe("El correo ya está en uso");
    });

    it("debería Iniciar sesión", async () => {
      const userData = {
        username: "testuser",
        email: "test@test.com",
        password: "password123",
        avatarUrl: "http://example.com/avatar.jpg",
      };

      const responseR = await request(app)
        .post("/api/auth/register")
        .send(userData)
        .expect(201);

      expect(responseR.body.message).toBe("Usuario registrado con éxito");
      expect(responseR.body.user.email).toBe(userData.email);

      const response = await request(app)
        .post("/api/auth/login")
        .send(userData)
        .expect(200);

      expect(response.body.message).toBe("Inicio de sesión exitoso");
    });
    it("debería rechazar un inicio de sesión con credenciales incorrectas", async () => {
      const userData = {
        username: "testuser",
        email: "test@test.com",
        password: "password123",
        avatarUrl: "http://example.com/avatar.jpg",
      };

      const response = await request(app)
        .post("/api/auth/login")
        .send(userData)
        .expect(400);
      expect(response.body.message).toBe("Credenciales incorrectas");
    });

    it("debería crear un usuario, iniciar sesión y luego eliminarlo", async () => {
      const userData = {
        username: "testuser",
        email: "test@test.com",
        password: "password123",
        avatarUrl: "http://example.com/avatar.jpg",
        role: "admin",
      };

      await User.create({
        ...userData,
        password: await encrypt(userData.password),
      });

      const loginData = {
        email: userData.email,
        password: userData.password,
      };

      const response = await request(app)
        .post("/api/auth/login")
        .send(loginData)
        .expect(200);
      expect(response.body.message).toBe("Inicio de sesión exitoso");

      const user = await User.findOne({ where: { email: userData.email } });

      const responseDelete = await request(app)
        .delete(`/api/auth/${user?.id}`)
        .set("Authorization", `Bearer ${response.body.token}`)
        .expect(200);
      expect(responseDelete.body.message).toBe("Usuario eliminado con éxito");
    });
  });
});
