import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {

    const [result,setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        formData.append("access_key", accessKey);
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us an Enquiry<img src={msg_icon} alt="" /></h3>
            <p>Have questions or looking for more details? Feel free to reach out through our enquiry form or find our contact information below. Whether it’s about our services, collaboration opportunities, or general queries, we’re here to assist you. Your feedback and enquiries matter to us as we continue to provide exceptional service to our collaborators.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Inarrch@gmail.com</li>
                <li><img src={phone_icon} alt="" />+91 772-003-6593</li>
                <li><img src={location_icon} alt="" />Nagpur-440027 <br />Maharashtra,India</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Email</label>
                <textarea name="email"  placeholder='Enter your email id' required></textarea>
                <label>Want to apply for??</label>
                <select name='program' required>
                  <option value="" selected disabled>Choose program</option>
                  <option value="Graphic Design">Graphic Designing</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Web Development">Web Development</option>
                  <option value="MBA Internship">MBA Internship</option>
                </select>
                <label>Write your messages here</label>

                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='submit-btn'>Enquire Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
