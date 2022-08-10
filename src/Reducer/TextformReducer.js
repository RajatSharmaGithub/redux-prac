import { FORM_SUBMIT_SUCCESS, FORM_SUBMIT_FAIL, FORM_SUBMIT_REQUEST, USER_DATALIST_SUCCESS, USER_DATALIST_REQUEST, USER_DATALIST_FAIL } from "../Constants/TextformConstant"

export const formReducer = (state = { loading: true, userAction: [] }, action) => {

    switch (action.type) {
        case FORM_SUBMIT_REQUEST:
            return { loading: true, success: false };
        case FORM_SUBMIT_SUCCESS:
            return { loading: false, userAction: action.payload };
        case FORM_SUBMIT_FAIL:
            return { loading: false, userAction: action.payload };
        default:
            return state;
    }
}

export const userDataReducer = (state = { loading: true,success: false, userInfo: [] }, action) => {

    switch (action.type) {
        case USER_DATALIST_REQUEST:
            return { loading: true,success: false, };
        case USER_DATALIST_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_DATALIST_FAIL:
            return { loading: false, userInfo: action.payload };
        default:
            return state;
    }

}

