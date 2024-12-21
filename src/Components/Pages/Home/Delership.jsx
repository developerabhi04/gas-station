const DealershipSection = () => {
    return (
        <section className="dealership">
            <div className="dealership-wrapper">

                {/* What We’re Looking For */}
                <div className="dealership-block">
                    <h2 className="dealership-title">What We’re Looking For</h2>
                    <ul className="dealership-list">
                        <li>Passion for delivering top-notch customer service.</li>
                        <li>Possession of suitable land or willingness to acquire it.</li>
                        <li>Willingness to invest in infrastructure and operations.</li>
                        <li>Commitment to a sustainable and prosperous future.</li>
                    </ul>
                </div>

                {/* How to Apply for a Dealership */}
                <div className="dealership-block">
                    <h2 className="dealership-title">How to Apply for a Dealership</h2>
                    <div className="dealership-steps">
                        <div className="step">
                            <h4>Step 1: Submit Your Application</h4>
                            <p>Fill out our online form with details about your location, experience, and investment capacity.</p>
                        </div>
                        <div className="step">
                            <h4>Step 2: Site Inspection and Approval</h4>
                            <p>Our team will assess the location to ensure it meets our technical and commercial requirements.</p>
                        </div>
                        <div className="step">
                            <h4>Step 3: Agreement and Onboarding</h4>
                            <p>Once approved, sign the dealership agreement and undergo comprehensive training.</p>
                        </div>
                        <div className="step">
                            <h4>Step 4: Station Setup and Launch</h4>
                            <p>We’ll guide you through building and launching your fuel station, including infrastructure and marketing.</p>
                        </div>
                    </div>
                </div>

                {/* Join Us Section */}
                <div className="dealership-block">
                    <h2 className="dealership-title">Join Us in Fueling India’s Growth</h2>
                    <p>India’s energy needs are growing, and so is the opportunity for dynamic leaders to drive this growth. By joining our dealership program, you’re not just starting a business—you’re becoming part of a movement to empower communities, drive progress, and create a sustainable future.</p>
                    <p>Take the first step today and fuel your entrepreneurial dreams with us.</p>
                </div>

            </div>
        </section>
    );
};

export default DealershipSection;
