import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

interface Props {

}

const RedirectPage: FC<Props> = ({  }) => {
    const [isLoggined, setIsLoggined] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggined) {
            navigate('/signin');
        }
    }, []);
    return (
        <div>
            
        </div>
    )
}

export default RedirectPage