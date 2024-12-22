const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./Routes/auth'); // Import the authentication routes
connectDB(); // to connect with database

app.use(bodyParser.json());
app.use('/api/auth', authRoutes) //// All auth routes will be prefixed with /api/auth

app.get("/", (req,res)=>{
    res.send("Server is running");
})



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));