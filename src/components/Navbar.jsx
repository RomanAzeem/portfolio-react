import * as React from "react"
import Logo from "assets/logo.png"
import { FaBars, FaTimes } from "react-icons/fa"
const Navbar = () => {
    const [nav, setNav] = React.useState(false)
    const toggleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-darkGray text-gray-300">
            <div> <img src={Logo} alt="name_Logo" style={{ width: "100px" }}></img></div>
            {/* menu */}
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Skilss</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
            {/* Hamburger */}
            <div className="md:hidden z-10" onClick={toggleNav}>{!nav ? <FaBars /> : <FaTimes />}</div>
            {/* mobile menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-darkGray flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skilss</li>
                <li className="py-6 text-4xl">Work</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>
            {/* Social Icons */}
            <div className="hidden"></div>
        </div>
    )
}

export default Navbar