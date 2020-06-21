const validator = require('express-validator');
var Technician = require('../models/technician');
var Ticket = require('../models/ticket');
const { validationResult } = require('express-validator');
var async = require('async');

//Display a list of all technicians
exports.technician_list = function(req, res){
    Technician.find({}, 'first_name family_name email phone_number')
        .exec(function(err, list_technicians){
            if(err){return next(err);}

            //Successful, so render
            res.render('technician_list', {title: 'Technicians List', technician_list: list_technicians});
        })
};

//Display detail page for a specific Technician.
exports.technician_detail = function(req, res){
    async.parallel({
        technician: function(callback){
            Technician.findById(req.params.id)
                .exec(callback)
        },
        technician_tickets: function(callback){
            Ticket.find({'technician': req.params.id},'_id opening_description')
                .exec(callback)
        },
    }, function(err, results){
        if(err){return next(err);} //Error in API usage.
        if(results.technician == null){ //No results
            var err = new Error('Technician not found');
            err.status = 404;
            return next(err);
        }
        //Succesful, so render.
        res.render('technician_detail', {title: 'Technician Detail', technician:results.technician, technician_tickets:results.technician_tickets});
    });
};

//Display technician create form GET.
exports.technician_create_get = function(req, res) {
    res.render('technician_form', {title: 'Create Technician'});
};

// Handle technician create on POST.
exports.technician_create_post = [

    //Validate fields
    validator.body('first_name').isLength({min:1}).trim().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters'),
    validator.body('family_name').isLength({min:1}).trim().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters'),
    validator.body('email').isLength({min:1}).trim().withMessage('The email is required'),
    validator.body('phone_number').isLength({min:1}).trim().withMessage('The phone number is required'),

    // Sanitize fields
    validator.sanitizeBody('first_name').escape(),
    validator.sanitizeBody('family_name').escape(),
    validator.sanitizeBody('email').escape(),
    validator.sanitizeBody('phone_number').escape(),

    // Process request after validation and sanitization
    (req,res,next) => {

        //Extracts the validation errors from a request.
        const errors = validationResult(req);

        if(!errors.isEmpty){
            //There are errors. Render form again with sanitized values / errors messages.
            res.render('technician_form', {title: 'Create Technician', technician: req.body, errors: errors.array()});
        }
        else{
            // Data from form is valid.

            // Create a technician object with escaped and trimmed data.
            var technician = new Technician(
                {
                    first_name: req.body.first_name,
                    family_name: req.body.family_name,
                    email: req.body.email,
                    phone_number: req.body.phone_number
                }
            );
            technician.save(function(err){
                if(err){return next(err);}
                //Succesfu - redirect to new autor record.
                res.redirect(technician.url);
            });
        }
    }
];

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