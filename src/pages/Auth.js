import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { mainContext } from '../context/MainContext';

const Auth = () => {
    const { authUser, setUser, user } = useContext(mainContext)
    useEffect(() => {
        setUser()
    }, [])
    const history = useHistory()
    if (user) {
        history.push('/')
    }
    return (
        <div className='auth'>
            <div className='auth-block'>
                <h2>Войдите в аккаунт чтобы продолжить</h2>
                <button onClick={authUser}>Войти с помощью Google</button>
            </div>

        </div>
    );
};

export default Auth;