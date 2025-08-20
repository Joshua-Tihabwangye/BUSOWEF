import React from 'react';
import './Footer.css'; // We'll create this CSS file next

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-section about-us">
                    <h4>ABOUT US</h4>
                    <p>
                        We are a humanitarian organization dedicated to empower communities
                        through education and sustainable development, help the elderly
                        and also provide the necessary health services to local people.
                        Driven by compassion and a belief in collective action, we work
                        tirelessly to create lasting positive change in the lives of
                        vulnerable individuals and families.
                    </p>
                </div>

                {/* This empty div will push the contact form to the right */}
                <div className="footer-spacer"></div>

                <div className="footer-section contact-us-form">
                    <h4>CONTACT US</h4>
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="E-mail" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" rows="4" className="form-control" required></textarea>
                        </div>
                        <button type="submit" className="send-message-btn">SEND MESSAGE</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>JT Code @ copyrights 2025</p>
            </div>
        </footer>
    );
}

export default Footer;