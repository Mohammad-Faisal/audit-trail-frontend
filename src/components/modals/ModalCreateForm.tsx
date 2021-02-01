import {FC, useEffect, useState} from "react";
import {Button, Modal} from "antd";
import {FormSite, FormState} from "../forms/FormSite";
import {SiteAction} from "../../store/site/SiteAction";
import {useDispatch, useSelector} from "react-redux";
import {selectFinished} from "../../store/misc/finished/FinishedSelector";


export const ModalCreateForm:FC = () => {


    const dispatch = useDispatch();
    const [visibility  , setVisibility] = useState<boolean>(false);
    const isFinished = useSelector(state => selectFinished(state,[SiteAction.CREATE_SITE]))


    useEffect(() => {
        if(isFinished)setVisibility(false);
    },[isFinished])

    const showModal = () => {
        dispatch(SiteAction.clearSiteDataForEdit())
        setVisibility(true)
    }

    return <>
        <Button type={'dashed'} onClick={() => showModal()}>Create New Site</Button>

        <Modal
            visible={visibility}
            closable={true}
            footer={null}
        >
            <FormSite formState={FormState.CREATE}/>
        </Modal>
    </>
}