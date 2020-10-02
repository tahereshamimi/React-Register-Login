import {
    SET_MOBILE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    SET_USER_INFO
} from './types';


const initialState = {
    data: '',
    error: '',
    mobile: '',
    loggedIn: false,
    info: ""


}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOBILE:
            return {
                ...state,
                mobile: action.payload
            }
            case REGISTER_REQUEST:
                return {
                    ...state,
                }

                case REGISTER_SUCCESS:
                    return {
                        ...state,
                        data: action.payload

                    }

                    case REGISTER_FAILURE:
                        return {
                            ...state,
                            error: action.payload
                        }

                        case LOGIN_SUCCESS:
                            return {
                                ...state,
                                info: action.payload

                            }
                            case SET_USER_INFO:
                                return{
                                    ...state,
                                    info:action.payload.user
                                }




                            default:
                                return state
    }
}
export default reducer