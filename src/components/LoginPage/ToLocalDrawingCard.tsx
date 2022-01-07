import React, { FC } from 'react'
import { useNavigate } from 'react-router';
import stl from './LoginPage.scss';

interface Props {

}

const ToLocalDrawingCard: FC<Props> = ({  }) => {
    const navigate = useNavigate();

    function handleClick () {
        navigate('/singledrawing');
    }

    return (
        <div className={stl.cardContainer} style={{marginTop: '30px'}}>
            <h1 className={stl.textHead}>
                Also, you can go to single drawing mode
            </h1>
            <div className={stl.mainButton} onClick={handleClick}>
                GO!
            </div>
        </div>
    )
}

export default ToLocalDrawingCard