const Car = require('../models/car.model');

module.exports.helloWorld = (req, res)=>(
    res.json({msg:"hello world modularized"})
)

module.exports.createCar = (req, res)=> {
    Car.create(req.body)
    .then(newlyCreatedCar => {
        res.json(newlyCreatedCar);
    })
    .catch(err=>{
        res.json({message: 'Something went wrong', error: err});
    })
}

module.exports.findAllCars = (req, res)=> {
    Car.find ()
    .then(allCars=>{  
        res.json({results: allCars})  
    })
    .catch(err=>{
        res.json({message: 'Something went wrong', error: err});
    })
}


module.exports.updateCar = (req, res) => {
    Car.findByIdAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true , runValidators: true}
    )
    .then(updatedCar => {
        res.json({results:updatedCar})
    })
    .catch(err=>{
        res.json({message: 'Something went wrong', error: err});
    })
}

module.exports.deleteCar = (req, res) => {
    Car.deleteOne(
        {_id: req.params._id}
    )
    .then(deletedCar => {
        res.json({results: deletedCar})
    })
    .catch(err=>{
        res.json({message: 'Something went wrong', error: err});
    })
}

module.exports.getOneCar = (req, res) => {
    Car.findById({_id: req.params._id})
    .then(foundCar => {
        res.json({results: foundCar})
    })
    .catch(err=>{
        res.json({message: 'Something went wrong', error: err});
    })
}