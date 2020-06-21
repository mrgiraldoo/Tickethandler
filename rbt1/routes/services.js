var express = require('express');
var router = express.Router();

// Require controller modules.
var ticket_controller = require('../controllers/ticketController');
var ticketCategoryController = require('../controllers/ticketCategoryController');

//Services main page will be the page for creating a new ticket, hence the homepage will serve to request a new ticket//
router.get('/', function(req, res) {
    res.redirect('/services/ticket/create');
  } );

  
/// TICKET ROUTES ///

// GET request for creating a ticket and Homepage //
router.get('/ticket/create', ticket_controller.ticket_create_get);

// POST request for creating a ticket.
router.post('/ticket/create', ticket_controller.ticket_create_post);

//GET tickets list
router.get('/tickets', ticket_controller.ticket_list);

//GET request to update a ticket.
router.get('/ticket/:id/update', ticket_controller.ticket_update_get);

//POST request to update a ticket.
router.post('/ticket/:id/update', ticket_controller.ticket_update_post);

//GET request for a ticket's details.
router.get('/ticket/:id', ticket_controller.ticket_detail);


///TICKET CATEGORIES ROUTES ///

// GET request for creating a category 
router.get('/ticketcategory/create', ticketCategoryController.ticketCategory_create_get);

//POST request for creating a category
router.post('/ticketcategory/create', ticketCategoryController.ticketCategory_create_post);

//GET request to delete a category
router.get('/ticketcategory/:id/delete', ticketCategoryController.ticketCategory_delete_get);

//POST request to delete a category
router.post('/ticketcategory/:id/delete', ticketCategoryController.ticketCategory_delete_post);

//GET request to update a category
router.get('/ticketcategory/:id/update', ticketCategoryController.ticketCategory_update_get);

//POST request to update a category
router.post('/ticketcategory/:id/update', ticketCategoryController.ticketCategory_update_post);

//Get request for a category
router.get('/ticketcategory/:id', ticketCategoryController.ticketCategory_detail);

//GET request for list of all Categories
router.get('/ticketcategories', ticketCategoryController.ticketCategory_list);

module.exports = router;


