import { z } from 'zod';
export declare const userLoginSchema: z.ZodObject<{
    email: z.ZodEmail;
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=userLoginSchema.d.ts.map