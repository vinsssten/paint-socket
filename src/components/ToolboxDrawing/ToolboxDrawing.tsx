import React from 'react'
import styled from 'styled-components'

const ToolboxContainer = styled.div`
    grid-area: toolbox;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: red;
`

function ToolboxDrawing() {
    return (
        <ToolboxContainer className='toolbox_container'>
            
        </ToolboxContainer>
    )
}

export default ToolboxDrawing
