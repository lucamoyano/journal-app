//thunk provee el dispatch para peticiones asincrobas
//Acciones del login
import Swal from 'sweetalert2';

import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from './ui';

//Peticion asincrona del login
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                dispatch( login( user.uid, user.displayName ) );

                dispatch(finishLoading());
            })
            .catch( e => {
                dispatch(finishLoading());
                Swal.fire('Error', e.message, 'error');
            })
    }

}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {
                //Actualizar nombre firebase
                await user.updateProfile({ displayName: name }); 

                //Loguear usuario
                dispatch(
                    login( user.uid, user.displayName )
                );
            })
            .catch(e => {
                Swal.fire('Error', e.message, 'error');
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {

        //Crear registro con popup de firebase
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            });

    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const startLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
})