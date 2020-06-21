var mongoose = require('mongoose');

var moment = require('moment');

var Schema = mongoose.Schema;

var TicketSchema = new Schema(
    {
        opening_description: {type: String, required: true, max: 400},
        category: {type: Schema.Types.ObjectId, ref: 'TicketCategory', required: true},
        customer_first_name: {type: String, max: 150, default: 'no_name'},
        customer_family_name: {type: String, max: 150, default: 'no_name'},
        customer_email: {type: String, required: true},
        customer_phone_number: {type: String, max: 30, default: 'no phone'},
        technician: {type: Schema.Types.ObjectId, ref: 'Technician'},
        date_of_creation: {type: Date, default: Date.now},
        date_of_appointment: {type: Date, default: Date.now},
        date_of_closure: {type:Date, default: Date.now},
        closure_description: {type: String, required: true, max: 400, default: 'Case is open'},
        status: {type: String, required: true, enum: ['Open', 'Appointment', 'In_Progress', 'Closed_Success', 'Closed_Fail'], default: 'Open'}
    }
);

//virtual for customer name
TicketSchema
.virtual('customer_name') 
.get(function (){

// To avoid errors in cases where a customer does not have either a family name or first name
// We want to make sure we handle the exception by returning an empty string for that case
    var fullname = '';
    if (this.customer_first_name && this.customer_family_name) {
        fullname = this.customer_family_name + ', ' + this.customer_first_name
    }
    if (!this.customer_first_name || !this.customer_family_name) {
        fullname = '';
    }
    
    return fullname; 
});


//Virtual for ticket's url.
TicketSchema
.virtual('url')
.get(function(){
    return '/services/ticket/' + this._id
});

module.exports = mongoose.model('Ticket', TicketSchema);

