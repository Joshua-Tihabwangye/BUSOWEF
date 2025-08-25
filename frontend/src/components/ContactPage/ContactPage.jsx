import react, { useState } from "react";
import "./ContactPage.css"

const ContactPage = () => {
    // Use state to manage the form inputs
    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');
    const [message, setMessage] = useState ('');

    //Handling form inputs.
    const handleSubmit = (event) => {
        event.preventDefault (); // Prevents the browser from reloading the page
        console.log('Name:', name)
        console.log('Email:', email)
        console.log('Message:', message)
    }
    return (
        <div className="contact-form-container">

            <div className="contact-form-section">
                <h2>CONTACT FORM</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">

                        <input
                        type="text" 
                        placeholder="Name*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />

                        <input type="email"
                        placeholder="E-mail*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        />
                    </div>
                    <div className="form-row">
                        <textarea
                            placeholder="Message*"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="contact-info-section">
       
                <div>
                <h2>CONTACT US</h2>
                <div className="contact-detail">
                    <span className="icon">📍</span>
                    <p>Busiika, Luwero-Uganda</p>
                </div>
                <div className="contact-detail">
                    <span className="icon">📞</span>
                    <p>+256-789-323-490</p>
                </div>
                <div className="contact-detail">
                    <span className="icon">✉️</span>
                    <p>tihabwangyej@gmail.com</p>
                </div>
                </div>
            </div>
        </div>
    )

}
export default ContactPage;