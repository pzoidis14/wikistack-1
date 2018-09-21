const morgan = require ('morgan');
const express = require ('express');
const {db} = require('./models');
const Sequalize = require('sequelize');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(__dirname + "/stylesheets"));
app.use("/wiki", require("./routes/wiki"));
app.use("/user", require("./routes/user"));

app.get('/', (req, res) => {
    const empty = '12345';
    res.send(empty);
})

app.get('/', (req, res) => {
    const empty = '12345';
    res.send(empty);
})

app.get('/', (req, res) => {
    const empty = '12345';
    res.send(empty);
})

const init = async() => {
    await db.sync();
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });
}

init();
