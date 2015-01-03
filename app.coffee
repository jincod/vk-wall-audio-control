http = require 'http'
express = require 'express'
bodyParser = require 'body-parser'
socketio = require 'socket.io'

vkSockets = []
app = express()

app.use express.static("public")
app.use bodyParser.urlencoded({extended: true})
app.use bodyParser.json()


app.post '/api/vk', (req, res) ->
  for socket in vkSockets
    io.emit 'event', req.body.command
  
  res.send 200

server = http.createServer app
io = socketio(server)

io.on 'connection', (socket) ->
  vkSockets.push socket
  console.log 'connected', socket.id
  socket.on 'disconnect', () ->
    console.log 'disconnect', socket.id
    vkSockets.splice(vkSockets.indexOf(socket), 1)

server.listen process.env.PORT || 38477