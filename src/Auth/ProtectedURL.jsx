import { useLocation, Navigate } from 'react-router-dom';

const ProtectedURL = ({ children }) => {
    const location = useLocation();
    const { state } = location;

    // Check if the `state` is set and if `state.from` is 'withinApp'
    if (!state || state.from !== 'withinApp') {
        return <Navigate to="/" replace />;
    }

    // If `state.from` is valid, render the children (protected component)
    return children;
};
export default ProtectedURL;


