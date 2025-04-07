import CheckBox from './CheckBox/CheckBox';
import Button from './Button/Button';
import Viewer from './Viewer/Viewer';
import { useCatImage } from '../pubfuncs';
import './SCSS.scss'

const SCSS = () => {
    const {image,loading,enabled, setEnabled,autoRefresh,setAutoRefresh,fetchImage} = useCatImage();
    return (
        <div className="scss">
            <h2>SCSS</h2>
            <CheckBox onChange={()=> setEnabled(!enabled)} checked={enabled}>Enabled</CheckBox>
            <CheckBox onChange={() => setAutoRefresh(!autoRefresh)} checked={autoRefresh}>Auto-refrash every 5 second</CheckBox>
            <Button onClick={fetchImage}>Get Cat</Button>
            {loading ? <p>Loading...</p> : image && <Viewer data={image} />}
        </div>
  )
}

export default SCSS