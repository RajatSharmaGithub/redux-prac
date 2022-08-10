import axios from "axios";
import { FORM_SUBMIT_SUCCESS, FORM_SUBMIT_FAIL, FORM_SUBMIT_REQUEST, USER_DATALIST_SUCCESS, USER_DATALIST_REQUEST, USER_DATALIST_FAIL } from '../Constants/TextformConstant'

export const TextformAction = (first_name, last_name, email) => async (dispatch) => {


    dispatch({ type: FORM_SUBMIT_REQUEST, payload: { first_name, last_name, email } });
    dispatch({ type: USER_DATALIST_REQUEST, payload: {} });
    try {
        const { data } = await axios.post(
            `http://localhost:3000/users`, { first_name, last_name, email }
        );
        console.log("data", data);
        if (data) {
            dispatch({
                type: FORM_SUBMIT_SUCCESS,
                payload: data,
            });
            dispatch({
                type: USER_DATALIST_SUCCESS,
                payload: data,
            });
        } else {
            dispatch({ FORM_SUBMIT_FAIL, payload: data });
            console.log("submit", data)
            localStorage.setItem("userInfo", JSON.stringify(data));
        }
    } catch (error) {
        dispatch({
            type: FORM_SUBMIT_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message :
                    error.message,
        });
    }
}

export const getUserData = () => async (dispatch) => {
    console.log("okk");
    dispatch({ type: USER_DATALIST_REQUEST, payload: {} });
    try {
        const { data } = await axios.get(
            `http://localhost:3000/users`
        );


        console.log("data", data);
        if (data) {
            dispatch({
                type: USER_DATALIST_SUCCESS,
                payload: data,
            });
        }
    } catch (error) {
        dispatch({
            type: USER_DATALIST_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message :
                    error.message,
        });
    }

}