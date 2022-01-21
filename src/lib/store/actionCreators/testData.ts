import { Dispatch } from "redux";
import { loadTestAuth } from "./authActionCreators";
import { loadTestUserProfile } from "./userActionCreators";

export const loadTestUser = (dispatch: Dispatch<any>) => {
    dispatch(loadTestAuth());
    dispatch(loadTestUserProfile());
}