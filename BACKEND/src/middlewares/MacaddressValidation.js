
const MacaddressValidation = (req, res, next) => {
    if (!req.body.macaddress) {
        res.status(400).json({error:"O macaddress está vazio"})
    }
    else {
        next()
    }
}

module.exports = MacaddressValidation