import { CatImageResponse } from "../../pub.types";
import styles from './Viewer.module.scss'

type ViewerProps = {
    data: CatImageResponse
}

const Viewer = ({data}: ViewerProps) => {
    if (!data) return null
    return (
        <img className={styles.img} src={data.url} alt={data.id} style={{aspectRatio: data.width / data.height}}/>
    );
}

export default Viewer;
