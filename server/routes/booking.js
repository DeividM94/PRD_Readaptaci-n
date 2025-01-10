import express from 'express';
import bookingControllers from '../controllers/bookingControllers.js';

const router = express.Router();

// Ruta de prueba para verificar la conexión
router.post('/booking', bookingControllers.addBooking);

export default router;