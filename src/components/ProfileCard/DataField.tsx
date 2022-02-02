import React, { FC } from 'react';
import stl from './ProfileCard.scss';

interface Props {
    title: string;
    content: string;
}

const DataField: FC<Props> = ({ title, content }) => {
    return (
        <div className={stl.dataFieldContainer}>
            <div className={stl.title}>
                <h3>{title}</h3>
            </div>
            <div className={stl.content}>
                <h2>{content}</h2>
            </div>
        </div>
    );
};

export default DataField;
