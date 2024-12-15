import { Link } from "react-router-dom";
import logo from "../assets/logoo.png";
import { Person, Settings } from "@mui/icons-material";

const Header = () => {
    return (
        <>
            <div className="top-border"></div>

            <header className="header">
                <div>
                    <div>
                        <Link to={"/"}>
                            <img src={logo} alt="Logo" />
                        </Link>
                        <Link to={"/"}>
                            <h4>Prime Petrol Distributors</h4>
                        </Link>
                    </div>


                    <div>
                        <div>
                            <ul>
                                <li>
                                    <Person />
                                    <Link to={"/"}>Apply Dealership</Link>
                                </li>
                                <li>
                                    <Settings />
                                    <Link to={"/login"}>Applicant Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header