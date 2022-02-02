const TaskModel = require('../model/TaskModel')
const {isPast} = require('date-fns')

const TaskValidation = async function(req, res, next) {
    const {macaddress, type, title, description, when} = req.body;

    if(!macaddress) {
        return res.status(400).json({error:"McAdress está vazio"})
    }
    else if (!type) {
        return res.status(400).json({error:"Tipo (Type) está vazio"})
    }
    else if (!title) {
        return res.status(404).json({error:"Titulo está vazio"})
    }
    else if (!description) {
        return res.status(400).json({error:"A descrição está vazia"})
    }
    else if (!when) {
        return res.status(400).json({error:"O when está vazio"})
    }
    else if (isPast(new Date(when))) {
        return res.status(400).json({error:"A data escohlida está no passado"})
    }
    else {
        let exists;
        //Os 2 problemas resolvidos
        //1-Atualizar uma tarefa B para ter a mesma data que uma tarefa A e assim ter duas tarefas na mesma data
        //2-Não permitir atualizações de uma tarefa pois o código bloqueia atualização para quem tem a mesma data

        if (req.params.id) {
            //IF que será executado quando for feito um update
            //Vai verificar se alguma outra tarefa além da em questão 
            //Possui a mesma data que está sendo mandada
            //Na requisição
             exists = await TaskModel.findOne(
                {
                '_id' : {'$ne' : req.params.id}, //Tirando eu, tem alguma tarefa nessa mesma data?
                'when': {'$eq' : new Date(when)},
                'macaddress':{'$in': macaddress}
                })
        }

        else {
             exists = await TaskModel.findOne(
                {
                'when': {'$eq' : new Date(when)},
                'macaddress':{'$in': macaddress}
                })
        }

        if (exists) {
            return res.status(400).json({error:"Você ja possui uma tarefa para tal data"})
        }

        next()
    }


}

module.exports = TaskValidation;