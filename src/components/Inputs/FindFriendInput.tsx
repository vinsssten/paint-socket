import React, { FC } from 'react'
import stl from './Inputs.scss'

import findSVG from '../../../public/icons/Profile/find.svg'

interface Props {

}

const FindFriendInput: FC<Props> = ({  }) => {
    return (
        <div
            className={stl.findFriendInput}>
            <div className={stl.findImage}>
                <img src={findSVG}/>
            </div>
            <input 
                placeholder="Find a friend"
                type={'text'}
            />
        </div>
    )
}

export default FindFriendInput