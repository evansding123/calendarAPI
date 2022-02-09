const models = require('../models/getLists.js');


module.exports = {
  addAppt: async (req, res) => {
    //get a list of doctors from the database
    try {


      let time = '';
      const name = req.body.Name;
      //since we are trying to be consistent in our json objects, need to find the key in the json object we are given that has the id of the appointment.
      for(let keys in req.body) {
        if(keys !== "Name") {
          time = req.body[keys].Time;
        }
      }

      console.log(time);



      const queryData = await models.addAppt(name, req.body, time);
      //console.log(queryData)
      res.status(200).send(queryData);

    } catch(error) {
      res.status(404).send(error);
    }

  }
}