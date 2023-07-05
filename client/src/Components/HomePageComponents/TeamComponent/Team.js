import React from 'react'
import TeamCard from './TeamCard/TeamCard'
import './Team.css'


const Team = () => {
  return (
    <>
    <section className="container-fluid section-sponser">
        <div>
            <h2 className="text-center main-sponser-heading">Our Team</h2>
        </div>
            <div className='team_card_main'>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
            </div>
    </section>


    </>
  )
}

export default Team