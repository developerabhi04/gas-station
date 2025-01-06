import { Accessibility, InsertDriveFile, Menu, Person, Photo } from "@mui/icons-material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { State, City } from "country-state-city";
import FormSubmitedSucessfully from "./FormSubmitedSucessfully";
import { server } from "../../main";
import { Helmet } from "react-helmet-async";

const Form = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear(); // Get the current year
    const years = Array.from({ length: 50 }, (_, index) => currentYear - index); // Generate an array of the last 10 years


    const locationData = useLocation();
    const { selectedStateName, selectedStateCode, selectedCity, location } =
        locationData.state || {};

    const [applyAss, setApplyAss] = useState("Individual"); // State to track the selected option
    const [sel, setSelectedStateName] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCites, setSelectedCity] = useState("");

    const [applicantPhoto, setApplicantPhoto] = useState(null);
    const [idProof, setIdProof] = useState(null);
    const [addressProof, setAddressProof] = useState(null);

    // Handle photo upload change
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type.split('/')[1].toLowerCase();
            const fileSize = file.size / 1024; // Size in KB
            if (fileType === "jpeg" || fileType === "jpg") {
                if (fileSize <= 500) {
                    setApplicantPhoto(file);
                } else {
                    alert("File size should not exceed 500KB.");
                }
            } else {
                alert("Only JPG/JPEG images are allowed.");
            }
        }
    };

    const handlePhotoFirstChange = (e) => {
        const files = e.target.files[0];
        if (files) {
            const fileType = files.type.split('/')[1].toLowerCase();
            const fileSize = files.size / 1024; // Size in KB
            if (fileType === "jpeg" || fileType === "jpg") {
                if (fileSize <= 500) {
                    setIdProof(files);
                } else {
                    alert("File size should not exceed 500KB.");
                }
            } else {
                alert("Only JPG/JPEG images are allowed.");
            }
        }
    };


    const handlePhotoSecondChange = (e) => {
        const filess = e.target.files[0];
        if (filess) {
            const fileType = filess.type.split('/')[1].toLowerCase();
            const fileSize = filess.size / 1024; // Size in KB
            if (fileType === "jpeg" || fileType === "jpg") {
                if (fileSize <= 500) {
                    setAddressProof(filess)
                } else {
                    alert("File size should not exceed 500KB.");
                }
            } else {
                alert("Only JPG/JPEG images are allowed.");
            }
        }
    };




    // Handle state change
    const handleStateChange = (e) => {
        const stateCode = e.target.value;
        const selectedStateData = State.getStatesOfCountry("IN").find(
            (state) => state.isoCode === stateCode
        );
        setSelectedState(stateCode); // Save the state code
        setSelectedStateName(selectedStateData.name); // Save the state name
        setSelectedCity(""); // Reset city when the state changes
        setStateAddress(selectedStateData.name); // Save the state name in stateAddress
    };


    // Handle city change
    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        setDistrict(e.target.value)
    };



    // form-data states
    const [title, setTitle] = useState("");
    const [locationDescription, setLocationDescription] = useState("");
    const [typeOfRO, setTypeOfRO] = useState("Regular");
    const [modeOfSelection, setModeOfSelection] = useState("Draw of Lots");
    const [state, setState] = useState("");
    const [publishedDate, setPublishedDate] = useState("27 December 2024");
    const [closingDate, setClosingDate] = useState("30 January 2025");
    const [applyAs, setApplyAs] = useState("Individual");
    const [firmName, setFirmName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [gender, setGender] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [landlineNumber, setLandlineNumber] = useState("");
    const [resAddress, setResAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [stateAddress, setStateAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [email, setEmail] = useState("");
    const [panCard, setPanCard] = useState("");
    const [indianCitizen, setIndianCitizen] = useState("");
    const [indianITRule, setIndianITRule] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [physicalDisability, setPhysicalDisability] = useState("");
    const [FatherOrHusbandFirstName, setFatherOrHusbandFirstName] = useState("");
    const [FatherOrHusbandMiddleName, setFatherOrHusbandMiddleName] = useState("");
    const [FatherOrHusbandLastName, setFatherOrHusbandLastName] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    // 
    const [qualification, setQualification] = useState("");
    const [boardUniversityInstitute, setBoardUniversityInstitute] = useState("");
    const [degree, setDegree] = useState("");
    const [year, setYear] = useState("");
    const [groupType, setGroupType] = useState("");
    const [landOwnerName, setLandOwnerName] = useState("");
    const [relationshipWithApplicant, setRelationshipWithApplicant] = useState("");
    const [registrationDate, setRegistrationDate] = useState("");
    const [dateOfRegistration, setDateOfRegistration] = useState("");
    const [KhasraKhatouniGutNoSurvey, setKhasraKhatouniGutNoSurvey] = useState("");
    const [landLocation, setLandLocation] = useState("");
    const [landDimensionsFrontage, setLandDimensionsFrontage] = useState("");
    const [landDimensionsDepth, setLandDimensionsDepth] = useState("");
    const [landDimensionsArea, setLandDimensionsArea] = useState("");
    const [landTransfer, setLandTransfer] = useState("");
    const [rateTerm, setRateTerm] = useState("");
    const [offerAnotherPlot, setOfferAnotherPlot] = useState("");
    // 
    const [declarationIsAgree, setDeclarationIsAgree] = useState(false);



    const [open, setOpen] = useState(false);

    // Submit form data
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!declarationIsAgree) {
            alert("Please agree to the terms before submitting.");
            return;
        }

        const formData = new FormData();
        formData.append("title", `Advertisement Locations of Petrol Pump - KSK Dealership in ${selectedStateName} - ${selectedStateCode}`);
        formData.append("locationDescription", `${selectedCity}, ${location}`);
        formData.append("typeOfRO", typeOfRO);
        formData.append("modeOfSelection", modeOfSelection);
        formData.append("state", selectedStateName);
        formData.append("publishedDate", publishedDate);
        formData.append("closingDate", closingDate);
        formData.append("applyAs", applyAs);
        formData.append("firmName", firmName);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("companyName", companyName);
        formData.append("gender", gender);
        formData.append("mobileNumber", mobileNumber);
        formData.append("landlineNumber", landlineNumber);
        formData.append("resAddress", resAddress);
        formData.append("pincode", pincode);
        formData.append("stateAddress", stateAddress);
        formData.append("district", district);
        formData.append("email", email);
        formData.append("panCard", panCard);
        formData.append("indianCitizen", indianCitizen);
        formData.append("indianITRule", indianITRule);
        formData.append("dateOfBirth", dateOfBirth);
        formData.append("physicalDisability", physicalDisability);
        formData.append("FatherOrHusbandFirstName", FatherOrHusbandFirstName);
        formData.append("FatherOrHusbandMiddleName", FatherOrHusbandMiddleName);
        formData.append("FatherOrHusbandLastName", FatherOrHusbandLastName);
        formData.append("maritalStatus", maritalStatus);


        // 
        formData.append("qualification", qualification);
        formData.append("boardUniversityInstitute", boardUniversityInstitute);
        formData.append("degree", degree);
        formData.append("groupType", groupType);
        formData.append("landOwnerName", landOwnerName);
        formData.append("relationshipWithApplicant", relationshipWithApplicant);
        formData.append("registrationDate", registrationDate);
        formData.append("dateOfRegistration", dateOfRegistration);
        formData.append("KhasraKhatouniGutNoSurvey", KhasraKhatouniGutNoSurvey);
        formData.append("landLocation", landLocation);
        formData.append("landDimensionsFrontage", landDimensionsFrontage);
        formData.append("landDimensionsDepth", landDimensionsDepth);
        formData.append("landDimensionsArea", landDimensionsArea);
        formData.append("landTransfer", landTransfer);
        formData.append("rateTerm", rateTerm);
        formData.append("offerAnotherPlot", offerAnotherPlot);

        // Add files to the form data
        formData.append("applicantPhoto", applicantPhoto);
        formData.append("idProof", idProof);
        formData.append("addressProof", addressProof);

        formData.append("declarationIsAgree", declarationIsAgree);

        try {
            const response = await fetch(`${server}/apply/submit`, {
                method: "POST",
                // headers: {
                //     "Content-Type": "application/json",
                // },
                // body: JSON.stringify(formData),
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                // Reset form data
                setTitle("");
                setLocationDescription("");
                setTypeOfRO("Regular");
                setModeOfSelection("Draw of Lots");
                setState("");
                setPublishedDate("27 December 2024");
                setClosingDate("30 January 2025");
                setApplyAs("Individual");
                setFirmName("");
                setFirstName("");
                setLastName("");
                setCompanyName("");
                setGender("");
                setMobileNumber("");
                setLandlineNumber("");
                setResAddress('');
                setPincode('');
                setStateAddress('');
                setDistrict('');
                setEmail('');
                setPanCard('');
                setIndianCitizen('');
                setDateOfBirth('');
                setPhysicalDisability('');
                setMaritalStatus('');
                // 
                setQualification('');
                setBoardUniversityInstitute('');
                setDegree('');
                setGroupType('');
                setLandOwnerName('');
                setRelationshipWithApplicant('');
                setRegistrationDate('');
                setDateOfRegistration('');
                setKhasraKhatouniGutNoSurvey('');
                setLandLocation('');
                setLandDimensionsFrontage('');
                setLandDimensionsDepth('');
                setLandDimensionsArea('');
                setLandTransfer('');
                setRateTerm('')
                setOfferAnotherPlot('');
                setDeclarationIsAgree('false');


                navigate("/form-Submited-Sucessfully", { state: { from: 'withinApp' }, replace: true });
            }
        } catch (error) {
            console.error("Error: ", error);
        }
        console.log("FormData to submit:", formData);
    };

    const handleApplyAsChange = (event) => {
        setApplyAss(event.target.value);
        setApplyAs(event.target.value);
    };


    return (
        <>
            <Helmet>
                <title>Prime Petrol Distributors - Submit Form for Petrol Pump Dealership</title>
                <meta name="description" content="Submit Form for a petrol pump dealership with Prime Petrol Distributors. View the latest updates and learn more about our services." />
                <meta name="keywords" content="petrol pump dealership, fuel station, fuel distributors, Prime Petrol, dealership application" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://gas-station-front.vercel.app" />

                {/* Open Graph Metadata for Social Sharing */}
                <meta property="og:title" content="Prime Petrol Distributors - Submit Form for Petrol Pump Dealership" />
                <meta property="og:description" content="Submit Form for a petrol pump dealership with Prime Petrol Distributors. Learn more about our services and the latest updates." />
                <meta property="og:image" content="https://gas-station-front.vercel.app/images/pump1.jpg" />
                <meta property="og:image:alt" content="Prime Petrol pump station dealership application" />
                <meta property="og:url" content="https://gas-station-front.vercel.app/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Metadata */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Prime Petrol Distributors - Submit Form for Petrol Pump Dealership" />
                <meta name="twitter:description" content="Submit Form for a petrol pump dealership with Prime Petrol Distributors." />
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
                        "description": "Submit Form for a petrol pump dealership with Prime Petrol Distributors.",
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


            <section className="form-fill">
                <div>
                    <div>
                        <h3>Apply For Dealership</h3>

                        <form onSubmit={handleSubmit}>
                            {/* Application Section */}
                            <div>
                                <div className="heading">
                                    <Menu />
                                    Application Form
                                </div>

                                <div className="box">
                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>Title</b>
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                Advertisement Locations of Petrol Pump - Prime Petrol
                                                Distributors in {selectedStateName} - {selectedStateCode}
                                            </p>
                                            <input
                                                type="hidden"
                                                name="title"
                                                value={`Advertisement Locations of Petrol Pump - KSK Dealership in ${selectedStateName} - ${selectedStateCode}`}
                                            />
                                        </div>

                                        <div>
                                            <p>
                                                <b>Location Description</b>
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                {selectedCity}, {location}
                                            </p>
                                            <input type="hidden" name="aState" value={selectedCity} />
                                            <input type="hidden" name="nameofLocation" value={location} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>Type of RO</b>
                                            </p>
                                        </div>
                                        <div>
                                            <p>Regular</p>
                                        </div>

                                        <div>
                                            <p>
                                                <b>Mode of Selection</b>
                                            </p>
                                        </div>
                                        <div>
                                            <p>Draw of Lots</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>Category</b>
                                            </p>
                                        </div>
                                        <div>
                                            <p>Open</p>
                                        </div>

                                        <div>
                                            <p>
                                                <b>State</b>
                                            </p>
                                        </div>
                                        <div>
                                            <p>{selectedStateName}</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>Published Date</b>
                                            </p>
                                        </div>
                                        <div>
                                            <p>27 December 2024</p>
                                        </div>

                                        <div>
                                            <p>
                                                <b>Closing Date</b>
                                            </p>
                                        </div>
                                        <div>
                                            <p>30 January 2025</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>Apply As</b>
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                name="applyAs"
                                                value="Individual"
                                                checked={applyAss === "Individual"}
                                                onChange={handleApplyAsChange}
                                            />{" "}
                                            Individual
                                            <input
                                                type="radio"
                                                name="applyAs"
                                                value="Partnership"
                                                checked={applyAss === "Partnership"}
                                                onChange={handleApplyAsChange}
                                            />{" "}
                                            Partnership
                                        </div>

                                        <div>
                                            <p>
                                                <b>Retail Outlet Eligibility Criteria for Land</b>
                                            </p>
                                        </div>
                                        <div>
                                            <p>15 X 15 Sq.M. (Minimum Size)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Personal Information Section */}
                            <div>
                                <div className="heading">
                                    <Person />
                                    Personal Information
                                </div>

                                <div className="box">
                                    {applyAss === "Partnership" && (
                                        <div className="row" style={{ width: "100%" }}>
                                            <div>
                                                <p>
                                                    <b>
                                                        Firm name <span>*</span>
                                                    </b>
                                                </p>
                                            </div>
                                            <div style={{ width: "75%" }}>
                                                <input
                                                    type="text"
                                                    className="input-text"
                                                    name="firmname"
                                                    placeholder="Firm Name"
                                                    style={{ width: "100%" }}
                                                    value={firmName}
                                                    onChange={(e) => setFirmName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>
                                                    Type of RO <span>*</span>
                                                </b>
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="firstName"
                                                placeholder="First Name"
                                                value={typeOfRO}
                                                disabled
                                            />
                                        </div>

                                        <div>
                                            <p>
                                                <b>
                                                    Name of Company <span>*</span>
                                                </b>
                                            </p>
                                        </div>
                                        <div>
                                            <select
                                                name="nameofCompany"
                                                className="input-text"
                                                value={companyName}
                                                onChange={(e) => setCompanyName(e.target.value)}
                                            >
                                                <option value="">Select Company</option>
                                                <option value="Any of above">Any of above</option>
                                                <option value="Bharat Petroleum (BPCL)">
                                                    Bharat Petroleum (BPCL)
                                                </option>
                                                <option value="Hindustan Petroleum (HPCL)">
                                                    Hindustan Petroleum (HPCL)
                                                </option>
                                                <option value="Indian Oil (IOCL)">
                                                    Indian Oil (IOCL)
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>
                                                    First Name <span>*</span>
                                                </b>
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="firstName"
                                                placeholder="First Name"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <p>
                                                <b>
                                                    Last Name <span>*</span>
                                                </b>
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>
                                                    Category Name <span>*</span>
                                                </b>
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                className="input-text"
                                                type="text"
                                                name="category"
                                                value={`Open`}
                                            />
                                        </div>

                                        <div>
                                            <p>
                                                <b>
                                                    Gender <span>*</span>
                                                </b>
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Male"
                                                onChange={(e) => setGender(e.target.value)}
                                            />{" "}
                                            Male
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Female"
                                                onChange={(e) => setGender(e.target.value)}
                                            />{" "}
                                            Female
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>
                                                    Mobile Number <span>*</span>
                                                </b>
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="mobileNumber"
                                                placeholder="Mobile Number"
                                                value={mobileNumber}
                                                onChange={(e) => setMobileNumber(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <p>
                                                <b>Landline Number</b>
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="landlineNumber"
                                                placeholder="Landline Number"
                                                value={landlineNumber}
                                                onChange={(e) => setLandlineNumber(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>Res. Address <span>*</span></b>
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="resAddress"
                                                placeholder="Address"
                                                value={resAddress}
                                                onChange={(e) => setResAddress(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <p>
                                                <b>Pincode <span>*</span></b>
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                type="number"
                                                className="input-text"
                                                name="pincode"
                                                placeholder="123456"
                                                value={pincode}
                                                onChange={(e) => setPincode(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>State <span>*</span></b>
                                            </p>
                                        </div>
                                        <div>
                                            <select name="state" className="input-text" value={selectedState} onChange={handleStateChange} >
                                                <option value="">Select</option>
                                                {State.getStatesOfCountry("IN").map((state) => (
                                                    <option key={state.isoCode} value={state.isoCode}>
                                                        {state.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* City Selection */}

                                        <div>
                                            <p>
                                                <b>City <span>*</span></b>
                                            </p>
                                        </div>

                                        <div>
                                            <select name="city" className="input-text" value={selectedCites} onChange={handleCityChange} disabled={!selectedState}>
                                                <option value="">Select</option>
                                                {selectedState &&
                                                    City.getCitiesOfState("IN", selectedState).map((city) => (
                                                        <option key={city.name} value={city.name}>
                                                            {city.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>Email <span>*</span></b>
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                className="input-text"
                                                name="email"
                                                placeholder="abc@gmail.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <p>
                                                <b>PAN Number <span>*</span></b>
                                            </p>
                                        </div>
                                        <div>
                                            <input type="text" className="input-text" value={panCard} placeholder="BPYPXXXXX" onChange={(e) => setPanCard(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>Whether Applicant is Indian Citizen<span>*</span></b>
                                            </p>
                                        </div>

                                        <div>
                                            <input
                                                type="radio"
                                                name="indianCitizen"
                                                value="Yes"
                                                onChange={(e) => setIndianCitizen(e.target.value)}
                                            />{" "}
                                            Yes
                                            <input
                                                type="radio"
                                                name="indianCitizen"
                                                value="No"
                                                onChange={(e) => setIndianCitizen(e.target.value)}
                                            />{" "}
                                            No

                                        </div>

                                        <div>
                                            <p>
                                                <b>Residential of Indian as IT Rule<span>*</span></b>
                                            </p>
                                        </div>

                                        <div>
                                            <input
                                                type="radio"
                                                name="IndianITRule"
                                                value="Yes"
                                                onChange={(e) => setIndianITRule(e.target.value)}
                                            />{" "}
                                            Yes
                                            <input
                                                type="radio"
                                                name="IndianITRule"
                                                value="No"
                                                onChange={(e) => setIndianITRule(e.target.value)}
                                            />{" "}
                                            No

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>Date of Birth<span>*</span></b>
                                            </p>
                                        </div>

                                        <div>
                                            <input
                                                type="Date"
                                                className="input-text"
                                                name="dateOfBirth"
                                                value={dateOfBirth}
                                                onChange={(e) => setDateOfBirth(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <p>
                                                <b>Physical Disability<span>*</span></b>
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                name="physicalDisability"
                                                value="Yes"
                                                onChange={(e) => setPhysicalDisability(e.target.value)}
                                            />{" "}
                                            Yes
                                            <input
                                                type="radio"
                                                name="physicalDisability"
                                                value="No"
                                                onChange={(e) => setPhysicalDisability(e.target.value)}
                                            />{" "}
                                            No

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>Father/Husband Name<span>*</span></b>
                                            </p>
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="FatherOrHusbandFirstName"
                                                placeholder="First Name"
                                                value={FatherOrHusbandFirstName}
                                                onChange={(e) => setFatherOrHusbandFirstName(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="FatherOrHusbandMiddleName"
                                                placeholder="Middle Name"
                                                value={FatherOrHusbandMiddleName}
                                                onChange={(e) => setFatherOrHusbandMiddleName(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="FatherOrHusbandLastName"
                                                placeholder="Last Name"
                                                value={FatherOrHusbandLastName}
                                                onChange={(e) => setFatherOrHusbandLastName(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <p>
                                                <b>Marital Status <span>*</span></b>
                                            </p>
                                        </div>

                                        <div style={{ width: "50%", gap: "1rem" }}>
                                            <input
                                                type="radio"
                                                name="materialStatus"
                                                value="Single"
                                                onChange={(e) => setMaritalStatus(e.target.value)}
                                            />{" "}
                                            Single
                                            <input
                                                type="radio"
                                                name="materialStatus"
                                                value="Married"
                                                onChange={(e) => setMaritalStatus(e.target.value)}
                                            />{" "}
                                            Married
                                            <input
                                                type="radio"
                                                name="materialStatus"
                                                value="Widow"
                                                onChange={(e) => setMaritalStatus(e.target.value)}
                                            />{" "}
                                            Widow
                                            <input
                                                type="radio"
                                                name="materialStatus"
                                                value="Divorce"
                                                onChange={(e) => setMaritalStatus(e.target.value)}
                                            />{" "}
                                            Divorce
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Applicant's Education Qualification (Minimum 10th pass or Equivalent) */}
                            <div>
                                <div className="heading">
                                    <Person />
                                    {"Applicant's"} Education Qualification (Minimum 10th pass or Equivalent)
                                </div>

                                <div className="box">
                                    <div className="row" style={{ width: "100%" }}>

                                        <div style={{ width: "35%" }}>
                                            <p>
                                                <b>Qualification <span>*</span></b>
                                            </p>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="qualification"
                                                placeholder="Qualification"
                                                style={{ width: "100%" }}
                                                value={qualification}
                                                onChange={(e) => setQualification(e.target.value)}
                                            />
                                        </div>

                                        <div style={{ width: "35%" }}>
                                            <p>
                                                <b>Board/University/Institute <span>*</span></b>
                                            </p>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="boardUniversityInstitute"
                                                placeholder="XYZ University"
                                                style={{ width: "100%" }}
                                                value={boardUniversityInstitute}
                                                onChange={(e) => setBoardUniversityInstitute(e.target.value)}
                                            />
                                        </div>

                                        <div style={{ width: "30%" }}>
                                            <p>
                                                <b>Degree <span>*</span></b>
                                            </p>
                                            <input
                                                type="text"
                                                className="input-text"
                                                name="degree"
                                                placeholder="Degree"
                                                style={{ width: "100%" }}
                                                value={degree}
                                                onChange={(e) => setDegree(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row" style={{ width: "100%" }}>
                                        <div style={{ width: "30%" }}>
                                            <p>
                                                <b>year <span>*</span></b>
                                            </p>
                                            <select name="year" className="input-text" value={year} onChange={(e) => setYear(e.target.value)}>
                                                <option value="">Select Year</option>
                                                {years.map((year) => (
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div style={{ width: "30%" }}>
                                            <p>
                                                <b>Group Type <span>*</span></b>
                                            </p>
                                            <select name="groupType" className="input-text" value={groupType} onChange={(e) => setGroupType(e.target.value)}>
                                                <option value="">Select Year</option>
                                                <option value="Group1">Group 1</option>
                                                <option value="Group2">Group 2</option>
                                                <option value="Group3">Group 3</option>
                                            </select>
                                        </div>


                                    </div>

                                    <div className="row" style={{ width: "100%" }}>

                                        <div style={{ width: "50%" }}>
                                            <p>
                                                <b>Name(s) of the owner of Land/Leaseholder<span>*</span></b>
                                            </p>
                                            <input
                                                type="text"
                                                className="input-text"
                                                style={{ width: "100%" }}
                                                value={landOwnerName}
                                                onChange={(e) => setLandOwnerName(e.target.value)}
                                            />
                                        </div>

                                        <div style={{ width: "50%" }}>
                                            <p>
                                                <b>Relationship with Application <span>*</span></b>
                                            </p>
                                            <select name="relationshipwithapplication" className="input-text" value={relationshipWithApplicant} onChange={(e) => setRelationshipWithApplicant(e.target.value)}>
                                                <option value="">Relationship with Application</option>
                                                <option value="Self">Self</option>
                                                <option value="Spouse">Spouse</option>
                                                <option value="Father">Father</option>
                                                <option value="Mother">Mother</option>
                                                <option value="Step Father">Step Father</option>
                                                <option value="Step Mother">Step Mother</option>
                                                <option value="Brother/Sister">Brother/Sister</option>
                                                <option value="Step Brother/Sister">Step Brother/Sister</option>
                                                <option value="Son/Daughter/Step, Son/Step Daughter">Son/Daughter/Step, Son/Step Daughter</option>
                                                <option value="Son-in-law / Daughter-in-law">Son-in-law / Daughter-in-law</option>
                                                <option value="Parents-in-law">Parents-in-law</option>
                                                <option value="Grand Parents (Both Maternal &amp; Paternal)">Grand Parents (Both Maternal &amp; Paternal)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row" style={{ width: "100%" }}>
                                        <div style={{ width: "40%" }}>
                                            <p>
                                                <b>Date of registration sale deed / Gift deed / lease deed / date of mutation <span>*</span></b>
                                            </p>
                                            <input type="date" name="dateOfRegistration" className="input-text" value={dateOfRegistration} onChange={(e) => setDateOfRegistration(e.target.value)} />
                                        </div>


                                        <div style={{ width: "45%" }}>
                                            <p>
                                                <b>Khasra No / Khatouni / Gut No / Survey No. <span>*</span></b>
                                            </p>
                                            <input type="text" name="khatouni" value={KhasraKhatouniGutNoSurvey} className="input-text" style={{ width: "100%" }} onChange={(e) => setKhasraKhatouniGutNoSurvey(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="row" style={{ width: "100%" }}>
                                        <div style={{ width: "100%" }}>
                                            <p>
                                                <b>Location of the Land <span>*</span></b>
                                            </p>
                                            <input type="text" className="input-text" name="land" value={landLocation} onChange={(e) => setLandLocation(e.target.value)} placeholder="Fill the complete address of the land" style={{ width: "100%" }} />
                                        </div>
                                    </div>

                                    <div className="row" style={{ width: "100%" }}>

                                        <div style={{ width: "100%" }}>
                                            <p><b>Dimensionof Land <span>*</span></b></p>
                                        </div>

                                        <div style={{ width: "28%" }}>
                                            <p>
                                                <b>Frontage in Meter <span>*</span></b>
                                            </p>
                                            <input
                                                type="number"
                                                className="input-text"
                                                style={{ width: "100%" }}
                                                name="landDimensionsFrontage"
                                                value={landDimensionsFrontage}
                                                onChange={(e) => setLandDimensionsFrontage(e.target.value)}
                                                placeholder="Enter frontage"
                                            />
                                        </div>

                                        <div style={{ width: "28%" }}>
                                            <p>
                                                <b>Depth in Meter <span>*</span></b>
                                            </p>
                                            <input
                                                type="number"
                                                className="input-text"
                                                placeholder="Enter Depth"
                                                name="landDimensionsDepth"
                                                style={{ width: "100%" }}
                                                value={landDimensionsDepth}
                                                onChange={(e) => setLandDimensionsDepth(e.target.value)}
                                            />
                                        </div>


                                        <div style={{ width: "28%" }}>
                                            <p>
                                                <b>Area (Sq.M) <span>*</span></b>
                                            </p>
                                            <input
                                                type="number"
                                                className="input-text"
                                                name="landDimensionsArea"
                                                placeholder="Enter Area"
                                                style={{ width: "100%" }}
                                                value={landDimensionsArea}
                                                onChange={(e) => setLandDimensionsArea(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row" style={{ width: "100%" }}>
                                        <div style={{ width: "75%" }}>
                                            <p>
                                                <b>are you efilling to transfer the land on sale / long lease of the Petrol Pump<span>*</span></b>
                                            </p>
                                        </div>
                                        <div>
                                            <select name="year" className="input-text" value={landTransfer} onChange={(e) => setLandTransfer(e.target.value)}>
                                                <option value="">Select</option>
                                                <option value="yes">yes</option>
                                                <option value="no">no</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row" style={{ width: "100%" }}>
                                        <div style={{ width: "35%" }}>
                                            <p>
                                                <b>Please specify rate(RS) term <span>*</span></b>
                                            </p>
                                        </div>
                                        <div style={{ width: "55%" }}>
                                            <textarea type="text" className="input-text" name="rateTerm" value={rateTerm} onChange={(e) => setRateTerm(e.target.value)} style={{ maxWidth: "430px", height: "17vh" }} placeholder="If you want to give the petrol pump to company to operate it, write rate terms on annual basis, if not, write “No”" />
                                        </div>
                                    </div>

                                    <div className="row" style={{ width: "100%" }}>
                                        <div style={{ width: "45%" }}>
                                            <p>
                                                <b>Do you want to offer another plot of land under? <span>*</span></b>
                                            </p>
                                        </div>
                                        <div style={{ width: "14%" }}>
                                            <input type="radio" name="offerAnotherPlot" value="Yes" onChange={(e) => setOfferAnotherPlot(e.target.value)} />{"yes"}
                                            <input type="radio" name="offerAnotherPlot" value="No" onChange={(e) => setOfferAnotherPlot(e.target.value)} />{"no"}
                                        </div>
                                    </div>

                                </div>
                            </div>


                            {/* Declaration */}
                            <div>
                                <div className="heading">
                                    <Accessibility />
                                    Declaration
                                </div>

                                <div className="box">
                                    <div className="row" style={{ width: "100%" }}>

                                        <div style={{ width: "100%" }}>
                                            <p style={{ textAlign: "justify" }}>
                                                I, <span>........... .........</span>  of/son of/wife of Shri <span>........... ......... .......... hereby confirm that I have been authorized to submit this application on behalf of M/s .................... and the information given above is true and correct. Any wrong information/misrepresentation/suppression of facts will make us ineligible for this Dealership. That if any information/declaration given by us in application or in any document submitted by us in support of application for award of the dealership shall be found to be untrue or incorrect or false, the Company would be within its rights to withdraw/terminate
                                                    letter of intent of the dealership (if already appointed) and that we would have no claim, whatsoever, against the Corporation for such withdrawal/termination.</span>
                                            </p>
                                            <center>
                                                <input
                                                    type="checkbox"
                                                    checked={declarationIsAgree}
                                                    onChange={() => setDeclarationIsAgree(!declarationIsAgree)}
                                                />
                                                {/* declarationIsAgree */}
                                                checkbox
                                            </center>
                                        </div>
                                    </div>
                                </div>

                            </div>



                            {/* Applicant photo */}
                            <div>
                                <div className="heading">
                                    <Photo />
                                    Applicant Photo
                                </div>

                                <div className="box">
                                    <div className="row" style={{ border: "none" }} >
                                        <div style={{ width: "100%" }}>
                                            <p>
                                                <b>Applicant Photo <span>*</span></b>
                                            </p>
                                            <input
                                                className="input-text"
                                                type="file"
                                                style={{ height: "auto" }}
                                                name="applicantphoto"
                                                onChange={handlePhotoChange}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: "11px", paddingLeft: "1rem" }}>Formate jpg only, Max Size 100kb, Dimension 5.5cm X 5.5cm</span>
                                    </div>
                                </div>

                            </div>


                            {/* Applicant ID and Address Proof */}
                            <div>
                                <div className="heading">
                                    <InsertDriveFile />
                                    Applicant ID and Address Proof
                                </div>

                                <div className="box">
                                    <div className="row" style={{ width: "100%", border: "none" }}>

                                        <div style={{ width: "50%" }}>
                                            <p>
                                                <b>Applicant Photo <span>*</span></b>
                                            </p>

                                            <input
                                                type="file"
                                                className="input-text"
                                                style={{ height: "auto" }}
                                                name="idProof"
                                                onChange={handlePhotoFirstChange}
                                            />
                                            <span style={{ fontSize: "11px", paddingTop: "0.5rem" }}>Formate jpg only, Max Size 500kb, Dimension 5.5cm X 5.5cm</span>
                                        </div>


                                        <div style={{ width: "50%" }}>
                                            <p>
                                                <b>Applicant Photo <span>*</span></b>
                                            </p>
                                            <input
                                                type="file"
                                                className="input-text"
                                                style={{ height: "auto" }}
                                                name="addressProof"
                                                onChange={handlePhotoSecondChange}
                                            />
                                            <span style={{ fontSize: "11px", paddingTop: "0.5rem" }}>Formate jpg only, Max Size 500kb, Dimension 5.5cm X 5.5cm</span>
                                        </div>
                                    </div>
                                    <div style={{ width: "100%" }}>
                                        <button type="submit">Submit</button>
                                    </div>

                                </div>


                            </div>




                        </form>
                        {open && <FormSubmitedSucessfully setOpen={setOpen} />}
                    </div>
                </div>


            </section>
        </>
    );
};

export default Form;
