import SideBar from "../components/sideBar";
import { Outlet } from "react-router-dom"
import { faFile,faUserGroup,faFileImage,faPersonRifle } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
    const links = [
        {
            name: "Groups",
            icon: faUserGroup,
            path: "/group"
        },
        {
            name: "Profile",
            icon: faInfo,
            path: "/profile",
        },
        {
            name: "All Files",
            icon: faFile,
            path: "/files"
        }
    ]
    return <div className="home d-flex justify-content-between">
        <SideBar links={links}/>
        <Outlet className="outlite"/>
    </div>
}

export default Home;