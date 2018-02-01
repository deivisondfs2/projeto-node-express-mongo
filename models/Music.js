var mongoose = require('mongoose');

var MusicSchema = new mongoose.Schema({
    nome : {
        type: String,
        require: true
    },
    artista : {
        type: String,
        require: true
    },
    estrelas : {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Music', MusicSchema);