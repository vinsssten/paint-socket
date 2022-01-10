import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../lib/hooks/useAuth';
import ProfileCard from '../ProfileCard/ProfileCard';
import stl from './MainPage.scss';

interface Props {}

const MainPage: FC<Props> = ({}) => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/signin');
        }
    }, [isAuth]);

    return (
        <div className={stl.mainContainer}>
            <ProfileCard />
        </div>
    );
};

export default MainPage;
