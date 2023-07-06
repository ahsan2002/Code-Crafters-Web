import React from 'react'

import './Ongoing.css'

const Ongoing = () => {
    const data = [

        {
            img: 'https://www.rcai.pk/assets/images/projects/all%20project%20page/rice-quality-analyzer.png',
            head: 'Rice Quality Analyzer',
            des: "The RCAI has developed a solution named Grain Scan that can reliably identify the length, width of the rice, Broken rice percentage, Total weight of the sample whereas our solution also detects the Chalky and yellow grains as well as their weighted Percentages.",
        },
        {
            img: 'https://www.rcai.pk/assets/images/projects/all%20project%20page/WSN1.png',
            head: 'WSN Deployment For Water Resource Management',
            des: "Water is a blessing bestowed on earth for the benefit of people. Efficient utilization is the most common issue everywhere. RCAI developed an intelligent solution for the Irrigation and Agricultural system of Pakistan.",
        },
        {
            img: 'https://www.rcai.pk/assets/images/projects/all%20project%20page/wind%20sonic%20meter.png',
            head: 'Wind Sonic Meter',
            des: "RCAI team modified the ultrasonic sensor by separating its transmitter and receiver and placed them opposite to one another with a proper line of sight so that it can measure distance directly. After modification, successful communication between transmitter and receiver took place with high accuracy.",
        },
    ]



    return (
        <>

        <div>
            <h2 className="text-center main-sponser-heading">UNDER DEVELOPMENT</h2>
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

export default Ongoing