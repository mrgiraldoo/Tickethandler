var Ticket = require('../models/ticket');

var async = require('async');

//Display ticket creation form GET
exports.ticket_create_get = function(req, res){
    res.render('index', {title: 'Create a new ticket'})
};

//Handle ticket creation on POST
exports.ticket_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: Ticket create POST');
};


// Display a lit of all tickets
exports.ticket_list = function(req, res, next) {
    Ticket.find({}, 'category description customer_email technician date_of_creation status')
        .populate('category')
        .populate('technician')
        .exec(function(err, list_tickets){
            if(err){return next(err);}

            //Successful, so render
            res.render('ticket_list', {title: 'Ticket List', ticket_list: list_tickets});
        });

};

// Display details of a specific ticket
exports.ticket_detail = function(req, res, next){

    Ticket.findById(req.params.id)
        .populate('category')
        .populate('technician')
        .exec(function(err, ticket){
            if(err){return next(err);}
            if(results.ticket==null){//No results
                var err = new Error('Ticket not found');
                err.status = 404;
                return next(err);
            }
                //Succesful, so render.
                res.render('ticket_detail', {title: ticket._id, ticket: ticket});
            });
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