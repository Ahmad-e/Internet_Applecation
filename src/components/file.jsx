import FileSvg from "../svg/filesvg";
import { Link } from "react-router-dom";

function File(props) {
    return (
        <Link to={`/fileInfo/${props.id}`} className="file m-2">
            <FileSvg/>
            <p className="title">{props.title}</p>
        </Link>)
}

export default File;