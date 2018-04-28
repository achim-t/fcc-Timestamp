// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:timestamp", (request, response) => {
  

    let timestampString = request.params.timestamp
    let timestamp = parseInt(timestampString) || timestampString
    var time = new Date(timestamp) 
    
  let locale = "en-us"
  var natural = null
  if (! isNaN( time.getTime() )) {
    natural = time.toLocaleString(locale, { month: "long", day: "numeric", year: "numeric" });
  }
  let result = {unix: time.getTime(), natural: natural}
  //let result = {unix: time, natural: natural}
  response.end(JSON.stringify(result))
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
