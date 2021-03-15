const IsAdmin = (req, res, next) => {
    const user = req.user;
    if (user.role !== 'admin') {
        return res.status(403).json({msg: 'You Are Not Allowed For This Action'})
    }

    next();
}

module.exports = {IsAdmin}