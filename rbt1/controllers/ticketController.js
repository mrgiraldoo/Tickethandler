const validator = require('express-validator');
var Ticket = require('../models/ticket');
var Technician = require('../models/technician');
var TicketCategory = require('../models/ticketCategory');
var async = require('async');



//Display ticket creation form GET
exports.ticket_create_get = function(req, res, next){
    
    //Get all technicians and Ticket categories, which we can use for adding to our ticket
    async.parallel({
        
        ticketCategories: function(callback){
            TicketCategory.find(callback);
        },
        technicians: function(callback){
            Technician.find(callback);
        },
    }, function(err, results){
        if(err){return next(err);}
        res.render('ticket_form',{title: 'Create Ticket', ticketCategories: results.ticketCategories, technicians: results.technicians});
    });
};

//Handle ticket creation on POST
exports.ticket_create_post = [
  
    //Validate fields.
    validator.body('opening_description', 'The description must not be empty.').trim().isLength({min:1}),
    validator.body('category', 'The ticket category must not be empty.').trim().isLength({min:1}),
    validator.body('customer_first_name', 'The Customer name cannot be empty.').trim().isLength({min:1}),
    validator.body('customer_family_name', 'The Customer name cannot be empty.').trim().isLength({min:1}),
    validator.body('customer_email', 'Please provide a valid e-mail address.').trim().isLength({min:1}),
    validator.body('customer_phone_number', 'Please provide a valid phone number.').trim().isLength({min:1}),


    //Sanitize bodies using a wildcard.
    validator.sanitizeBody('*').escape(),

    //Process request after validation and sanitization.
    (req, res, next) => {

        //Extract the validation errors from a request.
        const errors = validator.validationResult(req);

        //create a ticket object with escaped and trimmed data.
        var ticket = new Ticket(
            {
                opening_description: req.body.opening_description,
                category: req.body.category,
                customer_first_name: req.body.customer_first_name,
                customer_family_name: req.body.customer_family_name,
                customer_email: req.body.customer_email,
                customer_phone_number: req.body.customer_phone_number,

            }
        );

        if (!errors.isEmpty()){
            //There are errors. Render form again with sanitized values/error messages.

            //get all technicians and ticket categories for form.
            async.parallel({

                ticketCategories: function(callback){
                    TicketCategory.find(callback);
                },
            }, function(err, results){
                if(err){return next(err);}

                res.render('ticket_form', {title: 'Create a Ticket', technicians: results.technicians, ticketCategories: results.ticketCategories, ticket: ticket, errors: errors.array()});
            });
                
                return;

        }
        else{
            // Data from form is valid. Save ticket.
            ticket.save(function(err){
                if (err) {return next(err);}
                //Succesful - redirect to new ticket record.
                res.redirect(ticket.url);
            });
        }
    }

];


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
            if(ticket==null){//No results
                var err = new Error('Ticket not found');
                err.status = 404;
                return next(err);
            };

                //Successful, so render.
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