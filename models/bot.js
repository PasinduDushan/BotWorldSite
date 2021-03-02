const mongoose = require('mongoose');

const botInfo = mongoose.Schema({
  botid: {
    default: '123456789',
    type: String,
    required: true
  }, 
  botprefix: {
    default: '.',
    type: String,
    required: true
  },
  botowner:{
    type: String,
    required: true
  },
  state:{
    default: 'unverified',
    type: String,
    required: true
  },
  certification:{
    default: 'uncertified',
    type: String,
    required: true
  },
  botname:{
    default: 'someone',
    type: String,
    required: true
  },
  botimage:{
    type: String,
    required: true
  },
  botinvite:{
    type: String,
    required: true,
    default: 'somelink'
  }
});

module.exports = mongoose.model('bot-info', botInfo);