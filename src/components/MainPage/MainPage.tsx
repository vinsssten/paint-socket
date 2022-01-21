import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../lib/hooks/authHooks/useAuth';
import ProfileCard from '../ProfileCard/ProfileCard';
import stl from './MainPage.scss';

interface Props {}

const MainPage: FC<Props> = ({}) => {
    return (
        <div className={stl.mainContainer}>
            <ProfileCard />
        </div>
    );
};

export default MainPage;
