import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_4 from '../../assets/program-4.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import program_icon_4 from '../../assets/program-icon-4.png'
import { Link } from 'react-router-dom'

const Programs = () => {
  return (
    <div className='programs'>
        <Link to="/graphic-design" className="program">
            <img className='images' src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Graphics Designing</p>
            </div>
        </Link>
        <Link to="/digital-marketing" className="program">
            <img className='images' src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Digital Marketing</p>
            </div>
        </Link>
        <Link to="web-development" className="program">
            <img className='images' src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Web Development</p>
            </div>
        </Link>
        <Link to="mba-internship" className="program">
            <img className='images' src={program_4} alt="" />
            <div className="caption">
                <img src={program_icon_4} alt="" />
                <p>MBA Internship</p>
            </div>
        </Link>
    </div>
  )
}

export default Programs