import React, { FC, useEffect } from 'react';
import useAuth from '../../lib/hooks/authHooks/useAuth';
import useUserProfile from '../../lib/hooks/useUserProfile';
import { SelfProfileResponse } from '../../lib/models/Response/SelfProfileResponse';
import ButtonLoginPage from '../Buttons/ButtonLoginPage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import AvatarMain from './AvatarMain';
import DataField from './DataField';
import stl from './ProfileCard.scss';

interface Props {
    profile: SelfProfileResponse;
}

const ProfileCard: FC<Props> = ({ profile }) => {
    const { logout } = useAuth();

    if (!profile) {
        return (
            <div className={stl.cardContainer}>
                {/* <LoadingSpinner /> */}
                <h1 className={stl.headerText}>Please wait, loading your profile...</h1>
            </div>
        );
    } else {
        return (
            <div className={stl.cardContainer}>
                <div className={stl.container}>
                    <h1 className={stl.headerText}>Your profile, {profile.username}</h1>
                    <AvatarMain avatar={profile.avatar} />
                    <DataField
                        title="Username"
                        content={profile.username || 'loading...'}
                    />
                    <DataField
                        title="Date creation"
                        content={profile.createDate || 'loading...'}
                    />
                    <ButtonLoginPage text="Logout" action={logout} />
                </div>
            </div>
        );
    }
};

export default ProfileCard;
