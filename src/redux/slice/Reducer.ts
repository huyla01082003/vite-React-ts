// reducer.ts
import { TOGGLE_BUTTON, ButtonActionTypes } from '../slice/Acction';

interface ButtonState {
    isActive: boolean;
}

const initialState: ButtonState = {
    isActive: false,
};

const buttonReducer = (state: ButtonState = initialState, action: ButtonActionTypes | { type: string }): ButtonState => {
    switch (action.type) {
        case TOGGLE_BUTTON:
            return {
                ...state,
                isActive: !state.isActive,
            };
        default:
            return state; 
    }
};

export default buttonReducer;