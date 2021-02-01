import {createReducer} from "@reduxjs/toolkit";
import CommonAction from "./CommonAction";

export interface ModalStatus {
    message: string;
    status:boolean;
    type:string;
}

const initialState ={
    modalStatus:{},
}

const commonReducer = createReducer(initialState, {

    [CommonAction.SET_MODAL_STATUS]:(state , action) => {
        state.modalStatus= action.payload
    },
});

export default commonReducer;
