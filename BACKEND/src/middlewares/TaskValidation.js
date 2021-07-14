


const TaskValidation = async function(req, res, next) {
    const {macaddress, type, tittle, description, when} = req.body;

    if(!macaddress) {
        return res.status(400).json({error:"McAdress está vazio"})
    }
    else {
        next()
    }

}

module.exports = TaskValidation;