const morgan = require ('morgan');
const express = require ('express');
const models = require('./models');
const Sequelize = require('sequelize');
const wikiRoutes = require('./routes/wiki')
const userRoutes = require('./routes/user')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(__dirname + "/stylesheets"));
app.use("/wiki", require("./routes/wiki"));
app.use("/user", require("./routes/user"));



app.use("/wiki", wikiRoutes);

app.get('/', (req, res) => {
    res.redirect("/wiki");
})

const init = async() => {
    await models.Page.sync();
    await models.User.sync();

    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });
}

init();
