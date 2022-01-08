import React, { FC, useState } from 'react';
import EmptyCard from '../../Cards/EmptyCard';
import stl from '../LoginPage.scss';
import StartRegisterCard from './StartRegisterCard';
import useRegister from '../../../lib/hooks/useRegister';
import RegisterStatusCard from './RegisterStatusCard';

interface Props {
    
}

export interface InputProps {
    placeholder?: string;
    isSecure: boolean;
    value: string;
    inputHandle: React.Dispatch<React.SetStateAction<string>>;
}

//TODO: Need to refactor
const RegisterCard: FC<Props> = ({  }) => {
    const {isAuth, registerMessage, isLoading, isSuccess, registration} = useRegister();

    if (isSuccess && registerMessage) {
        return <RegisterStatusCard message={registerMessage} />
    } else {
        return (
            <EmptyCard>
                <div className={stl.cardContainer}>
                    <StartRegisterCard serverMessage={registerMessage} isLoading={isLoading} registration={registration}/>
                </div>
            </EmptyCard>
        );
    }
    
};

export default RegisterCard;
