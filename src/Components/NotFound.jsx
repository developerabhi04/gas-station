import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    // Function to navigate back to the homepage
    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Container sx={{ textAlign: 'center', mt: 10 }}>
            <Box>
                <Typography variant="h1" color="primary" sx={{ fontWeight: 'bold' }}>
                    404
                </Typography>
                <Typography variant="h4" sx={{ mb: 3 }}>
                    Oops! Page not found.
                </Typography>
                <Typography variant="body1" sx={{ mb: 5 }}>
                    The page {"you're"} looking for {"doesn't"} exist or has been moved.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleGoHome}
                >
                    Go Back to Home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;
