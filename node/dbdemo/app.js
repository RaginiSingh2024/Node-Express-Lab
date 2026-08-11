import {errorHandler} from './middleware/errorHandler.js';
import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
import  authRoutes from './routes/authroutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use student routes
app.use('/students', studentRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});     

// Routes
app.use ('/api/students', studentRoutes);               

app.use('/api/auth', authRoutes);

//Error handler
app.use(errorHandler);

    export default  app;
