import GroupSvg from "../svg/groupSvg";
import {Link} from "react-router-dom"

function Group(props){
    return (
        <Link to={`/groupFiles/${props.id}`} className="m-3">
            <GroupSvg/>
            <p className="py-3">{props.title}</p>
        </Link>)
}
export default Group;