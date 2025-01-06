import { useState, useEffect } from 'react';
import { State, City } from 'country-state-city';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const [states, setStates] = useState([]); // State to hold list of states
    const [cities, setCities] = useState([]); // State to hold list of cities
    const [selectedState, setSelectedState] = useState(''); // State to hold the selected state code
    const [selectedCity, setSelectedCity] = useState(''); // State to hold the selected city name
    const [location, setLocation] = useState(''); // State to hold the location/area input value
    const navigate = useNavigate(); // To navigate to another route on form submission

    // Fetch states data when the component mounts
    useEffect(() => {
        const statesData = State.getStatesOfCountry('IN'); // Fetch states for India (ISO Code 'IN')
        setStates(statesData); // Set the states data to the state variable
    }, []); // Empty dependency array ensures this runs only once on mount

    // Handle the state selection change
    const handleStateChange = (e) => {
        const stateCode = e.target.value;
        setSelectedState(stateCode); // Update the selected state

        // Fetch cities for the selected state
        const citiesData = City.getCitiesOfState('IN', stateCode); // Fetch cities for the selected state
        setCities(citiesData); // Set the cities data
        setSelectedCity(''); // Reset city selection
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Check if all fields are filled
        if (!selectedState || !selectedCity || !location) {
            alert('Please fill in all fields!'); // Alert if any field is missing
            return; // Prevent submission if any field is empty
        }

        // Find the selected state name by its code
        const selectedStateName = states.find((state) => state.isoCode === selectedState)?.name;

        // Pass the form data to the 'submit-form' page via navigation state
        navigate('/submit-form', {
            state: {
                selectedStateName, // Only pass state name, no code
                selectedStateCode: selectedState, // Pass state code (e.g., BR)
                selectedCity,  // Pass selected city
                location,      // Pass location input value
                from: 'withinApp',
            }
        });
    };

    return (
        <>
            <Helmet>
                <title>Prime Petrol Distributors - Apply for Petrol Pump Dealership</title>
                <meta name="description" content="Apply for a petrol pump dealership with Prime Petrol Distributors. View the latest updates and learn more about our services." />
                <meta name="keywords" content="petrol pump dealership, fuel station, fuel distributors, Prime Petrol, dealership application" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://gas-station-front.vercel.app" />

                {/* Open Graph Metadata for Social Sharing */}
                <meta property="og:title" content="Prime Petrol Distributors - Apply for Petrol Pump Dealership" />
                <meta property="og:description" content="Apply for a petrol pump dealership with Prime Petrol Distributors. Learn more about our services and the latest updates." />
                <meta property="og:image" content="https://gas-station-front.vercel.app/images/pump1.jpg" />
                <meta property="og:image:alt" content="Prime Petrol pump station dealership application" />
                <meta property="og:url" content="https://gas-station-front.vercel.app/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Metadata */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Prime Petrol Distributors - Apply for Petrol Pump Dealership" />
                <meta name="twitter:description" content="Apply for a petrol pump dealership with Prime Petrol Distributors." />
                <meta name="twitter:image" content="https://gas-station-front.vercel.app/images/pump1.jpg" />

                {/* Structured Data: Organization Info */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Prime Petrol Distributors",
                        "url": "https://gas-station-front.vercel.app",
                        "logo": "https://gas-station-front.vercel.app/images/logo.png",
                        "sameAs": [
                            "https://www.facebook.com/prime-petrol",
                            "https://twitter.com/prime-petrol"
                        ]
                    })}
                </script>

                {/* Structured Data: Dealership Offer */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Offer",
                        "name": "Petrol Pump Dealership",
                        "description": "Apply for a petrol pump dealership with Prime Petrol Distributors.",
                        "url": "https://gas-station-front.vercel.app/submit-form",
                        "eligibleRegion": "IN",
                        "seller": {
                            "@type": "Organization",
                            "name": "Prime Petrol Distributors"
                        }
                    })}
                </script>

                {/* Mobile-friendly meta tag */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            <section className="register-section">
                <div>
                    <div>
                        <div className="wise">
                            <h1>Apply For Dealership</h1>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div>
                                        <label>
                                            State<span>*</span>
                                        </label>
                                        <select
                                            name="state"
                                            value={selectedState}
                                            onChange={handleStateChange}
                                            required
                                        >
                                            <option value="">Select State</option>
                                            {states.map((state) => (
                                                <option key={state.isoCode} value={state.isoCode}>
                                                    {state.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label>
                                            City<span>*</span>
                                        </label>
                                        <select
                                            name="city"
                                            value={selectedCity}
                                            onChange={(e) => setSelectedCity(e.target.value)}
                                            required
                                        >
                                            <option value="">Select City</option>
                                            {cities.map((city) => (
                                                <option key={city.name} value={city.name}>
                                                    {city.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label>
                                            Location / area<span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            required
                                            placeholder='Enter Location / area' />
                                    </div>

                                    <div>
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
