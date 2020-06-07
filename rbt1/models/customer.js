var mongoose = require('mongoose');
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid'
var Schema = mongoose.Schema;


var CustomerSchema = new Schema (
    {
        first_name: {type: String, max: 150},
        family_name: {type: String, max: 150},
        family_name: {type: String, max: 150},
        phone_number: {type: String, max: 30},
        email: {type: mongoose.SchemaTypes.Email, required: true}
    });

//Virtual for customer's full name
CustomerSchema
.virtual('name')
.get(function (){

// To avoid errors in cases where an technician does not have either a family name or first name
// We want to make sure we handle the exception by returning an empty string for that case
    var fullname = '';
    if (this.first_name && this.family_name) {
        fullname = this.family_name + ', ' + this.first_name
    }
    if (!this.first_name || !this.family_name) {
        fullname = '';
    }
    
    return fullname; 
});

//Virtual for customer's url
CustomerSchema
.virtual('url')
.get(function(){
    return '/users/customer/' + this._id;
});

//export module
module.exports = mongoose.model('Customer', CustomerSchema);