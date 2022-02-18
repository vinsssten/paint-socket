import React, { FC, useState } from 'react'
import stl from './Inputs.scss'

import findSVG from '../../../public/icons/Profile/find.svg'
import { debounce } from 'lodash';

interface Props {

}

const FindFriendInput: FC<Props> = ({  }) => {
    const [value, setValue] = useState<string>('');
    const debouncedHandle = debounce(handleChange, 400);

    function handleChange (event: any) {
        const target = event.target;
        setValue(target.value);
        console.log('debounced value', value);
    }

    return (
        <div
        className={stl.findFriendInput}>
            <div className={stl.findImage}>
                <h2>{value}</h2>
                <img src={findSVG}/>
            </div>
            <input 
                onChange={debouncedHandle}
                placeholder="Find a friend"
                type={'text'}
            />
        </div>
    )
}

export default FindFriendInput