import React, {useEffect} from 'react'
import {Modal} from 'antd'
import {useSelector} from 'react-redux'
import {selectModalNotification} from "../../../store/misc/common/CommonSelector";
import {INotification, NotificationType} from "../../../store/misc/common/general-models/NotificationType";


export const ModalMessage = () => {

    const modalNotification: INotification | null = useSelector(selectModalNotification)

    useEffect(() => {
        if(modalNotification.type === NotificationType.SUCCESS){
            Modal.success({title: modalNotification.message})
        }
    },[modalNotification])

    return <div></div>


}
