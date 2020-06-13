const validator = require('express-validator');
var TicketCategory = require('../models/ticketCategory');
var Ticket = require('../models/ticket');
var async = require('async');


// Display a lit of all ticket categories
exports.ticketCategory_list = function(req, res) {
    TicketCategory.find({}, 'name')
        .exec(function(err, list_ticketCategories){
            if(err){return next(err)};

            res.render('category_list', {title: 'Categories list', ticketCategory_list: list_ticketCategories});

        })
};

// Display details of a specific ticketCategory
exports.ticketCategory_detail = function(req, res, next){
    async.parallel({
        ticketCategory: function(callback){
            TicketCategory.findById(req.params.id)
                .exec(callback);
        },
        ticketCategory_tickets: function(callback){
            Ticket.find({'category':req.params.id})
                .exec(callback);
        },
    }, function(err, results){
            if(err){return next(err);}
            if(results.ticketCategory==null) {//No results
                var err = new Error('Ticket Category not found');
                err.status = 404;
                return next(err);
            }
            //Succesful, so render
            res.render('category_detail', {title: 'Ticket Category Detail', ticketCategory: results.ticketCategory, ticketCategory_tickets: results.ticketCategory_tickets});
        })
};

//Display ticketCategory creation form GET
exports.ticketCategory_create_get = function(req, res){
    res.render('category_form', {title: 'Create Ticket Category'});
};

//Handle ticketCategory creation on POST
exports.ticketCategory_create_post = [
     //Validate that the name field is not empty
    validator.body('name', 'Genre name required').trim().isLength({min: 1 }),

    //Validate that the description field is not empty
    validator.body('description', 'Description required').trim().isLength({min: 1 }),

    //Sanitize (escape) the name and description fields.
    validator.check('name').escape(),
    validator.check('description').escape(),

    //Process request after validation and sanitization
    (req, res, next) => {
        //Extract the validation results from a request.
        const errors = validator.validationResult(req);

        //Create a ticketCategory object with escaped and trimmed data.
        var ticketCategory = new TicketCategory(
            {name:req.body.name, description:req.body.description}
        );

        if(!errors.isEmpty()){
            //There are errors, render the form with sanitized valuers/error messages.
            res.render('category_form', {title: 'Create Ticket Category', ticketCategory: ticketCategory, errors: errors.array()});
            return;
        }else{
            //Date from form is valid.
            //Check if TicketCategory with same name already exists.
            TicketCategory.findOne({'name': req.body.name})
                .exec(function(err, found_ticketCategory){
                    if(err){return next(err);}

                    if(found_ticketCategory){
                        //Ticket Category exists, redirect to its detail page.
                        res.redirect(found_ticketCategory.url);
                    }
                    else{
                        ticketCategory.save(function(err){
                            if(err){return next(err); }
                            //Ticket Category saved, redirect to genre detail page.
                            res.redirect(ticketCategory.url);
                        });
                    }
                });
        }
    }
];



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