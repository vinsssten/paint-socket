import React, { FC, useEffect, useState } from 'react'
import cln from 'classnames'
import stl from './Buttons.scss'

interface Props {

}

const AddFindFriendButton: FC<Props> = ({  }) => {
    const [isAdd, setIsAdd] = useState<boolean>(true);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        setText(isAdd ? 'Add friend' : 'Remove friend');
    }, [isAdd])

    function handleClick () {
        setIsAdd(!isAdd);
    }

    return (
        <div 
            className={cln(stl.addFindFriendButton, isAdd ? stl.add : stl.remove)}
            onClick={handleClick}>
            {text}
        </div>
    )
}

export default AddFindFriendButton