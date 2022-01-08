import React, { FC, useEffect, useState } from 'react'
import stl from './WarningCards.scss';

type WarningPreset = 'RegistrationFields'

interface Props {
    isVisible: boolean
    header?: string | null
    subElements?: string[]
    preset?: WarningPreset
}

const WarningListCard: FC<Props> = ({ isVisible, header, subElements, preset }) => {
    const [headerDisplayed, setHeaderDisplayed] = useState(header);
    const [subElementsDisplayed, setSubElementsDisplayed] = useState<string[] | undefined>(subElements);

    useEffect(() => {
        if (preset) {
            setHeaderDisplayed('Something went wrong...');
            setSubElementsDisplayed(['The login must be at least 5 characters long, and be unique', 
            'The username must be at least 4 characters long', 
            'The username must be complex, and no shorter than 5 characters']);
        }
    }, [])

    if (isVisible) {
        return (
            <div className={stl.listCard}>   
                <h3>{headerDisplayed}</h3>
                <ul>
                    {subElementsDisplayed?.map((value, index) => <li>{value}</li>)}
                </ul>
            </div>
        )
    } else {
        return null
    }
}

export default WarningListCard