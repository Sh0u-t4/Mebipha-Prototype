const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route all requests to index.html for SPA-like behavior
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════╗
║                                                        ║
║   🚀 MEBIPHA E-COMMERCE - Development Server          ║
║                                                        ║
║   Server is running at:                               ║
║   ➜ Local:   http://localhost:${PORT}                 ║
║                                                        ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
  `);
});
