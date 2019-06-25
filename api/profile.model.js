const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-url');

// Define collection and schema for Post
const Profile = new Schema({

  name: String,

  mapPosition: {
    x: Number,
    y: Number
  },

  card: {
    image: mongoose.SchemaTypes.Url,
    content: String
  },

  
  pageVideo: {
    youtubeUrl: mongoose.SchemaTypes.Url,
    intro: String,
    firstArticle: {
      title: String,
      paragraph: String
    },
    secondArticle: {
      title: String,
      paragraph: String
    }
  }

}, {
  collection: 'profiles'
});

module.exports = mongoose.model('Profile', Profile);
