//let doctorList = ['Bob', 'Jane', "Billy"]
const doctorList = require('../data/doctors.json')

module.exports = {
  getList: async () => {

    try {
      let res = [];
      for(let keys in doctorList) {
        res.push(doctorList[keys].Name)
      }
      return res;
    } catch(error) {
      console.log(error);
      throw(error);
    }



  }
}


