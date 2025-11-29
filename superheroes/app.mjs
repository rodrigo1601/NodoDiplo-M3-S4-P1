import express from 'express';
import path from 'path';
import { connectDB } from './config/dbConfig.mjs';
import expressLayouts from 'express-ejs-layouts';
import superHeroRoutes from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));


app.use(expressLayouts);
app.set('layout', 'layout');


// Servir archivos estaticos para CSS/JS del frontend
app.use(express.static(path.resolve('./public')));

app.use('/api', superHeroRoutes);

app.use((req, res) => {
    res.status(404).send({ mensaje: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}/api`);
});