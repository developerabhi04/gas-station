const services = [
    {
        heading: "1. A Trusted Brand",
        paragraph: "We’re more than just a fuel supplier. We are a partner you can trust. With years of experience in the petroleum industry and a network that spans across India, we’ve built a reputation for excellence and dependability. Our brand stands for high-quality petrol, diesel, and alternative fuels, ensuring your customers receive the best every time they visit your station.",
    },
    {
        heading: "2. High Returns on Investment",
        paragraph: "Our dealership model is designed to provide lucrative business opportunities with attractive profit margins. The growing demand for energy in India, coupled with our efficient supply chain, ensures steady and consistent earnings for our fuel station dealers.",
    },
    {
        heading: "3. Comprehensive Support",
        paragraph: "From site selection and infrastructure development to marketing and operations, we offer end-to-end support to our partners. With our proven strategies and dedicated team, your dealership will thrive in a competitive market.",
    },
    {
        heading: "4. Sustainability and Innovation",
        paragraph: "We are committed to a greener future. By offering cleaner fuels and supporting initiatives like electric vehicle (EV) charging stations and biofuels, we help you cater to environmentally conscious customers while staying ahead of industry trends.",
    },
]

const Partner = () => {
    return (
        <section className="partner-section">
            <div className="partner-header">
                <h2>Why Partner With Us?</h2>
            </div>

            <section className="partner-cards">
                {services.map((value, index) => (
                    <div className="partner-card" key={index}>
                        <div className="partner-card-content">
                            <h3>{value.heading}</h3>
                            <p>{value.paragraph}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default Partner;
