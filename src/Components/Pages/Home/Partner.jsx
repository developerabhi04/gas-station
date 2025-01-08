
import { useSpring, animated } from 'react-spring';

// Import images from the assets folder
import img1 from '../../../assets/partner-image-1.png';
import img2 from '../../../assets/partner-image-2.png';
import img3 from '../../../assets/partner-image-3.png';
import img4 from '../../../assets/partner-image-4.png';

const services = [
    {
        img: img1, // Use the imported images
        heading: "1. A Trusted Brand",
        paragraph:
            "We’re more than just a fuel supplier. We are a partner you can trust. With years of experience in the petroleum industry and a network that spans across India, we’ve built a reputation for excellence and dependability.",
    },
    {
        img: img2, // Use the imported images
        heading: "2. High Returns on Investment",
        paragraph:
            "Our dealership model is designed to provide lucrative business opportunities with attractive profit margins. The growing demand for energy in India ensures steady and consistent earnings for our fuel station dealers.",
    },
    {
        img: img3, // Use the imported images
        heading: "3. Comprehensive Support",
        paragraph:
            "From site selection and infrastructure development to marketing and operations, we offer end-to-end support to our partners. Your dealership will thrive in a competitive market.",
    },
    {
        img: img4, // Use the imported images
        heading: "4. Sustainability and Innovation",
        paragraph:
            "We are committed to a greener future. By offering cleaner fuels and supporting initiatives like electric vehicle (EV) charging stations and biofuels, we help you cater to environmentally conscious customers.",
    },
];

const Partner = () => {
    const fadeIn = useSpring({
        opacity: 1,
        transform: "translateY(0)",
        from: { opacity: 0, transform: "translateY(30px)" },
        config: { tension: 280, friction: 60 },
    });

    return (
        <section className="partner-section">
            <div className="partner-header">
                <h2>Why Partner With Us?</h2>
            </div>

            <animated.section className="partner-cards" style={fadeIn}>
                {services.map((value, index) => (
                    <div className="partner-card" key={index}>
                        <div className="partner-card-img">
                            <img src={value.img} alt={value.heading} />
                        </div>
                        <div className="partner-card-content">
                            <h3>{value.heading}</h3>
                            <p>{value.paragraph}</p>
                        </div>
                    </div>
                ))}
            </animated.section>
        </section>
    );
};

export default Partner;
