import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("Hey");
});
app.listen(3000, () => {
    console.log("Welcome to server port 3000");
});
//# sourceMappingURL=index.js.map