var mongoose = require('mongoose');

var moment = require('moment');

var Schema = mongoose.Schema;

var TicketSchema = new Schema(
    {
        opening_description: {type: String, required: true, max: 400},
        category: {type: Schema.Types.ObjectId, ref: 'TicketCategory', required: true},
        customer_first_name: {type: String, max: 150},
        customer_family_name: {type: String, max: 150},
        customer_email: {type: String, required: true},
        customer_phone_number: {type: String, max: 30},
        technician: {type: Schema.Types.ObjectId, ref: 'Technician'},
        date_of_creation: {type: Date},
        date_of_appointment: {type: Date},
        date_of_closure: {type:Date},
        closure_description: {type: String, required: true, max: 400, default: 'Case open'},
        status: {type: String, required: true, enum: ['Open', 'Appointment', 'In_Progress', 'Closed_Success', 'Closed_Fail'], default: 'Open'}
    }
);

//Virtual for ticket's url.
TicketSchema
.virtual('url')
.get(function(){
    return '/services/ticket/' + this._id
})

module.exports = mongoose.model('Ticket', TicketSchema);

