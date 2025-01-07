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
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";



const FormManagementView = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({});
    const [openImageModal, setOpenImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        const fetchFormData = async () => {
            try {
                const response = await axios.get(`${server}/apply/get-applicant/${id}`);
                console.log(response);

                setFormData(response.data.applicant);
            } catch (error) {
                console.error("Error fetching applicant data:", error);
            }
        };
        fetchFormData();
    }, [id]);

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

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Title"
                                value={formData.title || ""}

                                sx={{ mb: 2, color: "black" }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Location Description"
                                value={formData.locationDescription || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Mode of Selection"
                                value={formData.modeOfSelection || ""}

                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="State"
                                value={formData.state || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Published Date"
                                value={formData.publishedDate || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Closing Date"
                                value={formData.closingDate || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        {/* Add more Grid items  */}

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Apply As"
                                value={formData.applyAs || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Firm Name"
                                value={formData.firmName || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="First Name"
                                value={formData.firstName || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Last Name"
                                value={formData.lastName || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Closing Date"
                                value={formData.closingDate || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Company Name"
                                value={formData.companyName || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Gender"
                                value={formData.gender || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Mobile Number"
                                value={formData.mobileNumber || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Landline Number"
                                value={formData.landlineNumber || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Residential Address"
                                value={formData.resAddress || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Pin Code"
                                value={formData.pincode || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="State"
                                value={formData.stateAddress || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="District"
                                value={formData.district || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Email"
                                value={formData.email || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Indian Citizen"
                                value={formData.indianCitizen || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Indian IT Rule"
                                value={formData.indianITRule || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="dateOfBirth"
                                value={formData.dateOfBirth || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Physical Disability"
                                value={formData.physicalDisability || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Father / Husband / FirstName"
                                value={formData.FatherOrHusbandFirstName || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Father / Husband / MiddleName"
                                value={formData.FatherOrHusbandMiddleName || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Father / Husband / LastName"
                                value={formData.FatherOrHusbandLastName || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Marital Status"
                                value={formData.maritalStatus || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                    </Grid>


                    {/* Qualification */}
                    <Typography variant="h4" gutterBottom>
                        Applicant Qualification
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Qualification"
                                value={formData.qualification || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Board / University / Institute"
                                value={formData.boardUniversityInstitute || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Degree"
                                value={formData.degree || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth lable="Degree"
                                value={formData.degree || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Group Type"
                                value={formData.groupType || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth label="Land Owner Name"
                                value={formData.landOwnerName || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth label="RelationShip With Applicant"
                                value={formData.relationshipWithApplicant || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField label="Registration Date"
                                value={formData.registrationDate || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField label="Date Of Registration"
                                value={formData.dateOfRegistration || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField label="Khasra / Khatouni / GutNo / Surveyno"
                                value={formData.KhasraKhatouniGutNoSurvey || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField label="Land Location"
                                value={formData.landLocation || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField label="Land Dimention Frontage"
                                value={formData.landDimensionsFrontage || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth label="Land Dimention Depth"
                                value={formData.landDimensionsDepth || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth label="Land Dimention Area"
                                value={formData.landDimensionsArea || ""}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth label="Land Transfer"
                                value={formData.landTransfer || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth label="Rate Term"
                                value={formData.rateTerm || ""}
                                sx={{ mb: 2 }}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth label="Offer Another Plot"
                                value={formData.offerAnotherPlot || ""}
                            />
                        </Grid>
                    </Grid>





                    {/* Document Photos with Two Columns in One Row */}
                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <InputLabel>Applicant photo</InputLabel>
                                <Avatar
                                    src={formData.applicantPhoto}
                                    alt="PAN Card"
                                    variant="rounded"
                                    sx={{
                                        width: 300,
                                        height: 200,
                                        mt: 2,
                                        border: "1px solid #ddd",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleImageClick(formData.applicantPhoto)}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box>
                                <InputLabel>Custom ID Photo</InputLabel>
                                <Avatar
                                    src={formData.idProof}
                                    alt="Custom ID"
                                    variant="rounded"
                                    sx={{
                                        width: 300,
                                        height: 200,
                                        mt: 2,
                                        border: "1px solid #ddd",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleImageClick(formData.idProof)}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box>
                                <InputLabel>Custom ID Photo</InputLabel>
                                <Avatar
                                    src={formData.addressProof}
                                    alt="Custom ID"
                                    variant="rounded"
                                    sx={{
                                        width: 300,
                                        height: 200,
                                        mt: 2,
                                        border: "1px solid #ddd",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleImageClick(formData.addressProof)}
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
