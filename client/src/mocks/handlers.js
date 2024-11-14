import { rest } from 'msw'; 

export const handlers = [
    rest.get('http://localhost:8080/api', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                users: [
                    {
                        id: 1,
                        username: 'John Doe',
                        email: 'john@example.com',
                        password: 'password123',
                        role: 'user',
                    },
                    {
                        id: 2,
                        username: 'user1',
                        email: 'user1@example.com',
                        password: '123456',
                        role: 'admin',
                    },
                ],
            })
        );
    }),
]