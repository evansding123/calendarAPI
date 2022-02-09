
//const doctorList = require('../data/doctors.json')
//getting rid of the json file first, keep data in memory for now
const doctorList = {
  "123": {
    "Name": "Bob Jones",
    "Appointments": {
      "543": {
        "Patient": "Billy Bobby",
        "Date": "January 1, 2022",
        "Time": "11:30AM",
        "Kind": "New"
      }
    }
  },
  "321": {
    "Name": "Alice Kim",
    "Appointments": {
      "548": {
        "Patient": "Billy Bobby",
        "Date": "January 1, 2022",
        "Time": "11:30AM",
        "Kind": "New"
      }
    }
  }
}

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
  },

  deleteAppt: async (name, id) => {
    try {
      let res = '';

      //currently not time optimized, need to take a look later
      for(let keys in doctorList) {
       if(doctorList[keys].Name === name) {
         let apptList = doctorList[keys].Appointments;
         for(let ids in apptList) {
           if(ids === id) {
            delete apptList[id];
            console.log(doctorList)
           }
         }
       }
      }

      return res;
    } catch(error) {
      throw(error);
    }
  },

  addAppt: async (name, appt, time) => {
    try {

      let count = 0;


      for(let keys in doctorList) {
        if(doctorList[keys].Name === name) {

          for(let id in appt) {

            doctorList[keys].Appointments[id] = appt;
          }

        }
      }
      console.log(doctorList);
      return appt;
    } catch (error){
      //throw(error)
    }


  }



}


