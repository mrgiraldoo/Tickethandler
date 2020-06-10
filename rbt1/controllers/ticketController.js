var Ticket = require('../models/ticket');

//Display ticket creation form GET
exports.ticket_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: Ticket create GET HOMEPAGE');
};

//Handle ticket creation on POST
exports.ticket_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: Ticket create POST');
};


// Display a lit of all tickets
exports.ticket_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Tickets list');
};

// Display details of a specific ticket
exports.ticket_detail = function(req, res){
    res.send('NOT IMPLEMENTED; Ticket detail' + req.params.id);
};

//Display ticket delete GET
exports.ticket_delete_get = function(req, res){
    res.send('NOT IMPLEMENTED: Ticket delete GET');
};

//Handle ticket delete on POST
exports.ticket_delete_post = function(req, res){
    res.send('NOT IMPLEMENTED: Ticket delete POST');
};

// Display Ticket update form on GET.
exports.ticket_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Ticket update GET');
};

// Handle Ticket update on POST.
exports.ticket_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ticket update POST');
};