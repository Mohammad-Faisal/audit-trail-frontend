import {ModalStatus} from "./general-models/ModalStatus";
import {ActionUtility} from "../../utils/ActionUtility";

export default class CommonAction {

    static SET_MODAL_STATUS = 'MiscAction.SET_MODAL_STATUS'

    static showSuccessModal  = (message:string) => ActionUtility._createAction(CommonAction.SET_MODAL_STATUS, new ModalStatus(message , true))

}
