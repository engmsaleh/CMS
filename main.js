var express = require("express"),
  session = require("express-session"),
  uuid = require("node-uuid"),
  path = require("path"),
  cors = require("cors"),
  shovelapps = require("./lib/shovelapps"),
  loopback = require("loopback");

// Using loopback I override the 
// previous server var that was 
// instantiated with express();
// loppback() returns an express() instance on steroids.
server = loopback();

server.enableAuth();

// set the view engine to ejs
server.set('view engine', 'ejs');

// Allow cross-domain requests
server.use(cors());
// Session 
server.use(session({
  genid: function(req) {
    return uuid.v1(); // use UUIDs for session IDs
  },
  secret: 'shovelapps',
  resave: true,
  saveUninitialized: true
}));

// Serve static content from www directory



// Setup local variables to be available in the views.
server.locals.node_version = process.version.replace('v', '');
server.locals.app_version = require('./package.json').version;

//Serve browser library from /lib/client/ 
server.use("/shovelapps", express.static(__dirname + "/lib/client/"));


app = new shovelapps.App({
  server: server
});

app.init(function(err) {
  if (err) throw err;
});


var s = server.listen(process.env.PORT || 3000);
io = require("socket.io")(s);