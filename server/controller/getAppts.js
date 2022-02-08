const models = require('../models/getLists.js');


module.exports = {
  getAppointments: async (req, res) => {
    //query a doctor name and find the list of appts he/she has
    //assuming that the information (doctor name and time) are in the request body in JSON form
    try {
      const name = req.body.Name;
      const time = req.body.Time;


      const queryData = await models.getAppointments(name, time);
      //console.log(queryData)
      res.status(200).send(queryData);

    } catch(error) {
      res.status(404).send(error);
    }

  }
}