import React, { FC, useEffect, useState } from 'react'
import cln from 'classnames'
import stl from './Buttons.scss'
import useFriends from '../../lib/hooks/useFriends';

interface Props {
    id: string,
    isSendInvite: boolean
}

const AddFindFriendButton: FC<Props> = ({ id, isSendInvite: isSendInvite }) => {
    const [isAdd, setIsAdd] = useState<boolean>(!isSendInvite);
    const [text, setText] = useState<string>('');
    const { addFriend } = useFriends();

    useEffect(() => {
        setText(isAdd ? 'Add friend' : 'Remove friend');
    }, [isAdd])

    async function handleClick () {
        const response = await addFriend(id);
        if (response) {
            setIsAdd(!isAdd);
        }
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