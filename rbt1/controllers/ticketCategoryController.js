var TicketCategory = require('../models/ticketCategory');
var Ticket = require('../models/ticket');

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