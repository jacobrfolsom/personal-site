import React, {useEffect} from "react";
import Aboutbio from './Aboutbio'
// import Portrait from '/public/portrait.png'

const About = () => {
    return (
        <div>
            <div>
                <h2>
                    Get to know me
                </h2>
                <Aboutbio/>
                {/*<img src={Portrait} alt=''/>*/}
            </div>
            <div>
                <div>
                </div>
            </div>
        </div>
    )
}
export default About()