const awsServerlessExpress = require('aws-serverless-express')
const thread = require('./dist').default


//const server = awsServerlessExpress.createServer(thread)


thread.listen(4000)
  //.then(({ url }) => {
  //console.log(`🚀 server listening at ${url} 👂`)
//})


//exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)
