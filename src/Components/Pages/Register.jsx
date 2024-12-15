import { Link } from "react-router-dom"

const Register = () => {
    return (
        <section className="register-section">
            <div>
                <div>
                    <div className="wise">
                        <h3>Applicant Dealership Registration Panel</h3>

                        <form>
                            <div>

                                <div>
                                    <label>
                                        State<span>*</span>
                                    </label>

                                    <select name="state" required>
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
                                    <label>
                                        District<span>*</span>
                                    </label>

                                    <select name="state" required>
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
                                    <label>
                                        Location<span>*</span>
                                    </label>

                                    <select name="state" required>
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
                                    <button type="submit">Submit</button>
                                </div>



                            </div>
                        </form>

                        <div className="sign-in">
                            <p>{"Already have a account?"}</p>
                            <Link to={"/login"}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Register