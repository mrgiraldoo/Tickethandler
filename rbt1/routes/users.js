var express = require('express');
var router = express.Router();

var technician_controller = require('../controllers/technicianController');
var customer_controller = require('../controllers/customerController');

/* Users home page redirect to the list of customers */
router.get('/', function(req, res) {
  res.redirect('/users/customers');
} );

// GET request for a customers list //
router.get('/customers', customer_controller.customer_list);

// GET request to create a customer //
router.get('/customer/create', customer_controller.customer_create_get);

//POST request to create a customer //
router.post('/customer/create', customer_controller.customer_create_post);

//GET request to delete a customer //
router.get('/customer/:id/delete', customer_controller.customer_delete_get);

//POST request to delete a customer //
router.post('/customer/:id/delete', customer_controller.customer_delete_post);

// GET request to update a customer //
router.get('/customer/:id/update', customer_controller.customer_update_get);

//POST request to update a customer //
router.post('/customer/:id/update', customer_controller.customer_update_post);

// GET request to see a customer details //
router.get('/customer/:id', customer_controller.customer_detail);


/// TECHNICIAN ROUTES ///

// GET request for the technicians list //
router.get('/technicians', technician_controller.technician_list);

// GET request to create a technician //
router.get('/technician/create', technician_controller.technician_create_get);

//POST request to create a technician //
router.post('/technician/create', technician_controller.technician_create_post);

//GET request to delete a technician //
router.get('/technician/:id/delete', technician_controller.technician_delete_get);

//POST request to delete a technician //
router.post('/technician/:id/delete', technician_controller.technician_delete_post);

// GET request to update a technician //
router.get('/technician/:id/update', technician_controller.technician_update_get);

//POST request to update a technician //
router.post('/technician/:id/update', technician_controller.technician_update_post);

// GET request to see a technician details //
router.get('/technician/:id', technician_controller.technician_detail);

module.exports = router;
