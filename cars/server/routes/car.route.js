const CarController = require('../controllers/car.controller');

module.exports = (app) => {

    app.get("/api/cars", CarController.findAllCars)
    app.post("/api/cars", CarController.createCar)
    
    app.get("/api/cars/:_id", CarController.getOneCar)

    app.put("/api/cars/:_id", CarController.updateCar)

    app.delete("/api/cars/:_id", CarController.deleteCar)
}