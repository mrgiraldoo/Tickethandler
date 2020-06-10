var Technician = require('../models/technician');

//Display a list of all technicians
exports.technician_list = function(req, res){
    res.send('NOT IMPLEMENTED: Technician list');
};

//Display detail page for a specific Technician.
exports.technician_detail = function(req, res){
    res.send('NOT IMPLEMENTED: technician detail: ' + req.params.id);
};

//Display technician create form GET.
exports.technician_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED:Technician create GET');
};

// Handle technician create on POST.
exports.technician_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Technhician create POST');
};

//Display Technician delete on GET.
exports.technician_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED:Technician delete GET');
};

//Handle Technician delete on POST.
exports.technician_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Technician delete POST');
};

// Display Technician update form on GET.
exports.technician_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Technician update GET');
};

// Handle Technician update on POST.
exports.technician_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Technician update POST');
};