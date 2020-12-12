const model = require('./food');
//add plantMode and require file

class FoodCollection {
  constructor() {
    this.model = model;
  }

  get(_id) {
    if (_id) {
      return this.model.findOne({ _id }); //find and return one
    } else {
      return this.model.find({}); //find and return all
    }
  }

  create(record) {
    console.log('hitting collection create:', record);
    let newRec = new this.model(record);
    return newRec.save();
  }

  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    console.log(_id);
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = FoodCollection;