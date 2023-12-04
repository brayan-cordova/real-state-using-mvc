import express from 'express';
import userRoutes from './src/routes/userRoutes.js';

const app = express();

// pug template
app.set('view engine', 'pug');
app.set('views', './src/views');

// routing
app.use('/auth', userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
