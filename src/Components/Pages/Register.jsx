import { useState, useEffect } from 'react';
import { State, City } from 'country-state-city';
import { useNavigate } from 'react-router-dom';

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
    // In the Register component
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
                from: 'withinApp'
            }
        });
    };

    return (
        <section className="register-section">
            <div>
                <div>
                    <div className="wise">
                        <h3>Apply For Dealership</h3>

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
                                    <button type="submit" >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
