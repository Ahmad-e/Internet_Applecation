import { Container } from "react-bootstrap";
import File from "../components/file";

function GroupFiles(){
    return(
        <div className="outlite flex py-5">
        <Container className="flex flex-wrap">
            <File title="file title" id="1"/>
            <File title="file title" id="1"/>
            <File title="file title" id="1"/>
            <File title="file title" id="1"/>
            <File title="file title" id="1"/>
            <File title="file title" id="1"/>
            <File title="file title" id="1"/>
            <File title="file title" id="1"/>
            <File title="file title" id="1"/>
            <File title="file title" id="1"/>
            <File title="file title" id="1"/>
            <File title="file title" id="1"/>
        </Container>
    </div>
    )
}
export default GroupFiles;