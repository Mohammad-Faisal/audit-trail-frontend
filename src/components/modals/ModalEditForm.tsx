import {FC, useEffect, useState} from "react";
import {Button, Modal} from "antd";
import {FormSite, FormState} from "../forms/FormSite";
import {SiteAction} from "../../store/site/SiteAction";
import {useDispatch, useSelector} from "react-redux";
import {AuditLogTable} from "../tables/AuditLogTable";
import {selectFinished} from "../../store/misc/finished/FinishedSelector";


export type Site = {
    name: string,
    description: string ,
    region: string,
    changes:[]
}

interface Props {
    siteData: Site;
}

export const ModalEditForm:FC<Props> = ({siteData}: Props) => {


    const dispatch = useDispatch();
    const [visibility  , setVisibility] = useState<boolean>(false);
    const isFinished = useSelector(state => selectFinished(state,[SiteAction.UPDATE_SITE]))

    useEffect(() => {
        if(isFinished)setVisibility(false);
    },[isFinished])


    const showModal = () => {
        dispatch(SiteAction.setSiteDataForEdit(siteData))
        setVisibility(true)
    }

    return <>
        <Button onClick={() => showModal()}>Edit</Button>

        <Modal
            visible={visibility}
            closable={true}
            maskClosable={true}
            footer={null}
        >
            <FormSite formState={FormState.UPDATE}/>
            <h2>Audit Log</h2>
            <AuditLogTable tableData={siteData.changes} />
        </Modal>
    </>
}