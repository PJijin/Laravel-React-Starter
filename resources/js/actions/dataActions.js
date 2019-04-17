import { FETCH_DATA, IS_LOADING } from "../actions/actionTypes";
import axios from "axios";

export const fetchItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get("https://api.github.com/users/PJijin").then(res =>
        dispatch({
            type: FETCH_DATA,
            payload: res.data
        })
    );
};

export const setItemsLoading = () => dispatch => {
    return {
        type: IS_LOADING
    };
};
