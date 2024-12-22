const DealershipSection = () => {
    return (
        <section className="dealership-section">
            <div className="dealership-container">

                {/* Hero Section */}
                <div className="dealership-hero">
                    <h2>Partner with Us</h2>
                    <p>Join hands to fuel India’s growth with our trusted dealership model.</p>
                </div>

                {/* Requirements Section */}
                <div className="dealership-card">
                    <div className="dealership-card-header">
                        <h3>What We’re Looking For</h3>
                    </div>
                    <ul className="dealership-list">
                        <li>Customer service excellence</li>
                        <li>Suitable land or interest to acquire</li>
                        <li>Willingness to invest in operations</li>
                        <li>Commitment to a sustainable future</li>
                    </ul>
                </div>

                {/* Steps Section */}
                <div className="dealership-card">
                    <div className="dealership-card-header">
                        <h3>How to Apply for a Dealership</h3>
                    </div>
                    <div className="dealership-grid">
                        <div className="dealership-step">
                            <h4>1. Submit Application</h4>
                            <p>Provide details about your location and investment capacity.</p>
                        </div>
                        <div className="dealership-step">
                            <h4>2. Site Inspection</h4>
                            <p>We’ll review and inspect your proposed site for approval.</p>
                        </div>
                        <div className="dealership-step">
                            <h4>3. Agreement</h4>
                            <p>Sign the dealership agreement and complete onboarding.</p>
                        </div>
                        <div className="dealership-step">
                            <h4>4. Launch</h4>
                            <p>Begin station setup with our guidance and open your station.</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="dealership-cta">
                    <h3>Fuel Your Future with Us</h3>
                    <p>Start your entrepreneurial journey and help power India’s energy future.</p>
                    <button className="dealership-button">Get Started</button>
                </div>

            </div>
        </section>
    );
};

export default DealershipSection;
