import "./Contact.css";
import { IoSend } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { FaArrowUp, FaFacebookF, FaLinkedinIn, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";
import Typewriter from 'typewriter-effect';
// import Lottie from "lottie-react";
// import sms from "../../../public/sms.json";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f1jp6x9', 'template_ja1euw5', form.current, 'nTMf32BQU4vzHwKKf')
            .then((result) => {
                console.log(result.text);
                document.getElementById('send-message').reset();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your message has been submitted",
                    showConfirmButton: false,
                    timer: 1500
                });
            }, (error) => {
                console.log(error.text);
            });
    };

    
    return (
        <div id="contact">
            <h2 className="sub-title ">Contact <span>Me</span></h2>
            <div className="text-center mb-20">
            
                    <p className=""><span className="text-2xl text-[#0ef]"><Typewriter
                            options={{
                                strings: ["Let's work together ,"],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>
                        
                    Empowering Success Through Collaborative Teamwork.
                    </p>
                    
                    
            </div>
            <div className="contact grid grid-cols-1 md:grid-cols-2   " >
                <div className="contact-text my-16  shadow-2xl">
                <div className="contact-list flex mx-auto mb-5 max-w-7xl  text-center gap-7 justify-center">
                        <li><IoSend className="contact-logo" />contact@gmail.com</li>
                        <li><MdLocalPhone className="contact-logo" />01941456477</li>
                    </div>
                    <img className="w-[500px] px-5 h-[353px] mx-auto" src="https://i.ibb.co/McqLNL3/gif.gif" alt="" />
                    <div className="  contact-icons text-center">
                        <a href="https://www.facebook.com/profile.php?id=61552211709891"><FaFacebookF className="contact-logo" /></a>
                        <a href="https://twitter.com/irfankhan2019"><FaTwitter className="contact-logo" /></a>
                        <a href="https://www.instagram.com/irfanproggramer/"><FaInstagramSquare className="contact-logo" /></a>
                        <a href="https://www.linkedin.com/in/irfan-khan-pathan-303700270/"><FaLinkedinIn className="contact-logo" /></a>
                    </div>

                    
                </div>

                <div className="ml-7 contact-form">
                    <form id="send-message" ref={form} onSubmit={sendEmail}>
                        <div className="emailbox-style">
                            <label>Your Name</label>
                            <input type="text" name="from_name" placeholder="Enter Your Name" required />
                        </div>

                        <div className="emailbox-style">
                            <label>Your Email</label>
                            <input type="email" name="from_email" placeholder="Enter Your Email" required />
                        </div>

                        <div className="emailbox-style">
                            <label>Write Subject</label>
                            <input type="text" name="from_subject" placeholder="Write Your Subject" />
                        </div>

                        <div className="emailbox-style">
                            <label>Description</label>
                            <textarea name="message" id="" cols="40" rows="10" placeholder="Enter Your Message" required></textarea>
                        </div>

                        <input type="Submit" value="submit" className="send" />
                    </form>
                </div>
            </div>

            <div className="last-text">
                <p>Developed by Irfan Khan Pathan ©️ 2023</p>
            </div>
            <a href="#" className="top"><FaArrowUp className="uparrow-icon" /></a>
        </div>
    );
};

export default Contact;