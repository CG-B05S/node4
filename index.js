const express = require("express")

const app = express();

app.use(express.json())

app.use('/auth', require("./Route/auth"))

app.listen((3000), () => {
    console.log("Listening on port 5000")
})