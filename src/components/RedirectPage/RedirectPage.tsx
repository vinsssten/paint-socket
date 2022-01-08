import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../..';

interface Props {}

const RedirectPage: FC<Props> = ({}) => {
    const {isAuth} = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/mainpage');
    }, []);
    return <div></div>;
};

export default RedirectPage;
