const Router = require("koa-router")

const spider_travel = require("./spider_travel")

const router = new Router()
router.all("/", spider_travel)


module.exports = router