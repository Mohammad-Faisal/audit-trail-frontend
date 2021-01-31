import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FormBasicContainer} from "./common/FormStyles";
import {FormInputText} from "./common/FormInputText";
import ButtonFormSubmit from "../buttons/ButtonFormSubmit";
import {useTranslation} from "react-i18next";
import useFormInputValidation from "./common/useFormInputValidation";
import * as Yup from 'yup'
import {selectRequesting} from "../../store/misc/requesting/RequestingSelector";
import {UserAction} from "../../store/user/UserAction";
import FormValidationConstants from "./common/FormValidationConstants";
import {AnyObjectSchema} from "yup";
import {SignUpInput, SignUpRequest} from "../../store/user/request-models/SignUpRequest";


const INITIAL_STATE : SignUpInput = {
    name: '',
    email: '',
    password: ''
}

const VALIDATION_SCHEMA : AnyObjectSchema= Yup.object({
    name: FormValidationConstants.REQUIRED_AND_STRING_ONLY,
    email: FormValidationConstants.VALID_EMAIL,
    password: Yup.string().min(6, 'Minimum 6 Characters')
})


export const FormSignUp : FC = () => {

    const dispatch = useDispatch();
    const {t} = useTranslation();
    const { control, values } = useFormInputValidation(INITIAL_STATE, VALIDATION_SCHEMA)
    const isRequesting = useSelector(state => selectRequesting(state , [UserAction.SIGN_UP]))


    const onSubmit = () => {
        dispatch(UserAction.signUp(new SignUpRequest(values)))
    }

    return  <FormBasicContainer>
        <FormInputText label={t('form_input_label.name')} control={control} name={'name'} />
        <FormInputText label={t('form_input_label.email')} control={control} name={'email'} />
        <FormInputText label={t('form_input_label.password')} control={control} name={'password'}/>
        <ButtonFormSubmit title={t('sign_up_title')} isRequesting={isRequesting} control={control} onSubmit={onSubmit}/>
    </FormBasicContainer>
}