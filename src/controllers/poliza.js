import Poliza from '../models/poliza';



const add = async (req, res) => {

    const poliza= new Poliza({
        ...req.body
        });

    try {
        await poliza.save();
        res.status(201).send(poliza)
    } catch (error) {
        res.status(500).send(error)
    }

}

const updatePoliza = async (req, res) => {

    const id = req.params.id;
    const updates = Object.keys(req.body)
    const alloweUpdates = ['nombre', 'tipoCubrimiento', 'inicioVigencia', 'periodo','precio','tipoRiesgo'];
    const isValidOperation = updates.every((update) => alloweUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send('Invalid update')
    }

    try {
        const poliza = await Poliza.findOne({ _id: req.params.id});
        // const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!poliza) {
            res.status(404).send('poliza cannot found')
        }
        updates.forEach((update) => poliza[update] = req.body[update])
        await poliza.save();
        res.status(200).send(poliza)
    } catch (error) {
        res.status(500).send('Server error  ocurred')
    }

}



const getAll = async (req, res) => {

  

    try {
         
       const results = await Poliza.find({})
        res.status(200).send(results)
    } catch (error) {
        res.status(500).send();
    }
}

const deletePoliza = async (req, res) => {

    const id = req.params.id;


    try {
        const poliza = await Poliza.findByIdAndDelete({ _id: id})

        if (!poliza) {
            res.status(404).send('Cannot found this poliza')
        }
        res.status(200).send('Poliza was remove')
    } catch (error) {
        res.status(500).send(error);

    }
}
/*


const getById = async (req, res) => {

    const _id = req.params.id;

    try {
        const task = await Task.findOne({ _id, owner: req.user._id })
        if (!task) {
            res.status(404).send('Task cannot found');
        }
        res.status(200).send(task);

    } catch (error) {
        res.status(400).send(error)
    }

}
const updateTask = async (req, res) => {

    const id = req.params.id;
    const updates = Object.keys(req.body)
    const alloweUpdates = ['name', 'description', 'date', 'completed'];
    const isValidOperation = updates.every((update) => alloweUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send('Invalid update')
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });
        // const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!task) {
            res.status(404).send('Task cannot found')
        }
        updates.forEach((update) => task[update] = req.body[update])
        await task.save();
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send('Server error  ocurred')
    }

}


const deleteTask = async (req, res) => {

    const id = req.params.id;


    try {
        const task = await Task.findByIdAndDelete({ _id: id, owner: req.user._id })

        if (!task) {
            res.status(404).send('Cannot found this task')
        }
        res.status(200).send('Task was remove')
    } catch (error) {
        res.status(500).send(error);

    }
}
*/
const TaskController = {
    add,updatePoliza,getAll,deletePoliza
};


export default TaskController;