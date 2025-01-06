import { Slider } from "6pp";
import notification from "../../assets/notification.gif";
import pump1 from "../../assets/1 (1).png";
import pump2 from "../../assets/2 (1).png";
import pump3 from "../../assets/3 (1).png";
import Partner from "./Home/Partner";
import About from "./Home/About";
import DealershipSection from "./Home/Delership";
import { Helmet } from "react-helmet-async";

const banners = [
  {
    src: pump1,
    alt: "Petrol Pump 1 - Prime Petrol Distributors"
  },
  {
    src: pump2,
    alt: "Petrol Pump 2 - Prime Petrol Distributors"
  },
  {
    src: pump3,
    alt: "Petrol Pump 3 - Prime Petrol Distributors"
  }
];

const Home = () => {
  return (
    <>
      {/* SEO Metadata using Helmet */}
      <Helmet>
        <title>Prime Petrol Distributors - Apply for Petrol Pump Dealership</title>
        <meta
          name="description"
          content="Apply for a petrol pump dealership with Prime Petrol Distributors. View the latest updates and learn more about our services."
        />
        <meta
          name="keywords"
          content="petrol pump dealership, fuel station, fuel distributors, Prime Petrol, dealership application"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gas-station-front.vercel.app" />

        {/* Open Graph Metadata for Social Sharing */}
        <meta
          property="og:title"
          content="Prime Petrol Distributors - Apply for Petrol Pump Dealership"
        />
        <meta
          property="og:description"
          content="Apply for a petrol pump dealership with Prime Petrol Distributors. Learn more about our services and the latest updates."
        />
        <meta property="og:image" content={pump1} />
        <meta property="og:url" content="https://gas-station-front.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Prime Petrol Distributors - Apply for Petrol Pump Dealership"
        />
        <meta
          name="twitter:description"
          content="Apply for a petrol pump dealership with Prime Petrol Distributors."
        />
        <meta name="twitter:image" content={pump1} />
      </Helmet>

      {/* Main Section */}
      <section className="home-section">
        <div className="home">
          {/* Notification Section */}
          <div className="Notification">
            <div className="whats-new">
              <h1>Online Application</h1>
              <div className="categories">
                <div className="inner_categories">
                  <ul>
                    {/* List of Notifications */}
                    {[
                      "Andaman Nicobar",
                      "Arunachal Pradesh",
                      "Assam",
                      "Delhi",
                      "Goa"
                    ].map((location, index) => (
                      <li key={index}>
                        <a href={`/dealership/${location.toLowerCase().replace(/\s/g, "-")}`}>
                          Advertisement Locations of Petrol Pump - KSK Dealership in {location} -
                          <span style={{ color: "red" }}>
                            Closed{" "}
                            <img src={notification} alt={`Notification for ${location}`} />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="bottom-links-b">
              <ul>
                <li>
                  <a href="/download-brochure">Download Brochure</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Banner Slider */}
          <Slider
            autoplay
            autoplayDuration={1500}
            showNav={false}
            images={banners.map(banner => banner.src)}
            alt={banners.map(banner => banner.alt)}
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
}

export default Home;
