import { Email, Lock, Refresh } from "@mui/icons-material";
import captcha from "../../assets/default.png"


const Login = () => {
    return (
        <section className="login-section">
            <div>
                <div>
                    <div className="pannel">
                        <h3>Applicant Login Panel</h3>

                        <form>
                            <div>
                                <div>
                                    <Email />
                                    <input type="email" name="email" placeholder="Email ID" required />
                                </div>

                                <div>
                                    <Lock />
                                    <input type="password" name="password" placeholder="Password" required />
                                </div>

                                <div>
                                    <div className="captcha">
                                        <span>
                                            <img src={captcha} />
                                        </span>
                                        <button type="button">
                                            <Refresh />
                                        </button>
                                    </div>

                                    <Lock />
                                    <input type="text" name="captcha" placeholder="Enter Captcha" required />
                                </div>

                                <div>
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        </form>

                        {/* <div className="forgot-password">
                            <a>
                                <b>Forgot Password?</b>
                            </a>
                        </div>

                        <div className="sign-up">
                            <p>{"Don't have an account?"}</p>
                            <Link to={"/register"}>Register Now</Link>
                        </div> */}

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login