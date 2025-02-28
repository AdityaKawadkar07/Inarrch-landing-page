import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }

    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Neha S.</h3>
                                <span>Digital Marketing Intern</span>
                            </div>
                        </div>
                        <p>Joining Inarcch Technologies as an intern was the best decision I made! I got hands-on experience in digital marketing and web development, working on real projects that boosted my skills.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Simran P</h3>
                                <span>Social Media Executive</span>
                            </div>
                        </div>
                        <p>From day one, I felt like part of the Inarcch family. The leadership is encouraging, and the work culture is dynamic. It's a great place to grow your career.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Rohan K.</h3>
                                <span>Digital Marketing Intern</span>
                            </div>
                        </div>
                        <p>I joined as an intern but walked out with industry-ready skills. The team is always there to guide and support, making Inarcch a fantastic place to work</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>Digital Marketing Intern</span>
                            </div>
                        </div>
                        <p>I joined as an intern but walked out with industry-ready skills. The team is always there to guide and support, making Inarcch a fantastic place to wor</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials