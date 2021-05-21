// == Import : npm
import React, { useEffect, useContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

// == Import : components
import Header from '../Header/header';
import Auth from '../Auth/auth';
import Home from '../Home/home';
import Profile from '../Profile/profile';
import Footer from '../Footer/footer';

// == Import : local
import './style.scss';
import { UserContext } from '../../context/userContext';


const App = () => {
    const [userState, userDispatch] = useContext(UserContext); // On importe le "context".
    const { isLogged } = userState;
    const [isLoading, setIsLoading] = useState(true);

    /**
     * Fonction pour reconnecter l'utlisateur, si il à un cookie de session, via un appel à l'API.
     */
    const checkLogged = async () => {
        const response = await axios.get(
            'http://localhost:5000/api/auth/checklogged',
            {
                'withCredentials': true // On transmet les cookies.
            }
        );

        /**
         * Si la réponse est valide on enregistre les valeurs dans le "context".
         */
        if (response.status === 200 && !response.data.error) {
            userDispatch({
                type: 'SETVALUES',
                isLogged: true,
                id: response.data.id,
                imageUrl: response.data.image_url,
                isMod: response.data.isMod,
                email: response.data.email,
                firstname: response.data.firstname,
                name: response.data.name
            });
        }
        setIsLoading(false); // On désactive l'affichage du spinner.
    };

    /**
     * On utilise le hook "useEffect" uniquement au montage du composant "App".
     */
    useEffect(() => {
        checkLogged();
    }, []);

    return (
        <div className="App">
            <Header />
            {isLoading
                ?
                    <div className="SpinnerContainer">
                        <div className='spinnerLoader' />
                        <p>Chargement des données...</p>
                    </div>
                :
                    <div className="Container">
                        <Switch>
                            <Route path={'/'} component={Auth} exact />
                            {isLogged ? <Route path={'/home'} component={Home} exact /> : <Redirect to='/' />}
                            {isLogged ? <Route path={'/profile'} component={Profile} exact /> : <Redirect to='/' />}
                        </Switch>
                    </div>
            }
            <Footer />
        </div>
    );
}

export default App;
