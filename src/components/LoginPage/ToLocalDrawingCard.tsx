import React, { FC } from 'react'
import { useNavigate } from 'react-router';
import EmptyCard from '../Cards/EmptyCard';
import stl from './LoginPage.scss';

interface Props {

}

const ToLocalDrawingCard: FC<Props> = ({  }) => {
    const navigate = useNavigate();

    function handleClick () {
        navigate('/singledrawing');
    }

    return (
        <EmptyCard>
            <h1 className={stl.textHead}>
                Also, you can go to single drawing mode
            </h1>
            <div className={stl.mainButton} onClick={handleClick}>
                GO!
            </div>
        </EmptyCard>
    )
}

export default ToLocalDrawingCard