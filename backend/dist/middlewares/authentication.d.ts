import { Response, NextFunction } from "express";
import { userIdDefinition } from "../requestDefinitions/userIdDefinition.js";
export declare const authentication: (req: userIdDefinition, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authentication.d.ts.map