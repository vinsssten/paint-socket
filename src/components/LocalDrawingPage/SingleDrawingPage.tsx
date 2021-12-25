import stl from './SingleDrawingPage.scss'
import { useSelector } from 'react-redux'
import { InitialState } from '../../lib/models/reducerStates/InitialState'
import ToolboxDrawing from '../ToolboxDrawing/ToolboxDrawing'

function SingleDrawingPage() {
    const theme = useSelector<InitialState>(state => state.app.theme)

    return (
        <div className={stl.page}>
            <ToolboxDrawing />
        </div>
    )
}

export default SingleDrawingPage
