var Customer = require('../models/customer');

//Display a list of all customers
exports.customer_list = function(req, res){
    Customer.find({}, 'first_name family_name email phone_number')
};

//Display detail page for a specific customer.
exports.customer_detail = function(req, res){
    res.send('NOT IMPLEMENTED: customer detail: ' + req.params.id);
};

//Display customer create form GET.
exports.customer_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED:customer create GET');
};

// Handle customer create on POST.
exports.customer_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Technhician create POST');
};

//Display customer delete on GET.
exports.customer_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED:customer delete GET');
};

//Handle customer delete on POST.
exports.customer_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: customer delete POST');
};

// Display customer update form on GET.
exports.customer_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: customer update GET');
};

// Handle customer update on POST.
exports.customer_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: customer update POST');
};