import React from 'react'

import './AboutPastProjects.css'

const AboutPastEvent = () => {
    const data = [

        {
            img: 'https://www.rcai.pk/assets/images/projects/all%20project%20page/weedbot.png',
            head: 'Weed Bot',
            des: "Cotton is a natural crop, and it is one of the world’s expanding textile industries. This industry yearly gives at least $600 billion worldwide. 60% of Pakistan's overseas earnings occupy the production of cotton products. Many types of pests and viruses attack cotton crops.",
        },
        {
            img: 'https://www.rcai.pk/assets/images/projects/all%20project%20page/autonomous-vehicle.png',
            head: 'Autonomous Vehicle',
            des: "The RCAI aims to lead innovation in the automotive sector of Pakistan. We have proceeded to gather real-world data with the help of state-of-the-art cameras and equipment and have shared a glimpse of our data collection and analysis. The Autonomous Vehicle, as the name suggests, will be able to drive without human interaction.",
        },
        {
            img: 'https://www.rcai.pk/assets/images/projects/all%20project%20page/RVM1.2.png',
            head: 'Reverse Vending Machine (RVM)',
            des: "TRVM is an effort of RCAI to reduce plastic waste in Pakistan. We have observed that in Pakistan, no system exists to recycle PET bottles. Consequently, consumers dump them in dustbins, mostly anywhere else they like. Plastic is naturally impossible to degenerate, so it is necessary to collect all the bottles produced and transfer them to be recycled.",
        },
    ]



    return (
        <>

        <div>
            <h2 className="text-center main-sponser-heading">PAST PROJECTS</h2>
        </div>

<section class="articles">

    {
        data.map((h)=>{
            return(
            <article>
                <div class="article-wrapper">
                <figure>
                    <img src={h.img} alt="" />
                </figure>
                <div class="article-body">
                    <h2>{h.head}</h2>
                    <p>
                    {h.des}
                    </p>
                    <a  class="read-more">
                    Read more <span class="sr-only">about this is some title</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    </a>
                </div>
                </div>
            </article>

            )
        })
    }

</section>


        </>
    )
}

export default AboutPastEvent