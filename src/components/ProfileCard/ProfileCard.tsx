import React, { FC } from 'react';
import useAuth from '../../lib/hooks/authHooks/useAuth';
import ButtonLoginPage from '../Buttons/ButtonLoginPage';
import AvatarMain from './AvatarMain';
import DataField from './DataField';
import stl from './ProfileCard.scss';

interface Props {}

const ProfileCard: FC<Props> = ({}) => {
    const { logout } = useAuth();

    return (
        <div className={stl.cardContainer}>
            <div className={stl.container}>
                <h1 className={stl.headerText}>Your profile, {'vinsssten'}</h1>
                <AvatarMain avatar={null} />
                <DataField title='Username' content='vinsssten' />
                <ButtonLoginPage text="Logout" action={logout} />
            </div>
        </div>
    );
};

export default ProfileCard;
