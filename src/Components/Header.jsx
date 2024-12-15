import { Link } from "react-router-dom";
import logo from "../assets/logo_2.png";
import { Person, Settings } from "@mui/icons-material";

const Header = () => {
    return (
        <>
            <div className="top-border"></div>

            <header className="header">
                <div>
                    <div>
                        <img src={logo} alt="Logo" />
                        <h4>Petrol pump Dealer</h4>
                    </div>


                    <div>
                        <div>
                            <ul>
                                <li>
                                    <Person />
                                    <Link>Apply Dealership</Link>
                                </li>
                                <li>
                                    <Settings />
                                    <Link>Applicant Login</Link>
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