import Hike from '../model/hike.model.js';

const list_hikes = async (req, res) => {
    await Hike.find({}, null)
        .then((hikes) => res.json(hikes))
        .catch((error) => console.log(error));
}

const list_one_hike = async (req, res) => {
    await Hike.findOne({ _id: req.params.id })
        .then((hike) => res.json(hike))
        .catch((error) => {
            console.log(error);
            res.status(400).json({error});
        });
}

const add_hike = async(req, res) => {
    const { body } = req;
    await Hike.create(body)
        .then((hike) => res.json(hike))
        .catch((error) => {
            res.status(400).json({error});
        })
}

const update_hike = async(req, res) => {
    await Hike.findByIdAndUpdate( { _id: req.params.id }, req.body, {
        new: true,
        runValidators: true
    })
        .then((user) => res.json(user))
        .catch((error) => {
            console.log(error);
            res.status(400).json({error})
        });
}

const delete_hike = async(req, res) => {
    await Hike.deleteOne({ _id: req.params.id })
        .then((hike) => res.json(hike))
        .catch((error) => console.log(error));
}

export {
    list_hikes,
    list_one_hike,
    add_hike,
    update_hike,
    delete_hike
};
