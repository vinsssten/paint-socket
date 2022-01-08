import React, { FC } from 'react';
import stl from '../LoginPage.scss';
import RegisterCard from './RegisterCard';

interface Props {}

const RegisterPage: FC<Props> = ({}) => {
    return (
        <div className={stl.mainContainer}>
            <RegisterCard />
        </div>
    );
};

export default RegisterPage;
