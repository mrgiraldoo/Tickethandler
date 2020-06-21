var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TechnicianSchema = new Schema(
    {
        first_name: {type: String, required: true, max: 150},
        family_name: {type: String, required: true, max: 150},
        email: {type: String, required: true},
        phone_number: {type: String, required: true, max: 30},
    }    
);

//Virtual for technician's full name
TechnicianSchema
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

//Virtual for technician's url
TechnicianSchema
.virtual('url')
.get(function(){
    return '/users/technician/' + this._id;
});

//Export model
module.exports = mongoose.model('Technician', TechnicianSchema);