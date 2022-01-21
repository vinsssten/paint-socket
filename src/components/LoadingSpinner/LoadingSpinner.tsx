import React, { FC } from 'react';
import stl from './LoadingSpinner.scss';

import spinner from '../../../public/icons/secondary/loading_spinner.svg';

interface Props {}

const LoadingSpinner: FC<Props> = ({}) => {
    return (
        <div className={stl.cont}>
            <div className={stl.ldsring}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
