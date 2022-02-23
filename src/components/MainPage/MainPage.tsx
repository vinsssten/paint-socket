import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../lib/hooks/authHooks/useAuth';
import FriendsCard from '../FriendsCard/FriendsCard';
import ProfileCard from '../ProfileCard/ProfileCard';
import stl from './MainPage.scss';
import useUserProfile from '../../lib/hooks/useUserProfile';
import { FullSelfProfile } from '../../lib/models/Response/SelfProfileResponse';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

interface Props {}

const MainPage: FC<Props> = ({}) => {
    const [profile, setProfile] = useState<FullSelfProfile | null>(null);
    const { getFullProfile } = useUserProfile();

    useEffect(() => {
        getFullProfile().then(values => {
            setProfile(values);
        });
    }, []);

    return (
        <div className={stl.mainContainer}>
            <div className={stl.cardsContainer}>
                {profile ? (
                    <>
                        <ProfileCard profile={profile.profile} />
                        <FriendsCard friends={profile.friends} />
                    </>
                ) : (
                    <LoadingSpinner />
                )}
            </div>
        </div>
    );
};

export default MainPage;
