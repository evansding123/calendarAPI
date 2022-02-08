//let doctorList = ['Bob', 'Jane', "Billy"]
const doctorList = require('../data/doctors.json')

module.exports = {
  //get list of doctors in json file completely
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
  },

  getAppointments: async (name, time) => {

    try {
      let res = [];
      //currently not time optimized, need to take a look later
      for(let keys in doctorList) {
       if(doctorList[keys].Name === name) {
         let apptList = doctorList[keys].Appointments;
         for(let id in apptList) {
           if(apptList[id].Time === time) {
              res.push(apptList[id]);
           }
         }
       }
      }

      //console.log(res)
      return res;
    } catch(error) {
      console.log(error);
      throw(error);
    }
  }
}


