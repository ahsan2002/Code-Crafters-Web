import express from 'express';
import cors from 'cors';


const app = express()
const port = process.env.PORT || 5001;


app.use(cors({
    origin: ['http://localhost:3000',"*"],
    credentials: true
}));

const eventdata=[
    {
        mainHeading:'Artificial Intelligence in Real World',
        subHeading:'A Coming Change',
        location:'NED University Main Auditorium',
        date:'July 4 Thursday 2020',
        des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio',
        position:'previous'
    },
    {
        mainHeading:'Artificial Intelligence in Real World',
        subHeading:'A Coming Change',
        location:'NED University Main Auditorium',
        date:'July 4 Thursday 2020',
        des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio',
        position:'upcoming'
    },
    {
        mainHeading:'Artificial Intelligence in Real World',
        subHeading:'A Coming Change',
        location:'NED University Main Auditorium',
        date:'July 4 Thursday 2020',
        des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio',
        position:'upcoming'
    },
    {
        mainHeading:'Artificial Intelligence in Real World',
        subHeading:'A Coming Change',
        location:'NED University Main Auditorium',
        date:'July 4 Thursday 2020',
        des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio',
        position:'upcoming'
    },
    {
        mainHeading:'Artificial Intelligence in Real World',
        subHeading:'A Coming Change',
        location:'NED University Main Auditorium',
        date:'July 4 Thursday 2020',
        des:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio',
        position:'ongoing'
    },
    {
        mainHeading:'CHAT-GPT WAR IN MODERN WORLD',
        subHeading:'GPT-4',
        location:'FAST University Main Auditorium',
        date:'July 9 Saturday 2021',
        des:'GPT-4 was just released, and it represents significant enhancements over ChatGPT powered by GPT-3.5. Among the enhancements is an improved ability to maintain coherence over longer sessions and larger prompts.',
        position:'ongoing'
    },
    {
        mainHeading:'CHAT-GPT WAR IN MODERN WORLD',
        subHeading:'GPT-4',
        location:'FAST University Main Auditorium',
        date:'July 9 Saturday 2021',
        des:'GPT-4 was just released, and it represents significant enhancements over ChatGPT powered by GPT-3.5. Among the enhancements is an improved ability to maintain coherence over longer sessions and larger prompts.',
        position:'ongoing'
    },
    {
        mainHeading:'GOOGLE DSC Solution Task',
        subHeading:'Google',
        location:'GIK University Main Auditorium',
        date:'Sep 9 Saturday 2022',
        des:'The Tech Events featured in this list take place throughout the year and cover a wide range of different industries.',
        position:'previous'
    },
    {
        mainHeading:'GOOGLE DSC Solution Task',
        subHeading:'Google',
        location:'GIK University Main Auditorium',
        date:'Sep 9 Saturday 2022',
        des:'The Tech Events featured in this list take place throughout the year and cover a wide range of different industries.',
        position:'previous'
    },

]

app.get('/events', (req, res) => {
    res.send({
        message: "got all products successfully",
        data: eventdata
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})