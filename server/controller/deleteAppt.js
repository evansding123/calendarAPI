const models = require('../models/getLists.js');


module.exports = {
  deleteAppt: async (req, res) => {
    //get a list of doctors from the database
    try {

      let name = req.body.Name;
      let id = req.body.ID;

      const queryData = await models.deleteAppt(name, id);
      console.log(queryData)
      res.status(202).send(queryData);

    } catch(error) {
      res.status(404).send(error);
    }

  }
}