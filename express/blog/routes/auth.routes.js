const express = require('express');
const router = express.Router();

// /auth/login
router.post('/login', (req, res) => {
    res.json({msg: "Login Route"})
})




module.exports = router;