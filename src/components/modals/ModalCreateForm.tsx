import {FC, useState} from "react";
import {Button, Modal} from "antd";
import {FormEditSites, FormState} from "../forms/FormSite";
import {SiteAction} from "../../store/site/SiteAction";
import {useDispatch} from "react-redux";


export const ModalCreateForm:FC = () => {


    const dispatch = useDispatch();
    const [visibility  , setVisibility] = useState<boolean>(false);

    const showModal = () => {
        dispatch(SiteAction.clearSiteData())
        setVisibility(true)
    }

    return <>
        <Button onClick={() => showModal()}>Create New Site</Button>

        <Modal
            visible={visibility}
            onOk={() => setVisibility(false)}
            onCancel={() => setVisibility(false)}
        >
            <FormEditSites formState={FormState.CREATE}/>
        </Modal>
    </>
}