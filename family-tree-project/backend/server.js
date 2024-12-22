const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const familyRoutes = require('./routes/familyRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/family', familyRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
