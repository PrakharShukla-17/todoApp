import { z } from 'zod';
export const userSignupSchema = z.object({
    email: z.email(),
    username: z.string().min(5),
    password: z.string().min(8),
});
//# sourceMappingURL=userSignupSchema.js.map