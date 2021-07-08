"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = express_1["default"]();
var PORT = 5000;
app.get('/list/dog/images', function (req, res) {
    // console.log(request)
    res.send('response from get');
});
app.post('/upload/dog/image', function (req, res) {
    console.log(req.body);
    res.send(" response from post ");
});
function start() {
    try {
        app.listen(PORT, function () { console.log("App has been started on port " + PORT + "..."); });
    }
    catch (e) {
        console.log("Server Error", e.message);
        process.exit(1);
    }
}
start();
//# sourceMappingURL=index.js.map