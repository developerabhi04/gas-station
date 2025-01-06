import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

const ChildrenOutlet = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default ChildrenOutlet 