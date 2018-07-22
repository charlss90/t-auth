const restify = require('restify')
const { Server } = require('http')
const { Router } = require('restify')

/**
 * this function make and configure a http server given a valid router
 * @param {Router} router
 * @return {Server} server
 */
module.exports = router => {
  const server = restify.createServer()

  server.use(restify.plugins.gzipResponse())
  server.use(restify.plugins.queryParser())
  server.use(restify.plugins.bodyParser())

  if (router && router instanceof Router) {
    server.use(router)
  } else {
    console.warn(
      'Missing route: Ensure that server has a routes after of create'
    )
  }

  return server
}
