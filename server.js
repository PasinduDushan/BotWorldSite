const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Botinfo = require('./models/bot.js')
const config = require('./config.json');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.get('/', async(req, res) => {
    res.render('pages/index')
});

app.post('/search', async (req, res) => {
    const dbbot = await Botinfo.findOne({botname: req.body.name_field.toLowerCase()});
 if(dbbot){
    var bot = [
        { name: dbbot.botname, description: dbbot.botprefix, invite: dbbot.botinvite, image: dbbot.botimage, },
    ];
    var tagline = "The Future generation of botlists";

    res.render('pages/search', {
        bot: bot,
        tagline: tagline
    });
  } else {
      res.render('pages/404')
  }
})

/* app.get("/find", function(req, res) {
    const Bot = Botinfo.find({ botname: 'somebot' }, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  }); */

app.get('/listedbots', function(req, res) {
    res.render('pages/listedbots');
});

app.listen(3000, async () => {
    await mongoose.connect(`mongodb+srv://pasindu:${config.dbpassword}@discordbotbotlist.ixam2.mongodb.net/${config.dbusername}?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
    }).then(console.log('Successfully connected to Database located on MongoDB'))
})
