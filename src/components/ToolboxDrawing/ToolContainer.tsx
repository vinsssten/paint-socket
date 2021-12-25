import { FC } from 'react'
import stl from './ToolboxDrawing.scss'

interface Props {
    children: JSX.Element
    title: string
}

const ToolContainer: FC<Props> = ({children, title} ) => {
    return (
        <div className={stl.toolcont}>
            <h1 className={stl.toolcontHeader}>{title}</h1>
           {children} 
        </div>
    )
}

export default ToolContainer
