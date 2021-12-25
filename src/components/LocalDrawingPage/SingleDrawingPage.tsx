import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { InitialState } from '../../lib/models/reducerStates/InitialState'
import ToolboxDrawing from '../ToolboxDrawing/ToolboxDrawing'
// import './SingleDrawingPage.css'

const PageContainer = styled.div<{theme: Theme}>`
    width: 100vw;
    height: 100vh;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr; 
    grid-template-rows: 0.1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      "toolbox"
      "canvasContainer"; 
`

function SingleDrawingPage() {
    const theme = useSelector<InitialState>(state => state.app.theme)

    return (
        <PageContainer theme={theme}>
            <ToolboxDrawing />
        </PageContainer>
    )
}

export default SingleDrawingPage
