const mongoose = require("mongoose");

// Create a Schema for Users
const CarSchema = new mongoose.Schema(
    {
        make: { 
        type: String,
        required: [true, "Make is required"],
        minlength: [3, "At least 3 characters long"]
        },
        model: { 
            type: String,
            required: [true, "Model is required"],
            minlength: [2, "At least 2 characters long"]
        },
        year: { 
            type: Number,
            required: [true, "Year is required"],
            min: [4, "At least 4 characters long"]
        },
        price: { 
            type: Number,
            required: [true, "Price is required"],
            min: [1, "At least 1 character long"]
        },
        color: { 
            type: String,
            required: [true, "Name is required"],
            minlength: [3, "At least 3 characters long"]
        },
        picUrl: { 
            type: String,
            required: [true, "Car picture required. Use a URL"],
            },

    },
    {timestamps: true}
    
);
   // create a constructor function for our model and store in variable 'User'
const Car = mongoose.model('Car', CarSchema);

module.exports = Car;