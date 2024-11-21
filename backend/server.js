const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const transactionRoutes = require('./routes/transactions');
const getData = require('./routes/transactions')

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Make sure CORS is enabled

// Routes
app.use('/api/transactions', transactionRoutes);

app.use('/getData',getData)

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/transactions', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
