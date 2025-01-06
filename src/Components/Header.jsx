import { Help, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../assets/logoo.png";

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

                                    <Link to={"/need-a-help"} state={{from: 'withinApp' }}>
                                        <Help />
                                        Need Help?
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/apply-dealership"} state={{ from: 'withinApp' }}>
                                        <Settings />
                                        Apply Dealership
                                    </Link>
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