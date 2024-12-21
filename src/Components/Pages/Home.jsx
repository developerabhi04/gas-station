import { Slider } from "6pp";
import notification from "../../assets/notification.gif";
import pump1 from "../../assets/1 (1).png";
import pump2 from "../../assets/2 (1).png";
import pump3 from "../../assets/3 (1).png";
import Partner from "./Home/Partner";
import About from "./Home/About";
import DealershipSection from "./Home/Delership";

// import { Link } from "react-router-dom";





const banners = [
  {
    src: pump1,
  },
  {
    src: pump2,
  },
  {
    src: pump3,
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
                  <a>Download Brochure</a>
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




      <About />
      <Partner />
      <DealershipSection />



    </>
  )
}

export default Home