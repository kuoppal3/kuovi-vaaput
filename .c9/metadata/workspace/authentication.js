{"changed":true,"filter":false,"title":"authentication.js","tooltip":"/authentication.js","value":"// Authentication for admin to control orders\n\nvar passport = require('passport');\nvar LocalStrategy = require('passport-local').Strategy;\n\n// Login\nexports.passportUseLocal = passport.use(new LocalStrategy(\n  {\n    // Name-field from HTML\n    usernameField: 'kayttaja',\n    passwordField: 'salasana'\n  },\n  function(username, password, done) {\n     \n  }\n\n));","undoManager":{"mark":-62,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":27,"column":50},"end":{"row":27,"column":51},"action":"remove","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":50},"end":{"row":27,"column":51},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":51},"end":{"row":28,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":0},"end":{"row":29,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":0},"end":{"row":29,"column":1},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":1},"end":{"row":29,"column":2},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":2},"end":{"row":29,"column":3},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":3},"end":{"row":29,"column":4},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":3},"end":{"row":29,"column":4},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":2},"end":{"row":29,"column":3},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":2},"end":{"row":29,"column":3},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":3},"end":{"row":29,"column":4},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":4},"end":{"row":29,"column":5},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":5},"end":{"row":29,"column":6},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":6},"end":{"row":29,"column":7},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":7},"end":{"row":29,"column":8},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":8},"end":{"row":29,"column":9},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":9},"end":{"row":29,"column":10},"action":"insert","lines":["K"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":11},"end":{"row":29,"column":12},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":11},"end":{"row":29,"column":12},"action":"remove","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":9},"end":{"row":29,"column":10},"action":"remove","lines":["K"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":9},"end":{"row":29,"column":10},"action":"insert","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":11},"end":{"row":29,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":12},"end":{"row":29,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":13},"end":{"row":29,"column":14},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":13},"end":{"row":29,"column":14},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":13},"end":{"row":29,"column":15},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":14},"end":{"row":29,"column":15},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":15},"end":{"row":29,"column":16},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":16},"end":{"row":29,"column":17},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":18},"end":{"row":29,"column":19},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":19},"end":{"row":29,"column":20},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":19},"end":{"row":29,"column":20},"action":"remove","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":19},"end":{"row":29,"column":20},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":20},"end":{"row":31,"column":1},"action":"insert","lines":["","    ","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":7},"end":{"row":30,"column":8},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["s"]},{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":25},"end":{"row":31,"column":0},"action":"insert","lines":["",""]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":4},"end":{"row":31,"column":5},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":5},"end":{"row":31,"column":6},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":6},"end":{"row":31,"column":7},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":7},"end":{"row":31,"column":8},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":9},"end":{"row":31,"column":10},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":10},"end":{"row":31,"column":11},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":10},"end":{"row":31,"column":11},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":9},"end":{"row":31,"column":10},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":9},"end":{"row":31,"column":10},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":10},"end":{"row":31,"column":11},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":11},"end":{"row":31,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":12},"end":{"row":31,"column":13},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":13},"end":{"row":31,"column":14},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":15},"end":{"row":31,"column":16},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"insert","lines":[" "]},{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"insert","lines":["="]},{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":21},"end":{"row":31,"column":22},"action":"insert","lines":["a"]},{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":23},"end":{"row":31,"column":24},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":23},"end":{"row":31,"column":24},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":21},"end":{"row":31,"column":22},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":21},"end":{"row":31,"column":22},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":23},"end":{"row":31,"column":24},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":24},"end":{"row":31,"column":25},"action":"insert","lines":["p"]},{"start":{"row":31,"column":25},"end":{"row":31,"column":26},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":26},"end":{"row":31,"column":27},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":27},"end":{"row":31,"column":28},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":28},"end":{"row":31,"column":29},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":29},"end":{"row":31,"column":30},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":30},"end":{"row":31,"column":31},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":31},"end":{"row":31,"column":32},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":32},"end":{"row":31,"column":33},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":0},"end":{"row":32,"column":1},"action":"remove","lines":["var mongoose = require('mongoose');","","// Schema for users who have access to orders","var Schema = mongoose.Schema;","var userSchema = new Schema({","    user: String,","    password: String","});","","var userModel = mongoose.model('User', userSchema);","","function User(obj) {","    this.user = obj.user;","    this.password = obj.password;","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":3},"end":{"row":17,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":3},"end":{"row":16,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1423231328773}