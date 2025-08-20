import React from "react";
import "./AboutPage.css"
import Card from "../../components/Card/Card.jsx"; // Adjust the path as needed

function AboutPage () {
    return(
        <div className="About-section">

            {/* NEW: Group the image and text containers */}
            <div className="About-intro-section">
                <div className="About-image-container">
                    <img src="/assets/about-us.jpg" alt="About pic" />
                </div>

                <div className="About-text-container">
                    <h2>ABOUT BUSOWEF</h2>
                    <p>
                        At the heart of our organization is a deep and unwavering commitment to uplifting individuals and communities
                        facing adversity. We believe in the power of empathy and collective effort to create lasting positive change.
                        Driven by a profound sense of responsibility towards our shared humanity, we strive to address the root causes of
                        poverty, school dropouts, healthcare disparities and many others in Uganda.
                    </p>

                    <p>
                        We are more than just an aid provider; we are a catalyst for empowerment. Our approach focuses on sustainable solutions,
                        community-led initiatives, providing access to essential resources. We work hand-in-hand with local partners and dedicated
                        volunteers, fostering a spirit of collaboration and mutual respect.
                    </p>

                    <p>
                        Our journey is fueled by the unwavering support of individuals who share our vision of a more just and equitable world.
                        Every contribution, whether it's a donation of time, resources, or expertise, strengthens our ability to reach more
                        people and expand the scope of our work.
                    </p>

                    <p>
                        We are committed to transparency and accountability, ensuring that every act of generosity is used effectively to make
                        a tangible difference in the lives of those who need it most.
                    </p>

                    <p>
                        Join us in our mission to build a brighter future, one act of compassion at a time. Together, we can empower individuals,
                        strengthen communities, and create a world where everyone has the opportunity to thrive.
                    </p>
                </div>
            </div> {/* End About-intro-section */}


            {/* This section will now appear below the About-intro-section */}
            <div className="About-page-cards-section">
                <h2>What We Do</h2>
                <div className="About-Cards-container">
                    <Card
                        icon={<img src="/assets/our-mission-icon.png" alt="Education icon" />}
                        title="Education Support"
                        description="Providing resources and opportunities for children to access quality education."
                        showButton={true}
                    />
                    <Card
                        icon={<img src="/assets/make-donation-icon.png" alt="Health icon" />}
                        title="Health & Wellness"
                        description="Improving health outcomes through access to medical care and health education."
                        showButton={true}
                    />
                    <Card
                        icon={<img src="/assets/help-icon.png" alt="Elderly icon" />}
                        title="Elderly Care"
                        description="Supporting the well-being and dignity of elderly, youth, and the women in ugandan communities."
                        showButton={true}
                    />
                    <Card
                        icon={<img src="/assets/programs-icon.png" alt="Community icon" />}
                        title="Community Development"
                        description="Initiating projects that empower communities and foster self-sufficiency."
                        showButton={true}
                    />
                </div>
            </div>

            <div className="Our-Team-Cards-section">
                <h2>OUR TEAM</h2>
                <div className="Our-Team-Cards">
                    <Card
                        icon={<img src="/assets/member-2.jpg" alt="Education icon" />}
                        title="Dr. Mayanja James"
                        description="Co-Founder."
                        showButton={false}
                    />
                    <Card
                        icon={<img src="/assets/our-mission-icon.png" alt="Health icon" />}
                        title="Prof. Annet Womeli"
                        description="Co-Founder."
                        showButton={false}
                    />
                    <Card
                        icon={<img src="/assets/JT3.jpg" alt="Elderly icon" />}
                        title="Tihabwangye Joshua"
                        description="Co-Founder."
                        showButton={false}
                    />
                    <Card
                        icon={<img src="/assets/JT9.jpg" alt="Community icon" />}
                        title="Tumusiime Elijah"
                        description="Co-Founder."
                        showButton={false}
                    />
                </div>
            </div>            
        </div>
    );
};

export default AboutPage;