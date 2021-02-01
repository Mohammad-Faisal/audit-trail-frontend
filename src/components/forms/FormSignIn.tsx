import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FormBasicContainer} from "../common-components/layout/FormStyles";
import {FormInputText} from "./common/FormInputText";
import ButtonFormSubmit from "../buttons/ButtonFormSubmit";
import {useTranslation} from "react-i18next";
import useFormInputValidation from "./common/useFormInputValidation";
import * as Yup from 'yup'
import {selectRequesting} from "../../store/misc/requesting/RequestingSelector";
import {UserAction} from "../../store/user/UserAction";
import FormValidationConstants from "./common/FormValidationConstants";
import {SignInInputs, SignInRequest} from "../../store/user/request-models/SignInRequest";
import {AnyObjectSchema} from "yup";
import {selectFinished} from "../../store/misc/finished/FinishedSelector";


const INITIAL_STATE : SignInInputs = {
    email: '',
    password: ''
}

const VALIDATION_SCHEMA : AnyObjectSchema= Yup.object({
    email: FormValidationConstants.VALID_EMAIL,
    password: Yup.string().min(6, 'Minimum 6 Characters')
})


export const FormSignIn : FC = () => {

    const dispatch = useDispatch();
    const {t} = useTranslation();
    const { control, values } = useFormInputValidation(INITIAL_STATE, VALIDATION_SCHEMA)
    const isRequesting = useSelector(state => selectRequesting(state , [UserAction.SIGN_IN]))
    const isFinished = useSelector(state => selectFinished(state , [UserAction.SIGN_IN]))

    useEffect(() => {
        if(isFinished)control.resetData();
    },[isFinished])


    const onSubmit = () => dispatch(UserAction.signIn(new SignInRequest(values)))

    return  <FormBasicContainer>

        <FormInputText label={t('form_input_label.email')} control={control} name={'email'} />
        <FormInputText label={t('form_input_label.password')} control={control} name={'password'}/>

        <ButtonFormSubmit title={t('sign_in_title')} isRequesting={isRequesting} control={control} onSubmit={onSubmit}/>
    </FormBasicContainer>
}