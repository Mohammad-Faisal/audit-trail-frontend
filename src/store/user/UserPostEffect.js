import {ActionUtility} from "../utils/ActionUtility";
import {UserAction} from "./UserAction";
import CommonAction from "../misc/common/CommonAction";

const userMiddleware = (state) => next => action => {

    const { getState, dispatch } = state;


    console.log("this is coming from user  middleware" , state , action)


    switch (action.type) {
        case ActionUtility.getFulfilledAction(UserAction.SIGN_IN):
        case ActionUtility.getFulfilledAction(UserAction.SIGN_UP):
            localStorage.setItem('JWT_TOKEN', action.payload?.data?.data?.jwtToken);
            break;
    }

    next(action)
}


export default userMiddleware;