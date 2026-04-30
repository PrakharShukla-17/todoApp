export const userValidation = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        res.status(403).json({
            msg: "Invalid Input"
        });
        return;
    }
    next();
};
//# sourceMappingURL=userValidation.js.map