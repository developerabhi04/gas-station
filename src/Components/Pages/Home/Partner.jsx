import { useSpring, animated } from 'react-spring';

const services = [
    {
        img: "https://cemstar-supplies.vercel.app/assets/premium-concrete-mix-supply-DB9ZGMs2.jpg",
        heading: "1. A Trusted Brand",
        paragraph:
            "We’re more than just a fuel supplier. We are a partner you can trust. With years of experience in the petroleum industry and a network that spans across India, we’ve built a reputation for excellence and dependability.",
    },
    {
        img: "https://cemstar-supplies.vercel.app/assets/premium-concrete-mix-supply-DB9ZGMs2.jpg",
        heading: "2. High Returns on Investment",
        paragraph:
            "Our dealership model is designed to provide lucrative business opportunities with attractive profit margins. The growing demand for energy in India ensures steady and consistent earnings for our fuel station dealers.",
    },
    {
        img: "https://cemstar-supplies.vercel.app/assets/premium-concrete-mix-supply-DB9ZGMs2.jpg",
        heading: "3. Comprehensive Support",
        paragraph:
            "From site selection and infrastructure development to marketing and operations, we offer end-to-end support to our partners. Your dealership will thrive in a competitive market.",
    },
    {
        img: "https://cemstar-supplies.vercel.app/assets/premium-concrete-mix-supply-DB9ZGMs2.jpg",
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
