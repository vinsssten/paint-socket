import React, { FC, useState } from 'react';
import stl from './Inputs.scss';

import findSVG from '../../../public/icons/Profile/find.svg';
import { debounce } from 'lodash';

interface Props {
    findDispatcher: React.Dispatch<React.SetStateAction<string>>;
}

const FindFriendInput: FC<Props> = ({ findDispatcher }) => {
    const debouncedHandle = debounce(handleChange, 400);

    function handleChange(event: any) {
        const target = event.target;
        findDispatcher(target.value);
    }

    return (
        <div className={stl.findFriendInput}>
            <div className={stl.findImage}>
                <img src={findSVG} />
            </div>
            <input onChange={debouncedHandle} placeholder="Find a friend" type={'text'} />
        </div>
    );
};

export default FindFriendInput;
