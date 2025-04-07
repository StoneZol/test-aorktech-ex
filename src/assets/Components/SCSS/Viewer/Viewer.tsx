import { CatImageResponse } from "../../pub.types";
import './Viewer.scss'

type ViewerProps = {
    data: CatImageResponse
}

const Viewer = ({data}: ViewerProps) => {
    if (!data) return null
    return (
        <img className="img" src={data.url} alt={data.id} style={{aspectRatio: data.width / data.height}}/>
    );
}

export default Viewer;
