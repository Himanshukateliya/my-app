const libExpress = require('express')
const chalk = require("chalk");

const app = libExpress()
const globalConfig = require('./package.json')

app.get("/", (req, res) => {
    res.send('Hello World!')
})

app.get("/index", (req, res) => {
    res.send('Hello World!')
})



app.listen(globalConfig.app_config.port, () => {
    console.log(chalk.red(`[+]App Started at : ${globalConfig.app_config.port}`))

})