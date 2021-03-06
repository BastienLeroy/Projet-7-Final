// == Import : npm
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';

// == Import : local
import './style.scss';
import { UserContext } from '../../context/userContext';

const Auth = () => {
    const [userState, userDispatch] = useContext(UserContext); // On importe le "context"
    const history = useHistory(); // On utilise le hook "useHistory".

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailSignup, setEmailSignup] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');

    /**
     * Fonction permettant de gérer les soumissions des formulaires "signin" et "signup".
     */
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const formName = e.currentTarget.id;

        switch(formName) {
            case 'signin':
                const dataSignin = {
                    email,
                    password
                };

                const responseSignin = await axios.post(
                    'http://localhost:5000/api/auth/signin',
                    dataSignin,
                    {
                        'withCredentials': true,
                        headers: { 'Content-Type': 'application/json' }
                    }
                );

                if (responseSignin.status === 200) {
                    // On enregistre les données dans le context.
                    userDispatch({
                        type: 'SETVALUES',
                        isLogged: true,
                        id: responseSignin.data.id,
                        imageUrl: responseSignin.data.image_url,
                        isMod: responseSignin.data.isMod,
                        email: responseSignin.data.email,
                        firstname: responseSignin.data.firstname,
                        name: responseSignin.data.name
                    })
                    history.push('/home'); // Redirige vers la page "home".
                }
                break;

            case 'signup':
                const dataSignup = {
                    email: emailSignup,
                    password: passwordSignup
                };

                /**
                 * Crée le compte utilisateur.
                 */
                const responseSignup = await axios.post(
                    'http://localhost:5000/api/auth/signup',
                    dataSignup,
                    {
                        'withCredentials': true,
                        headers: { 'Content-Type': 'application/json' }
                    }
                );

                if (responseSignup.status === 201) {
                    /**
                     * On connecte l'utilisateur.
                     */
                    const response = await axios.post(
                        'http://localhost:5000/api/auth/signin',
                        dataSignup,
                        {
                            'withCredentials': true,
                            headers: { 'Content-Type': 'application/json' }
                        }
                    );

                    if (response.status === 200) {
                        // On enregistre les données dans le context.
                        userDispatch({
                            type: 'SETVALUES',
                            isLogged: true,
                            id: response.data.id,
                            imageUrl: response.data.image_url,
                            isMod: response.data.isMod,
                            email: response.data.email,
                            firstname: response.data.firstname,
                            name: response.data.name
                        })
                        history.push('/profile'); // Redirige vers la page "profile".
                    }
                }
                break;
            default: break;
        }
    };

    return (
        <div className="Auth">
            <h1>Bienvenue sur notre réseau social ! </h1>
            <h2>Veuillez vous inscrire ou vous connecter</h2>
            <div className="Auth_Log">
                <h2 className="Auth_Log_Title">Se Connecter</h2>
                <div className="Auth_Log_Container">
                    <form className="Auth_Log_Container_Form">
                        <div className="Auth_Log_Container_Form_InputContainer">
                            <label htmlFor='email'>Email</label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                value={email}
                                onChange={e => setEmail(e.currentTarget.value)}
                            />
                        </div>
                        <div className="Auth_Log_Container_Form_InputContainer">
                            <label htmlFor='password'>Password</label>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.currentTarget.value)}
                            />
                        </div>
                        <button
                            id="signin"
                            className="Auth_Log_Container_Form_Button"
                            type='submit'
                            onClick={handleOnSubmit}
                        >
                            Valider
                        </button>
                    </form>
                </div>
            </div>
            <div className="Auth_Log">
                <h2 className="Auth_Log_Title">Créer un compte</h2>
                <div className="Auth_Log_Container">
                    <form className="Auth_Log_Container_Form">
                        <div className="Auth_Log_Container_Form_InputContainer">
                            <label htmlFor='emailSignUp'>Email</label>
                            <input
                                id='emailSignUp'
                                name='email'
                                type='email'
                                value={emailSignup}
                                onChange={e => setEmailSignup(e.currentTarget.value)}
                            />
                        </div>
                        <div className="Auth_Log_Container_Form_InputContainer">
                            <label htmlFor='passwordSignUp'>Password</label>
                            <input
                                id='passwordSignUp'
                                name='password'
                                type='password'
                                value={passwordSignup}
                                onChange={e => setPasswordSignup(e.currentTarget.value)}
                            />
                        </div>
                        <button
                            id="signup"
                            className="Auth_Log_Container_Form_Button"
                            type='submit'
                            onClick={handleOnSubmit}
                        >
                            Valider
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Auth;
