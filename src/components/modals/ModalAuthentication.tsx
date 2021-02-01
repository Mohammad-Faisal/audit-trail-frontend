import {FC, useState} from "react";
import { Modal, Radio, RadioChangeEvent} from "antd";
import { useSelector} from "react-redux";
import {selectLoggedInState} from "../../store/user/UserSelector";
import {FormSignIn} from "../forms/FormSignIn";
import {useTranslation} from "react-i18next";
import {FormSignUp} from "../forms/FormSignUp";

enum PageState {
    SIGN_IN,
    SIGN_UP
}

export const ModalAuthentication:FC = () => {

    const {t} = useTranslation();
    const [pageState , setPageState] = useState<PageState>(PageState.SIGN_UP)
    const isSignedIn = useSelector(selectLoggedInState)


    const changePageState = (e:RadioChangeEvent)=> setPageState(e.target.value);

    return <>
        <Modal
            closable={false}
            visible={!isSignedIn}
            footer={null}
        >

            <Radio.Group onChange={changePageState} defaultValue={PageState.SIGN_UP} buttonStyle="solid">
                <Radio.Button value={PageState.SIGN_UP}>{t('sign_up_title')}</Radio.Button>
                <Radio.Button value={PageState.SIGN_IN}>{t('sign_in_title')}</Radio.Button>
            </Radio.Group>

            {pageState === PageState.SIGN_IN && <FormSignIn />}
            {pageState === PageState.SIGN_UP && <FormSignUp />}
        </Modal>
    </>
}