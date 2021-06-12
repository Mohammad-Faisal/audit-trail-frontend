import {ActionUtility} from "../utils/ActionUtility";
import CommonAction from "../misc/common/CommonAction";
import {ServiceAction} from "./ServiceAction";

const serviceMiddleware = (state) => next => action => {

    const { getState, dispatch } = state;

    switch (action.type) {
        case ActionUtility.getFulfilledAction(ServiceAction.CREATE_SERVICE):
            dispatch(CommonAction.showSuccessModal('Service Created Successfully!'));
            break;
        default:
            break;
    }

    next(action)
}


export default serviceMiddleware;