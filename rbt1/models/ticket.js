var mongoose = require('mongoose');
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid'
var Schema = mongoose.Schema;

var TicketSchema = new Schema(
    {
        description: {type: String, required: true, max: 400},
        city: {type: String, required: true, max: 200},
        customer: {type: Schema.Types.ObjectId, ref: 'Customer', required: true}, 
        technician: {type: Schema.Types.ObjectId, ref: 'Technician'}
    }
);

//Virtual for ticket's url.
TicketSchema
.virtual('url')
.get(function(){
    return '/tickets/' + this._id
})

module.exports = mongoose.model('Ticket', TicketSchema);

