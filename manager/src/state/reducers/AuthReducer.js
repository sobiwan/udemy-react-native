import { EMAIL_CHANGED } from '../actions/types';

const INIT_STATE = { email: '' };

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
         

        default: 
         return state;
        
    }
}