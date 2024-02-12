const express = require('express')
const app = express()
const routeVoiture = require('./routes/crudvoiture')
const PORT = 6000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/voiture', routeVoiture);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
});