import React, { FC } from 'react'
import stl from './EmptyCard.scss'

interface Props {
    color?: string
}

const EmptyCard: FC<Props> = ({ color, children }) => {
    return (
        <div style={{backgroundColor: color}} className={stl.glassCard}>
            {children}
        </div>
    )
}

export default EmptyCard