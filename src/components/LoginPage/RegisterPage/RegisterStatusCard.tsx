import React, { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmptyCard from '../../Cards/EmptyCard';
import stl from '../LoginPage.scss';

interface Props {
    message: string;
}

const RegisterStatusCard: FC<Props> = ({ message }) => {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(0);

    return (
        <EmptyCard color="#2dd52d87">
            <div className={stl.cardContainer}>
                <h1 className={stl.textHeadGreen}>{message}</h1>
                <Link className={stl.greenLink} to="/signin">
                    Click here to return to Sign in
                </Link>
            </div>
        </EmptyCard>
    );
};

export default RegisterStatusCard;
