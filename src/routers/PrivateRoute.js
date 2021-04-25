import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest //Operador rest
}) => {
    

    //Si esta logueado puede acceder a las rutas, si no redirecciona al login
    return (
        
        <Route { ...rest }
            component={ ( props ) => (
                ( isAuthenticated )
                    ? <Component { ...props } /> //Operador express
                    : <Redirect to="/auth/login" />
            )}
        />    
       
    )
}

PrivateRoute.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}