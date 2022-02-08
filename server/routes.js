const controller = require('./controller/index.js');
const router = require('express').Router();



//routes for each thing request: get a list of all doctors, get a list of appts for that doctor, delete existing appt, add a new appt

router.get('/doctorList', controller.getDoctorList.getList);
router.get('/apptList', controller.getAppts.getAppointments);




module.exports = router;