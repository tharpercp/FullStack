import {
    RECEIVE_CURRENT_USER,
    LOGOUT,
    
} from '../actions/session';

const _nullUser = ({
    id: null
});

const sessionReducer = (state=_nullUser, action) => {
    Object.freeze(state);
    
    switch(action.type){
        case RECEIVE_CURRENT_USER:
           return {id: action.user.id };
        case LOGOUT:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer;