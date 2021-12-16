/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch (action.type) {
        case 'ADD_DETAILS':
            return {
                ...state,
                userData: [action.payload, ...state.userData]
            }
        default:
            return state;
    }
}