
const express = require("express");
const app = express();
app.use(express.json());

const getRouter = require("./routes/testRoutes");
const teachersRoute = require("./routes/teachersRoutes");
const sequelize = require("./db/config");

app.use("/", getRouter);
app.use("/", teachersRoute);

sequelize
    .authenticate()
    .then(() => console.log('DB is connected'))
    .catch(err => {
        console.error(err.message);
        process.exit(1);
    });

(async () => {
    try {
        await sequelize.sync();
        // await roles.sync();
        console.log('Sequelize synchronization completed.');
    } catch (error) {
        console.error('Sequelize synchronization failed:', error.message);
    }
})();

module.exports = app;

