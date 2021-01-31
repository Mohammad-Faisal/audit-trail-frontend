import {FC, useState} from "react";
import {Button, Modal} from "antd";
import {FormEditSites} from "../forms/FormEditSite";
import {SiteAction} from "../../store/site/SiteAction";
import {useDispatch} from "react-redux";



export type Site = {
    name: string,
    description: string ,
    region: string
}

interface Props {
    siteData: Site;
}

export const ModalEditForm:FC<Props> = ({siteData}: Props) => {


    const dispatch = useDispatch();
    const [visibility  , setVisibility] = useState<boolean>(false);

    const showModal = () => {
        dispatch(SiteAction.setSiteDataForEdit(siteData))
        setVisibility(true)
    }


    return <>
        <Button onClick={() => showModal()}>
        Edit
    </Button>

    <Modal
        visible={visibility}
        onOk={() => setVisibility(false)}
        onCancel={() => setVisibility(false)}
    >
        <FormEditSites />
    </Modal>
    </>
}