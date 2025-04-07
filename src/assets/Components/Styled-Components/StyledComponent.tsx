import styled from 'styled-components';
import { useCatImage } from '../pubfuncs';
import StyledButton from './Button/StyledButton';
import StyledCheckBox from './CheckBox/StyledCheckBox';
import StyledViewer from './Viewer/StyledViewer';

const Wrapper = styled.div`
width: 300px;
max-width: 300px;`;

const StyledComponent = () => {
    const {image,loading,enabled, setEnabled,autoRefresh,setAutoRefresh,fetchImage} = useCatImage();
    return (
        <Wrapper>
            <h2>Styled Component</h2>
            <StyledCheckBox onChange={()=> setEnabled(!enabled)} checked={enabled}>Enabled</StyledCheckBox>
            <StyledCheckBox onChange={() => setAutoRefresh(!autoRefresh)} checked={autoRefresh}>Auto-refrash every 5 second</StyledCheckBox>
            <StyledButton onClick={fetchImage}>Get Cat</StyledButton>
            {loading ? <p>Loading...</p> : image && <StyledViewer data={image} />}
        </Wrapper>
  )
}

export default StyledComponent