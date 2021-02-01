import {ActionUtility} from "../utils/ActionUtility";
import CommonAction from "../misc/common/CommonAction";
import {SiteAction} from "./SiteAction";

const siteMiddleware = (state) => next => action => {

    const { getState, dispatch } = state;


    switch (action.type) {
        case ActionUtility.getFulfilledAction(SiteAction.CREATE_SITE):
            dispatch(CommonAction.showSuccessModal('Site Created Successfully!'));
            break;
        case ActionUtility.getFulfilledAction(SiteAction.UPDATE_SITE):
            dispatch(CommonAction.showSuccessModal('Site Updated Successfully!'))
            break;
        default:
            break;
    }

    next(action)
}


export default siteMiddleware;