import express from 'express';


const router = express.Router();

const events=[
    {
        mainHeading:'Artificial Intelligence in Real World',
        subHeading:'A Coming Change',
        location:'NED University Main Auditorium',
        date:'July 4 Thursday 2020',
        des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio'
    },
    {
        mainHeading:'Artificial Intelligence in Real World',
        subHeading:'A Coming Change',
        location:'NED University Main Auditorium',
        date:'July 4 Thursday 2020',
        des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio'
    },
    {
        mainHeading:'Artificial Intelligence in Real World',
        subHeading:'A Coming Change',
        location:'NED University Main Auditorium',
        date:'July 4 Thursday 2020',
        des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio'
    },

]

router.get('/events', (req, res) => {
    res.send({
        message: "got all products successfully",
        data: events
    })
})