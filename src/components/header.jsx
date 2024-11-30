import { ligatures } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
    <div className="navbar header position-fixed sm-shadow text-center nav w-100 ">
        <Container className="flex justify-content-between">
            <div className="main-color logo">
            <span>Logo</span>
            </div>
            <div className="flex flex-wrap">
                <div className="border-end  header-nav flex flex-wrap py-2 px-3 me-3">
                    <Link to="/profile"className="main-color my-1 mx-2 header-link">Profile</Link>
                    <Link to="/group" className="main-color my-1 mx-2 header-link">Groups</Link>
                    <Link to="/files"className="main-color mx-2 my-1 header-link">All Files</Link>
                </div>
                <div className="flex flex-wrap">
                    <Link to="/signin" className="btn main-btn my-1 mx-2">SignIn</Link>
                    <Link to="/signup" style={{color: "inherit"}} className="header-link my-1 mx-2 signup">SignUp</Link>
                    {/* <FontAwesomeIcon icon={faToggleOn} />
                    <FontAwesomeIcon icon={faToggleOff} /> */}
                </div>
            </div>
        </Container>
    </div>
    )
}

export default Header;