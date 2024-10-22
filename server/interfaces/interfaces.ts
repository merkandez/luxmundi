interface app {
  port: number;
}
export const app: app = {
  port: 8000,
};
interface db {
  host: string;
  user: string;
  password: string;
  database: string;
}
export const db: db = {
  host: "localhost",
  user: "root",
  password: "12345",
  database: "test",
};
