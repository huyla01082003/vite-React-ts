// store.ts
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../slice/Modal';
import socialReducer from '../slice/connectSocial';
import buttonReducer from '../slice/Reducer';

const store = configureStore({
    reducer: {
        counter: modalReducer,
        social: socialReducer,
        button: buttonReducer,  
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;