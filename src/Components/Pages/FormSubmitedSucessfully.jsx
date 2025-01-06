import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const FormSubmitedSucessfully = () => {
    const navigate = useNavigate();
    const location = useLocation();

    
    // Function to navigate to home page
    const homeUrl = () => {
        navigate('/', { state: { from: 'withinApp' }, replace: true });
    };

    // Prevent user from going back to form page after submission
    useEffect(() => {
        // If user did not come from within the app, redirect to home
        if (!location.state || location.state.from !== 'withinApp') {
            navigate("/", { replace: true });
        }

        // Block the back button after form submission by replacing history entry
        window.history.pushState(null, null, window.location.href);
        const handlePopState = () => {
            // Redirect to home page if back button is pressed
            navigate("/", { replace: true });
        };

        // Prevent the default back behavior
        window.addEventListener("popstate", handlePopState);

        return () => {
            // Cleanup listener on component unmount
            window.removeEventListener("popstate", handlePopState);
        };
    }, [navigate, location]);

    return (
        <div className="success-container">
            <div className="success-message">
                <h2>🎉 Congratulations!</h2>
                <p>Your form was successfully submitted.</p>
                <button className="success-button" onClick={homeUrl}>Go to Home</button>
            </div>
        </div>
    );
};

export default FormSubmitedSucessfully;
