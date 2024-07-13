const express = require('express');
const bodyParser = require('body-parser');
const roomRoutes = require('./Routes/bookingRoute.js');
const bookingRoutes = require('./Routes/customerRoute.js');
const customerRoutes = require('./Routes/roomRoute.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(roomRoutes);
app.use(bookingRoutes);
app.use(customerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
