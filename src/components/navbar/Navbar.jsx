import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
    const [open, setOpen] = useState(false);

    const user = true;

    return (
        <nav>
            <div className="left">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>JumaeEstates</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/agents">Agents</Link>
            </div>
            <div className="right">
                {user ? (
                    <div className="user">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.mGs4Bg_JQ10tgPOuJ7JCDwHaFj&pid=Api&P=0&h=180.jpg" alt="" />
                        <span>Jumae Doe</span>
                        <Link to="/profile" className="profile">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ) : (<><Link to="/signin">Sign In</Link>
                    <Link to="/signup" className="register">Sign up</Link></>)}
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen(prev => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/agents">Agents</Link>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
