import CheckBox from './CheckBox/CheckBox';
import Button from './Button/Button';
import Viewer from './Viewer/Viewer';
import { useCatImage } from '../pubfuncs';
import styles from './SCSSModule.module.scss'

const SCSSModule = () => {
    const {image,loading,enabled, setEnabled,autoRefresh,setAutoRefresh,fetchImage} = useCatImage();
    return (
        <div className={styles.scss_module}>
            <h2>SCSS Module</h2>
            <CheckBox onChange={()=> setEnabled(!enabled)} checked={enabled}>Enabled</CheckBox>
            <CheckBox onChange={() => setAutoRefresh(!autoRefresh)} checked={autoRefresh}>Auto-refrash every 5 second</CheckBox>
            <Button onClick={fetchImage}>Get Cat</Button>
            {loading ? <p>Loading...</p> : image && <Viewer data={image} />}
        </div>
  )
}

export default SCSSModule