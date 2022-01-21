import React, { FC } from 'react';
import useAuth from '../../lib/hooks/authHooks/useAuth';
import useUserProfile from '../../lib/hooks/useUserProfile';
import ButtonLoginPage from '../Buttons/ButtonLoginPage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import AvatarMain from './AvatarMain';
import DataField from './DataField';
import stl from './ProfileCard.scss';

interface Props {}

const ProfileCard: FC<Props> = ({}) => {
    const { logout } = useAuth();
    const {username, avatar, createDate, isLoading} = useUserProfile();


    if (isLoading)  {
        return (
            <div className={stl.cardContainer}>
                {/* <LoadingSpinner /> */}
                <h1 className={stl.headerText}>Please wait, loading your profile...</h1>
            </div>
        )
    } else {
        return (
            <div className={stl.cardContainer}>
                <div className={stl.container}>
                    <h1 className={stl.headerText}>Your profile, {username}</h1>
                    <AvatarMain avatar={avatar} />
                    <DataField title='Username' content={username || 'loading...'} />
                    <DataField title='Date creation' content={createDate || 'loading...'} />
                    <ButtonLoginPage text="Logout" action={logout} />
                </div>
            </div>
        );
    }
};

export default ProfileCard;
