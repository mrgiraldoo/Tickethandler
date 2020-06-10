var TicketCategory = require('../models/ticketCategory');

// Display a lit of all ticket categories
exports.ticketCategory_list = function(req, res) {
    res.send('NOT IMPLEMENTED: ticketCategory list');
};

// Display details of a specific ticketCategory
exports.ticketCategory_detail = function(req, res){
    res.send('NOT IMPLEMENTED; ticketCategory detail' + req.params.id);
};

//Display ticketCategory creation form GET
exports.ticketCategory_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: Ticket create GET');
};

//Handle ticketCategory creation on POST
exports.ticketCategory_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: ticketCategory create POST');
};

//Display ticketCategory delete GET
exports.ticketCategory_delete_get = function(req, res){
    res.send('NOT IMPLEMENTED: ticketCategory delete GET');
};

//Handle ticketCategory delete on POST
exports.ticketCategory_delete_post = function(req, res){
    res.send('NOT IMPLEMENTED: ticketCategory delete POST');
};

// Display ticketCategory update form on GET.
exports.ticketCategory_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ticketCategory update GET');
};

// Handle ticketCategory update on POST.
exports.ticketCategory_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ticketCategory update POST');
};