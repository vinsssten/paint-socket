import React, { FC } from 'react'
import stl from './EmptyCard.scss'

interface Props {

}

const EmptyCard: FC<Props> = ({ children }) => {
    return (
        <div className={stl.glassCard}>
            {children}
        </div>
    )
}

export default EmptyCard