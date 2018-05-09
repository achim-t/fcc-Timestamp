// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

app.get('/', (req, res) => res.redirect('/1525857295'))

app.get("/:timestamp", (request, response) => {
  

  let timestampString = request.params.timestamp
  let timestamp = Number(timestampString) * 1000 || timestampString
  var time = new Date(timestamp) 
    
  let locale = "en-us"
  var natural = null
  if (! isNaN( time.getTime() )) {
    natural = time.toLocaleString(locale, { month: "long", day: "numeric", year: "numeric" });
  }
  let result = {unix: time.getTime() / 1000, natural}
  
  response.json(result)
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
