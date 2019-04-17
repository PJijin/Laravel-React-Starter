import { FETCH_DATA, IS_LOADING } from "../actions/actionTypes";
const initialState = {
    data: [],
    isLoading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            };

        default:
            return state;
    }
}
