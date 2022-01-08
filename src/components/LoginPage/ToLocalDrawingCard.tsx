import React, { FC } from 'react'
import { useNavigate } from 'react-router';
import ButtonLoginPage from '../Buttons/ButtonLoginPage';
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
        <div style={{marginTop: '20px'}}>
            <EmptyCard>
                <div className={stl.localDrawingContainer}>
                    <h1 className={stl.textHead}>
                        Also, you can go to single drawing mode
                    </h1>
                    <ButtonLoginPage action={handleClick} text='GO!'/>
                </div>
            </EmptyCard>
        </div>
    )
}

export default ToLocalDrawingCard