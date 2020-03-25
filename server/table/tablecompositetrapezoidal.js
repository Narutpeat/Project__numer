let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    equation : {type:String },
    a : {type: Number },
    b : {type: Number },
    n : {type: Number },
    create_date:{type:Date , default:Date.now}
});

let Compositetrapezoidal = mongoose.model('Compositetrapezoidal',Schema);
module.exports = Compositetrapezoidal;