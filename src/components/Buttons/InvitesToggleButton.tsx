import React, { FC, useState } from 'react';
import cln from 'classnames';
import stl from './Buttons.scss';

interface Props {
    onClick(): void;
}

const InvitesToggleButton: FC<Props> = ({ onClick }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    function handleClick() {
        setIsActive(!isActive);
        onClick();
    }

    return (
        <div
            className={cln(stl.invitesButton, isActive ? stl.invitesButton_active : null)}
            onClick={handleClick}
        >
            {isActive ? 'Friends' : 'Invites'}
        </div>
    );
};

export default InvitesToggleButton;
