import './App.css'
import SCSS from './assets/Components/SCSS/SCSS'
import SCSSModule from './assets/Components/SCSSModules/SCSSModule'
import StyledComponent from './assets/Components/Styled-Components/StyledComponent'

function App() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <SCSSModule />
            <SCSS />
            <StyledComponent />
        </div>
    )
}

export default App
