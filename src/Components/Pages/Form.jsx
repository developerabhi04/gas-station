import { Accessibility, InsertDriveFile, Menu, Person, Photo } from "@mui/icons-material";



const Form = () => {
    return (
        <section className="form-fill">
            <div>
                <div>
                    <h3>Apply For Dealership</h3>

                    <form>

                        {/* Application Form */}
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
                                            Advertisement Locations of Petrol Pump - KSK Dealership in Delhi - (DL)
                                        </p>
                                        <input type="hidden" name="title" value="Advertisement Locations of Petrol Pump - KSK Dealership in Delhi" />
                                    </div>

                                    <div>
                                        <p>
                                            <b>Location Description</b>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            On Khajuri Chowk to Loni Road Via Karawal Nagar
                                        </p>
                                        <input type="hidden" name="aState" value="Delhi" />
                                        <input type="hidden" name="nameofLocation" value="On Khajuri Chowk to Loni Road ViaKarawal Nagar" />
                                    </div>

                                </div>
                                <div className="row">
                                    <div>
                                        <p>
                                            <b>Type of RO</b>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            Regular
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <b>Mode of Selection</b>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            Draw of Lots
                                        </p>
                                    </div>

                                </div>
                                <div className="row">
                                    <div>
                                        <p>
                                            <b>Category</b>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            open
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <b>State</b>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            Assam
                                        </p>
                                    </div>

                                </div>
                                <div className="row">
                                    <div>
                                        <p>
                                            <b>Published Date</b>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            10 December 2024
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <b>Closing Date</b>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            23 December 2024
                                        </p>
                                    </div>

                                </div>
                                <div className="row">
                                    <div>
                                        <p>
                                            <b>Apply As</b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="radio" name="title" value="Individual" checked />{"Individual"}
                                        <input type="radio" name="title" value="Partnership" />{"Partnership"}
                                    </div>

                                    <div>
                                        <p>
                                            <b>Retail Outlet Eligibility Criteria for Land</b>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            15 X 15 Sq.M. (Mininum Size)
                                        </p>
                                    </div>

                                </div>



                            </div>
                        </div>

                        {/* personal information */}
                        <div>
                            <div className="heading">
                                <Person />
                                Personal Information
                            </div>

                            <div className="box">
                                <div className="row" style={{ width: "100%" }}>
                                    <div>
                                        <p>
                                            <b>Firm name <span>*</span></b>
                                        </p>
                                    </div>
                                    <div style={{ width: "75%" }}>
                                        <input type="text" className="input-text" name="firmname" placeholder="Firm Name" style={{ width: "100%" }} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div>
                                        <p>
                                            <b>Type of RO <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="text" className="input-text" name="typeofro" value="Regular" />
                                    </div>

                                    <div>
                                        <p>
                                            <b>Name of Company <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <select name="nameofCompany" className="input-text" required="">
                                            <option value="">Select Company</option>
                                            <option value="Any of above">Any of above</option>
                                            <option value="Bharat Petroleum (BPCL)">Bharat Petroleum (BPCL)</option>
                                            <option value="Hindustan Petroleum (HPCL)">Hindustan Petroleum (HPCL)</option>
                                            <option value="Indian Oil (IOCL)">Indian Oil (IOCL)</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="row">
                                    <div>
                                        <p>
                                            <b>First Name <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="text" className="input-text" name="First Name" placeholder="First Name" />
                                    </div>

                                    <div>
                                        <p>
                                            <b>Last Name <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="text" className="input-text" name="last-name" placeholder="Last Name" />
                                    </div>

                                </div>

                                <div className="row">
                                    <div>
                                        <p>
                                            <b>Category Name <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="text" name="Open" className="input-text" value="Open" style={{ outline: "none" }} />
                                        {/* <p>
                                            open
                                        </p> */}
                                    </div>

                                    <div>
                                        <p>
                                            <b>Gender <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <select name="gender" className="input-text" required="">
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="row">
                                    <div>
                                        <p>
                                            <b>Mobile Number <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="number" className="input-text" name="mobileNumber" placeholder="91234*****" />
                                    </div>

                                    <div>
                                        <p>
                                            <b>Landline Number<span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="number" className="input-text" name="landlineNumber" />
                                    </div>

                                </div>

                                <div className="row">
                                    <div>
                                        <p>
                                            <b>Res. Address <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="text" className="input-text" name="resAddress" placeholder="Address" />
                                    </div>

                                    <div>
                                        <p>
                                            <b>Pincode <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="number" className="input-text" name="pincode" placeholder="123456" />
                                    </div>

                                </div>

                                <div className="row">
                                    <div>
                                        <p>
                                            <b>State <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <select name="state" className="input-text">
                                            <option value>Select</option>
                                            <option value={"1"}>New Delhi</option>
                                            <option value={"2"}>West Bengal</option>
                                            <option value={"3"}>Assam</option>
                                            <option value={"4"}>Chandigarh</option>
                                            <option value={"5"}>Haryana</option>
                                            <option value={"6"}>Goa</option>
                                            <option value={"7"}>Jharkhand</option>
                                            <option value={"8"}>Jammu & Kasmir</option>
                                            <option value={"9"}>Ladakh</option>
                                            <option value={"10"}>Punjab</option>
                                        </select>
                                    </div>

                                    <div>
                                        <p>
                                            <b>District <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="text" className="input-text" name="district" placeholder="District" />
                                    </div>

                                </div>



                                <div className="row">
                                    <div>
                                        <p>
                                            <b>Email <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="email" className="input-text" name="email" placeholder="abc@gmail.com" />
                                    </div>

                                    <div>
                                        <p>
                                            <b>PAN Number <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="text" className="input-text" name="pancard" placeholder="ABCDE1234J" />
                                    </div>

                                </div>

                                <div className="row">
                                    <div>
                                        <p>
                                            <b>Date of Birth <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="date" className="input-text" name="title" checked />
                                    </div>

                                    <div>
                                        <p>
                                            <b>Physical Disability <span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <input type="radio" name="PhysicalDisability" value="PhysicalDisability-yes" checked />{"Yes"}
                                        <input type="radio" name="PhysicalDisability" value="PhysicalDisabilityno" />{"No"}
                                    </div>
                                </div>


                                <div className="row" style={{ width: "100%" }}>
                                    <div style={{ width: "40%" }}>
                                        <p>
                                            <b>Marital Status <span>*</span>(In case of married women {"Husband's"} Name)</b>
                                        </p>
                                    </div>
                                    <div style={{ width: "60%" }}>
                                        <input type="radio" name="status" value="Singlee" checked />{"Single"}
                                        <input type="radio" name="status" value="Marriede" />{"Married"}
                                        <input type="radio" name="status" value="widowe" />{"Widow (er)"}
                                        <input type="radio" name="status" value="divorcee" />{"Divorce"}
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
                                        <input type="text" className="input-text" name="firmname" placeholder="Degree / Btech, B.Com" style={{ width: "100%" }} />
                                    </div>

                                    <div style={{ width: "35%" }}>
                                        <p>
                                            <b>Board/University/Institute <span>*</span></b>
                                        </p>
                                        <input type="text" className="input-text" name="firmname" placeholder="CBSE/XYZ University" style={{ width: "100%" }} />
                                    </div>



                                    <div style={{ width: "30%" }}>
                                        <p>
                                            <b>Degree <span>*</span></b>
                                        </p>
                                        <input type="text" className="input-text" name="firmname" placeholder="Degree" style={{ width: "100%" }} />
                                    </div>
                                </div>


                                <div className="row" style={{ width: "100%" }}>
                                    <div style={{ width: "30%" }}>
                                        <p>
                                            <b>year <span>*</span></b>
                                        </p>
                                        <select name="year" className="input-text">
                                            <option value="">Select Year</option>
                                            <option value="2024">2024</option>
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                        </select>
                                    </div>

                                    <div style={{ width: "30%" }}>
                                        <p>
                                            <b>Group Type <span>*</span></b>
                                        </p>
                                        <select name="group-type" className="input-text">
                                            <option value="">Select Year</option>
                                            <option value="2024">2024</option>
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                        </select>
                                    </div>


                                </div>


                                <div className="row" style={{ width: "100%" }}>

                                    <div style={{ width: "50%" }}>
                                        <p>
                                            <b>Name(s) of the owner of Land/Leaseholder <span>*</span></b>
                                        </p>
                                        <input type="text" className="input-text" style={{ width: "100%" }} />
                                    </div>

                                    <div style={{ width: "50%" }}>
                                        <p>
                                            <b>Relationship with Application <span>*</span></b>
                                        </p>
                                        <select name="relationshipwithapplication" className="input-text" required="">
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
                                        <input type="date" className="input-text"/>

                                    </div>


                                    <div style={{ width: "45%" }}>
                                        <p>
                                            <b>Khasra No / Khatouni / Gut No / Survey No. <span>*</span></b>
                                        </p>
                                        <input type="text" className="input-text"  style={{ width: "100%" }} />
                                    </div>
                                </div>



                                <div className="row" style={{ width: "100%" }}>
                                    <div style={{ width: "100%" }}>
                                        <p>
                                            <b>Location of the Land <span>*</span></b>
                                        </p>
                                        <input type="text" className="input-text" name="firmname" placeholder="Fill the complete address of the land" style={{ width: "100%" }} />
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
                                        <input type="text" className="input-text"  placeholder="20" style={{ width: "100%" }} />
                                    </div>

                                    <div style={{ width: "28%" }}>
                                        <p>
                                            <b>Depth in Meter <span>*</span></b>
                                        </p>
                                        <input type="text" className="input-text"  placeholder="20" style={{ width: "100%" }} />
                                    </div>


                                    <div style={{ width: "28%" }}>
                                        <p>
                                            <b>Area (Sq.M) <span>*</span></b>
                                        </p>
                                        <input type="text" className="input-text" placeholder="400" style={{ width: "100%" }} />
                                    </div>
                                </div>


                                <div className="row" style={{ width: "100%" }}>
                                    <div style={{ width: "75%" }}>
                                        <p>
                                            <b>are you efilling to transfer the land on sale / long lease of the Petrol Pump<span>*</span></b>
                                        </p>
                                    </div>
                                    <div>
                                        <select name="year" className="input-text">
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
                                        <textarea className="input-text" style={{ maxWidth: "430px" }} placeholder="If you want to give the petrol pump to company to operate it, write rate terms on annual basis, if not, write “No”"/>
                                    </div>
                                </div>

                                <div className="row" style={{ width: "100%" }}>
                                    <div style={{ width: "45%" }}>
                                        <p>
                                            <b>Do you want to offer another plot of land under? <span>*</span></b>
                                        </p>
                                    </div>
                                    <div style={{ width: "14%" }}>
                                        <input type="radio" name="plot" checked />{"yes"}
                                        <input type="radio" name="plot"/>{"no"}
                                    </div>

                                    {/* <div style={{ width: "16%" }}>
                                        <p>
                                            <b>Create Password <span>*</span></b>
                                        </p>
                                    </div>
                                    <div style={{ width: "25%" }}>
                                        <input type="input" className="input-text" placeholder=""/>
                                    </div> */}
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
                                            <input type="checkbox" />
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
                                        <input className="input-text" type="file" style={{ height: "auto" }} name="applicantphoto" required="" />
                                    </div>
                                </div>
                                <div>
                                    <span style={{ fontSize: "11px", paddingLeft: "1rem" }}>Formate jpg only, Max Size 50kb, Dimension 5.5cm X 5.5cm</span>
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

                                        <input type="file" className="input-text" style={{ height: "auto" }} name="applicantphoto" required="" />
                                        <span style={{ fontSize: "11px", paddingTop: "0.5rem" }}>Formate jpg only, Max Size 100kb, Dimension 5.5cm X 5.5cm</span>
                                    </div>


                                    <div style={{ width: "50%" }}>
                                        <p>
                                            <b>Applicant Photo <span>*</span></b>
                                        </p>
                                        <input type="file" className="input-text" style={{ height: "auto" }} name="applicantphoto" required="" />
                                        <span style={{ fontSize: "11px", paddingTop: "0.5rem" }}>Formate jpg only, Max Size 100kb, Dimension 5.5cm X 5.5cm</span>
                                    </div>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <button type="submit">Submit</button>
                                </div>
                            </div>


                        </div>


                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form