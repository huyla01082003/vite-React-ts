
export const TOGGLE_BUTTON = 'TOGGLE_BUTTON';

export interface ToggleButtonAction {
    type: typeof TOGGLE_BUTTON; // Đảm bảo type đúng
}

export const toggleButton = (): ToggleButtonAction => ({
    type: TOGGLE_BUTTON,
});

// Xuất cả các loại action
export type ButtonActionTypes = ToggleButtonAction;