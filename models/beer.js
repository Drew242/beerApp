var mongoose = require('mongoose'),
    // Schema = mongoose.Schema,
    BeerSchema = new mongoose.Schema({
        // ingredients: [String],
        // forcing uniqueness and being required makes this more RESTful
        // ... because idempotent <== interview
        name: { type: String, required: true, unique: true },
        price: Number,
        calories: Number,
        IBUs: Number,
        fluidOZ: {
            type: Number,
            default: 12
        }
    });

// Beer.pre('save', ()=>{
//
// })

module.exports = mongoose.model('Beer', BeerSchema);
