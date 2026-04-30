import z from 'zod';
export const userLoginSchema = z.object({
    email: z.email(),
    username: z.string().min(5),
    password: z.string().min(8),
});
//# sourceMappingURL=userLoginSchema.js.map