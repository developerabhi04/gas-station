import {
    Box,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    Avatar,
    InputLabel,
    Dialog,
    DialogContent,
    IconButton,
} from "@mui/material";
import AdminLayout from "./AdminLayout";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close"; // Importing Close Icon

const FormManagementView = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        panCardPhoto: "",
        customIdPhoto: "",
        address: "",
        status: "",
    });

    // State to handle image modal
    const [openImageModal, setOpenImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    // Mock API call to simulate data fetching
    useEffect(() => {
        const fetchData = async () => {
            const data = await mockFetchFromBackend(); // Replace with your API call
            setFormData(data);
        };

        fetchData();
    }, []);

    const mockFetchFromBackend = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    name: "John Doe",
                    email: "john.doe@example.com",
                    contact: "+1234567890",
                    panCardPhoto: "https://cemstar-supplies.vercel.app/assets/premium-concrete-mix-supply-DB9ZGMs2.jpg", // Placeholder image
                    customIdPhoto: "https://cemstar-supplies.vercel.app/assets/premium-concrete-mix-supply-DB9ZGMs2.jpg", // Placeholder image
                    address: "123 Main Street, City, Country",
                    status: "Pending",
                });
            }, 1000);
        });
    };

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setOpenImageModal(true);
    };

    const handleCloseImageModal = () => {
        setOpenImageModal(false);
    };

    return (
        <AdminLayout>
            <Container>
                <Paper elevation={3} sx={{ p: 4, borderRadius: "12px", mt: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Applicant Details
                    </Typography>

                    {/* Form Fields with Two Columns in One Row */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Title"
                                name="title"
                                value={formData.title}
                                disabled
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={formData.email}
                                disabled
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Contact Number"
                                name="contact"
                                value={formData.contact}
                                disabled
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Address"
                                name="address"
                                value={formData.address}
                                multiline
                                rows={3}
                                disabled
                            />
                        </Grid>
                    </Grid>

                    {/* Document Photos with Two Columns in One Row */}
                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <InputLabel>PAN Card Photo</InputLabel>
                                <Avatar
                                    src={formData.panCardPhoto}
                                    alt="PAN Card"
                                    variant="rounded"
                                    sx={{
                                        width: 300,
                                        height: 200,
                                        mt: 2,
                                        border: "1px solid #ddd",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleImageClick(formData.panCardPhoto)}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box>
                                <InputLabel>Custom ID Photo</InputLabel>
                                <Avatar
                                    src={formData.customIdPhoto}
                                    alt="Custom ID"
                                    variant="rounded"
                                    sx={{
                                        width: 300,
                                        height: 200,
                                        mt: 2,
                                        border: "1px solid #ddd",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleImageClick(formData.customIdPhoto)}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box>
                                <InputLabel>Custom ID Photo</InputLabel>
                                <Avatar
                                    src={formData.customIdPhoto}
                                    alt="Custom ID"
                                    variant="rounded"
                                    sx={{
                                        width: 300,
                                        height: 200,
                                        mt: 2,
                                        border: "1px solid #ddd",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleImageClick(formData.customIdPhoto)}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

                {/* Image Modal */}
                <Dialog open={openImageModal} onClose={handleCloseImageModal} maxWidth="md">
                    <DialogContent sx={{ position: "relative" }}>
                        {/* Close Icon Button */}
                        <IconButton
                            aria-label="close"
                            onClick={handleCloseImageModal}
                            sx={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                                color: "red",
                                // color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon sx={{ fontSize: "2rem" }} />
                        </IconButton>

                        {/* Enlarged Image */}
                        <img
                            src={selectedImage}
                            alt="Full view"
                            style={{ width: "100%", height: "auto", padding: "1rem", borderRadius: "8px" }}
                        />
                    </DialogContent>
                </Dialog>
            </Container>
        </AdminLayout>
    );
};

export default FormManagementView;
