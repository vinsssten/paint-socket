import React, { FC } from 'react'
import stl from './LoginPage.scss';

interface Props {
    isVisible: boolean
    header: string
    subElements?: string[]
}

const WarningListCard: FC<Props> = ({ isVisible, header, subElements }) => {
    if (isVisible) {
        return (
            <div className={stl.authProblemsCard}>   
                <h3>{header}</h3>
                <ul>
                    {subElements?.map((value, index) => <li>{value}</li>)}
                </ul>
            </div>
        )
    } else {
        return null
    }
}

export default WarningListCard