import { motion } from 'framer-motion'
import Github from '../../assets/site-icons/git.svg'
import ResumeDownload from '../../assets/site-icons/resumedownload.svg'
import Linkedin from '../../assets/site-icons/linkedin.svg'

const wobble = {
    scale: [1, 1.1, 1.05, 1.1, 1],
    rotate: [0, -3, -3, -3, 0],
    transition: {
        scale: {
            times: [0,0.2,0.4,0.6,1],
            duration: 0.5,
        },
        rotate: {
            times:[0,0.2, 0.4, 0.6, 1],
            duration: 0.5,
        },
    },
}
const Socials = () => {
    return (
        <div>
            <a>
                <motion.img
                    className=''
                    whileHover={wobble}
                    src={ResumeDownload}
                    alt='download logo'
                    srcSet=''
                    />
            </a>
            <a>
                <motion.img
                    className=''
                    whileHover={wobble}
                    src={Github}
                    alt='Github Logo'
                    srcSet=''
                />
            </a>
            <a>
                <motion.img
                    className=''
                    whileHover={wobble}
                    src={Linkedin}
                    alt='Linkedin Logo'
                    srcSet=''
                />
            </a>
        </div>
    )
}
export default Socials