import React, { FC } from 'react';
import stl from './Buttons.scss';

interface Props {
    text: string;
    action(): void;
}

const ButtonLoginPage: FC<Props> = ({ text, action }) => {
    return (
        <div onClick={action} className={stl.mainButton}>
            {text}
        </div>
    );
};

export default ButtonLoginPage;
