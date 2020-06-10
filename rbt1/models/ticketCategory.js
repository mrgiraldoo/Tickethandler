var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TicketCategorySchema = new Schema(
    {
        name: {type: String, required: true, min: 3, max: 100}
    }
);

TicketCategorySchema
.virtual('url')
.get(function (){
    return '/services/ticketcategory/' + this._id;
});

//Export Model
module.exports = mongoose.model('TicketCategory', TicketCategorySchema);