const models = require('../models/getDoctorList.js');


module.exports = {
  getList: async (req, res) => {
    //get a list of doctors from the database
    try {

      const queryData = await models.getList();
      console.log(queryData)
      res.status(200).send(queryData);

    } catch(error) {
      res.status(404).send(error);
    }

  }
}