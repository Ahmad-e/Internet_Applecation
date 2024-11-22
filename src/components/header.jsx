import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
    <div className="navbar header position-fixed sm-shadow text-center nav w-100 ">
        <Container className="flex justify-content-between p-2">
            <div className="main-color logo">
            <span>Logo</span>
            </div>
            
            <div className="flex flex-wrap">
                <div className="border-end flex flex-wrap py-2 px-3 me-3">
                    <Link to="/"className="main-color mx-2 my-1 header-link">Home</Link>
                    <Link to="/profile"className="main-color my-1 mx-2 header-link">Profile</Link>
                    <Link to="/group" className="main-color my-1 mx-2 header-link">Group</Link>
                </div>
                <div className="flex flex-wrap">
                  <Link to="/login" className="btn main-btn my-1 mx-2">Login</Link>
                  <Link to="/login" style={{color: "inherit"}} className="header-link my-1 login mx-2 signIn">SignIn</Link>
                </div>
            </div>
        </Container>
    </div>
    )
}

export default Header;