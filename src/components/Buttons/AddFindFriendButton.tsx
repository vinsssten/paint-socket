import React, { FC, useEffect, useState } from 'react'
import cln from 'classnames'
import stl from './Buttons.scss'
import useFriends from '../../lib/hooks/useFriends';

interface Props {
    id: string
    isSendedInvite: boolean
}

const AddFindFriendButton: FC<Props> = ({ id, isSendedInvite }) => {
    const [isAdd, setIsAdd] = useState<boolean>(!isSendedInvite);
    const [text, setText] = useState<string>('');
    const { addFriend, discardInvite } = useFriends();

    useEffect(() => {
        if (isAdd) {
            setText('Add friend');
        } else {
            setText('Discard invite');
        }
    }, [isAdd])

    async function handleClick () {
        if (isAdd) {
            const response = await addFriend(id);
            setIsAdd(!isAdd)
        } else {
            const response = await discardInvite(id);
            setIsAdd(!isAdd)
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