import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import {NavLink } from "react-router-dom";

export default function SideBar(props){


    return(
        <>
            <div className="overley">
            </div>
            <div className="sidebar">
            {props.links.map((link,index)=>{
                return(
                    <NavLink key={index} to={link.path} className="link">
                        <FontAwesomeIcon className="link-icon pe-2 main-color" icon={link.icon} />
                        <span className="link-name">{link.name}</span>
                    </NavLink>
                )
            })}
            </div>
        </>
        )
}