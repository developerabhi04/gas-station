import notification from "../../../assets/notification.gif";

const About = () => {
    return (
        <section className="about-section">
            {/* aboutUs */}
            <div className="about">
                <div>
                    <h1>Welcome to Prime Petrol Distributors – Empowering India’s Fuel Retailers</h1>
                    <p>Are you ready to become a part of India’s thriving fuel industry? At [Your Business Name], we offer an unparalleled opportunity for entrepreneurs and business leaders to establish themselves as trusted fuel retailers through our exclusive petrol pump dealership program. With a commitment to quality, reliability, and sustainability, we aim to fuel not just vehicles but the dreams of aspiring business owners across the nation.</p>

                    <div className="links">
                        <h2>The Benefits of Our Dealership Program</h2>
                        <ul>
                            <li>
                                <p><strong>Strong Brand Recognition:</strong> Leverage a well-established brand to attract more customers.</p>
                                <p><strong>Guaranteed Fuel Supply:</strong> Ensure uninterrupted operations with our robust supply chain.</p>
                                <p><strong>Marketing and Advertising Support:</strong> Benefit from national and local campaigns to drive footfall.</p>
                                <p><strong>Training and Skill Development:</strong> Equip yourself and your team with the knowledge needed to run a successful dealership.</p>
                                <p><strong>Customizable Station Layouts:</strong> Build a station that meets the unique needs of your region and clientele.</p>
                                <p><strong>Value-Added Services:</strong> Offer additional services like car washes, convenience stores, and EV charging to increase revenue streams.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="news-events">
                    <div className="imp-link">
                        <h3>Latest News & Events</h3>
                        <ul>
                            <li>
                                <a href="#" title="Customer Support: Phone No.: 022-48903516 (10-5PM)">
                                    Phone No.: 022-48903516 (10-5PM)
                                    <span style={{ color: "red" }} title="Current status: Closed">
                                        Closed
                                        <img src={notification} alt="Notification icon indicating the status is closed" title="Phone number is closed for the day" />
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="View notifications and notices">
                                    View Notifications & Notices / अधिसूचनाएँ और नोटिस देखें
                                    <span style={{ color: "red" }} title="Current status: Closed">
                                        Closed
                                        <img src={notification} alt="Notification icon indicating the status is closed" title="Notifications are currently unavailable" />
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="Last date for submission of the application form is 23.12.2024 till 12 midnight">
                                    Last date for submission of application form is 23.12.2024 till 12 midnight / आवेदन पत्र जमा करने की अंतिम तिथि 23.12.2024 रात्रि 12 बजे तक है।
                                    <span style={{ color: "red" }} title="Current status: Closed">
                                        Closed
                                        <img src={notification} alt="Notification icon indicating the status is closed" title="Application submission deadline has passed" />
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="Last date for the application fee is 23.12.2024 till 12 midnight">
                                    The last date for the application fee is 23.12.2024 till 12 midnight / आवेदन शुल्क जमा करने की अंतिम तिथि 23.12.2024 रात्रि 12 बजे तक है।
                                    <span style={{ color: "red" }} title="Current status: Closed">
                                        Closed
                                        <img src={notification} alt="Notification icon indicating the status is closed" title="Application fee deadline has passed" />
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="Announcement / घोषणाएं">
                                    Announcement / घोषणाएं
                                    <span style={{ color: "red" }} title="Current status: Closed">
                                        Closed
                                        <img src={notification} alt="Notification icon indicating the status is closed" title="Announcements section is currently unavailable" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
