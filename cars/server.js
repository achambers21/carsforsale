const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors");


app.use( express.json() );
app.use( express.urlencoded({extended: true}) );
app.use(cors())

require("./server/config/mongoose.config")
require("./server/routes/car.route")(app)

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen(port, () => console.log(`Listening on port: ${port}`) );
