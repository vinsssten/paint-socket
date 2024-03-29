import React, { FC } from 'react';
import stl from './ProfileCard.scss';

import emptyAvatar from '../../../public/icons/Profile/empty_avatar.png';

interface Props {
    avatar: string | null;
}

const AvatarMain: FC<Props> = ({ avatar }) => {
    return (
        <div className={stl.imageContainer}>
            <img src={avatar ?? emptyAvatar} />
        </div>
    );
};

export default AvatarMain;
