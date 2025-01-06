import { Slider } from "6pp";
import notification from "../../assets/notification.gif";
import pump1 from "../../assets/1 (1).png";
import pump2 from "../../assets/2 (1).png";
import pump3 from "../../assets/3 (1).png";
import Partner from "./Home/Partner";
import About from "./Home/About";
import DealershipSection from "./Home/Delership";
import { Helmet } from "react-helmet-async";

// Banners Array
const banners = [
  {
    src: pump1,
    alt: "Petrol Pump 1",
  },
  {
    src: pump2,
    alt: "Petrol Pump 2",
  },
  {
    src: pump3,
    alt: "Petrol Pump 3",
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Prime Petrol Distributors</title>
        <meta name="description" content="Prime Petrol Distributors offers a wide range of petrol pump dealership opportunities across India. Apply online today." />
        <meta name="keywords" content="petrol pump dealership, KSK dealership, fuel distribution, India petrol pump, fuel stations, dealership application" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourwebsite.com/home" />

        {/* Open Graph meta tags for social media */}
        <meta property="og:title" content="Prime Petrol Distributors" />
        <meta property="og:description" content="Apply for petrol pump dealership with Prime Petrol Distributors across various locations in India." />
        <meta property="og:url" content="https://www.yourwebsite.com/home" />
        <meta property="og:image" content={pump1} />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prime Petrol Distributors" />
        <meta name="twitter:description" content="Apply for petrol pump dealership with Prime Petrol Distributors across India." />
        <meta name="twitter:image" content={pump1} />
      </Helmet>

      <section className="home-section">
        <div className="home">
          {/* Notification Section */}
          <div className="Notification">
            <div className="whats-new">
              <h3><span>Online Application</span></h3>
              <div className="categories">
                <div className="inner_categories">
                  <ul>
                    {/* Notifications */}
                    {[
                      { state: "Andaman Nicobar", status: "Closed" },
                      { state: "Arunachal Pradesh", status: "Closed" },
                      { state: "Assam", status: "Closed" },
                      { state: "Delhi", status: "Closed" },
                      { state: "Goa", status: "Closed" }
                    ].map((item, index) => (
                      <li key={index}>
                        <a href="/details">
                          Advertisement Locations of Petrol Pump - KSK Dealership in {item.state} -
                          <span style={{ color: "red" }}>
                            {item.status} {" "}
                            <img src={notification} alt="notification icon" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Brochure Download */}
            <div className="bottom-links-b">
              <ul>
                <li><a href="/brochure.pdf" download>Download Brochure</a></li>
              </ul>
            </div>
          </div>

          {/* Banner Slider */}
          <Slider
            autoplay
            autoplayDuration={1500}
            showNav={false}
            images={banners.map(banner => ({ src: banner.src, alt: banner.alt }))}
          />
        </div>
      </section>

      {/* Notice Section */}
      <section className="notice-section">
        <div className="notice">
          <div>
            <strong>Notice:</strong>
            <marquee>
              Applicants Please Note: Application has to be submitted online at www.petrolpump-ksk.com. We will not be responsible if the fee is deposited on any other platform.
            </marquee>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <About />
      <Partner />
      <DealershipSection />
    </>
  );
};

export default Home;
