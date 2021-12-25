import React from 'react'
import styled from 'styled-components'
import ToolboxDrawing from '../ToolboxDrawing/ToolboxDrawing'
// import './SingleDrawingPage.css'

const PageContainer = styled.div`
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
    return (
        <PageContainer className='singleDrawing_mainContainer'>
            <ToolboxDrawing />
        </PageContainer>
    )
}

export default SingleDrawingPage
