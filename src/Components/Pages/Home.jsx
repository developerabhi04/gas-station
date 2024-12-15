import { Slider } from "6pp";
import notification from "../../assets/notification.gif";
import pump1 from "../../assets/gas-station-1664615_1280.jpg";
import pump2 from "../../assets/automobile-5340093_1280.jpg";

// import { Link } from "react-router-dom";





const banners = [
  {
    src: pump1,
  },
  {
    src: pump2,
  }
];


const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="home">
          {/* notification */}
          <div className="Notification">
            <div className="whats-new">
              <h3>
                <span>Online Application</span>
              </h3>

              <div className="categories">
                <div className="inner_categories">

                  <ul>
                    {/* 1 */}
                    <li>
                      <a>
                        Advertisement Locations of Petrol Pump - KSK Dealership in Andaman Nicobar -
                        <span style={{ "color": "red" }}>
                          Closed {" "}
                          <img src={notification} alt="img" />
                        </span>
                      </a>
                    </li>
                    {/* 2 */}
                    <li>
                      <a>
                        Advertisement Locations of Petrol Pump - KSK Dealership in Arunachal Pradesh -
                        <span style={{ "color": "red" }}>
                          Closed {" "}
                          <img src={notification} alt="img" />
                        </span>
                      </a>
                    </li>

                    {/* 3 */}
                    <li>
                      <a>
                        Advertisement Locations of Petrol Pump - KSK Dealership in Assam -
                        <span style={{ "color": "red" }}>
                          Closed {" "}
                          <img src={notification} alt="img" />
                        </span>
                      </a>
                    </li>

                    {/* 4 */}
                    <li>
                      <a>
                        Advertisement Locations of Petrol Pump - KSK Dealership in Delhi -
                        <span style={{ "color": "red" }}>
                          Closed {" "}
                          <img src={notification} alt="img" />
                        </span>
                      </a>
                    </li>

                    {/* 5 */}
                    <li>
                      <a>
                        Advertisement Locations of Petrol Pump - KSK Dealership in Goa  -
                        <span style={{ "color": "red" }}>
                          Closed {" "}
                          <img src={notification} alt="img" />
                        </span>
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
            </div>

            <div className="bottom-links-b">
              <ul>
                <li>
                  <a>Apply Now</a>
                </li>
              </ul>
            </div>
          </div>

          {/* banner */}

          <Slider
            autoplay
            autoplayDuration={1500}
            showNav={false}
            images={banners.map(banner => banner.src)}
          />

        </div>
      </section>


      <section className="notice-section">
        {/* notice */}
        <div className="notice">
          <div>
            <strong>Notice:</strong>
            <marquee>
              Applicants Please Note:- Application has to be submitted online Petrol Pump Dealership Registration Fee at www.petrolpump-ksk.com, we will not be responsible if the fee is deposited on any other platform.
            </marquee>
          </div>
        </div>
      </section>


      <section className="about-section">
        {/* aboutUs */}
        <div className="about">
          <div>
            <h2>APPLY NOW FOR A PETROL STATION DEALERSHIP OPPORTUNITY</h2>
            <p>The online application process for the petrol pump dealership will be open for a limited time. Applicants are encouraged to apply for various available locations. While filling out the application, it is crucial to have all the necessary documents scanned and ready to upload, as this will help streamline the process.</p>
            <p>Applicants must ensure that all details are filled out accurately. Any inconsistencies or incorrect information in the form will lead to immediate rejection, and once rejected, the applicant will not have the option to reapply for the same dealership.</p>
            <p>It is essential to submit the application within the given timeline, as outlined on the official portal. Any applications submitted after the closing date will not be accepted under any circumstances, and the system will no longer allow access to the application form.</p>
            <div className="links">
              <ul>
                <li>
                  <a>
                    <b>For Information Contact: </b>
                    Divisional Offices
                  </a>
                </li>
                <li>
                  <a>
                    <b>Brochure (Click to View) </b>
                  </a>
                </li>
                <li>
                  <a>
                    <b>Notice </b>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="news-events">
            <div className="imp-link">
              <h3>
                <span>News & Events</span>
              </h3>

              <ul>
                <li>
                  <a>
                    Phone No.: 022-48903516 (10-5PM).
                    <span style={{ "color": "red" }}>
                      Closed {" "}
                      <img src={notification} alt="img" />
                    </span>
                  </a>
                </li>

                <li>
                  <a>
                    View Notifications & Notices / अधिसूचनाएँ और नोटिस देखें
                    <span style={{ "color": "red" }}>
                      Closed {" "}
                      <img src={notification} alt="img" />
                    </span>
                  </a>
                </li>

                <li>
                  <a>Last date for submission of application form is 23.12.2024 till 12 midnight / आवेदन पत्र जमा करने की अंतिम तिथि 23.12.2024 रात्रि 12 बजे तक है।
                    <span style={{ "color": "red" }}>
                      Closed {" "}
                      <img src={notification} alt="img" />
                    </span>
                  </a>
                </li>

                <li>
                  <a>The last date for the application fee is 23.12.2024 till 12 midnight / आवेदन शुल्क जमा करने की अंतिम तिथि 23.12.2024 रात्रि 12 बजे तक है।
                    <span style={{ "color": "red" }}>
                      Closed {" "}
                      <img src={notification} alt="img" />
                    </span>
                  </a>
                </li>

                <li>
                  <a>The last date for the application fee is 23.12.2024 till 12 midnight / आवेदन शुल्क जमा करने की अंतिम तिथि 23.12.2024 रात्रि 12 बजे तक है।
                    <span style={{ "color": "red" }}>
                      Closed {" "}
                      <img src={notification} alt="img" />
                    </span>
                  </a>
                </li>

                <li>
                  <a>The last date for the application fee is 23.12.2024 till 12 midnight / आवेदन शुल्क जमा करने की अंतिम तिथि 23.12.2024 रात्रि 12 बजे तक है।
                    <span style={{ "color": "red" }}>
                      Closed {" "}
                      <img src={notification} alt="img" />
                    </span>
                  </a>
                </li>

                <li>
                  <a>The last date for the application fee is 23.12.2024 till 12 midnight / आवेदन शुल्क जमा करने की अंतिम तिथि 23.12.2024 रात्रि 12 बजे तक है।
                    <span style={{ "color": "red" }}>
                      Closed {" "}
                      <img src={notification} alt="img" />
                    </span>
                  </a>
                </li>

                <li>
                  <a>Announcement / घोषणाएं
                    <span style={{ "color": "red" }}>
                      Closed {" "}
                      <img src={notification} alt="img" />
                    </span>
                  </a>
                </li>

              </ul>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home