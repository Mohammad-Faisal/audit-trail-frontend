import React, { useEffect} from 'react'
import { Modal } from 'antd'
import { useSelector} from 'react-redux'


export default function  ModalMessage () {

    const modalStatus = useSelector(state => state.common.modalStatus)


    useEffect(() => {
        if(modalStatus.status === true){
            Modal.success({
                title: modalStatus.message
            })
        }
    },[modalStatus])

    return <div></div>


}
