import * as type from '../actions/Type';
import * as constant from '../Constant';

export default function(state = constant.INITIAL_STATE, action){
    switch(action){
    case type.CHANGE_USER:
        return Object.assign({}, state);
    default:
        return state;
    }
}