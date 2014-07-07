http = require 'http'
express = require 'express'
bodyParser = require 'body-parser'
socketio = require 'socket.io'

sockets = []
app = express()

app.use express.static("public")
app.use bodyParser.urlencoded({extended: true})
app.use bodyParser.json()


app.post '/api', (req, res) ->
  for socket in sockets
    io.emit 'event', req.body.command
  
  res.send 200

server = http.createServer app
io = socketio(server)

io.on 'connection', (socket) ->
  sockets.push socket
  console.log 'connected', socket.id
  socket.on 'disconnect', () ->
    console.log 'disconnect', socket.id
    sockets.splice(sockets.indexOf(socket), 1)

server.listen process.env.PORT || 38477