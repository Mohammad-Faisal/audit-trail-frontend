import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSiteDataForEdit} from "../../store/site/SiteSelector";
import {SiteAction} from "../../store/site/SiteAction";
import {AnyObjectSchema} from "yup";
import * as Yup from "yup";
import FormValidationConstants from "./common/FormValidationConstants";
import {CreateOrUpdateSiteRequest, SiteInputs} from "../../store/site/request-models/CreateOrUpdateSiteRequest";
import useFormInputValidation from "./common/useFormInputValidation";
import {FormInputText} from "./common/FormInputText";
import ButtonFormSubmit from "../buttons/ButtonFormSubmit";
import {FormBasicContainer} from "../common-components/layout/FormStyles";
import {useTranslation} from "react-i18next";
import {selectRequesting} from "../../store/misc/requesting/RequestingSelector";
import {selectFinished} from "../../store/misc/finished/FinishedSelector";

export enum FormState {
    CREATE,
    UPDATE
}

const INITIAL_STATE : SiteInputs = {
    name: '',
    description: '',
    region: '',
    lat: '',
    lng: '',
}

const VALIDATION_SCHEMA : AnyObjectSchema= Yup.object({
    name: FormValidationConstants.REQUIRED_AND_STRING_ONLY,
    lat: FormValidationConstants.REQUIRED_AND_DIGIT_ONLY,
    lng: FormValidationConstants.REQUIRED_AND_DIGIT_ONLY,
})

interface Props {
    formState: FormState;
}

export const FormEditSites : FC<Props> = ({formState}) => {

    const {t} = useTranslation();
    const { control, values  } = useFormInputValidation(INITIAL_STATE, VALIDATION_SCHEMA)
    const isRequesting = useSelector(state => selectRequesting(state , [SiteAction.CREATE_SITE]))

    const dispatch = useDispatch();

    const siteData = useSelector(selectSiteDataForEdit)


    const onSubmit = () => {
        if(formState === FormState.UPDATE)dispatch(SiteAction.updateSite(new CreateOrUpdateSiteRequest(values)))
        if(formState === FormState.CREATE)dispatch(SiteAction.createSite(new CreateOrUpdateSiteRequest(values)))
    }

    useEffect(() => {
        control.setAllValues(siteData)
    },[siteData])


    return  <FormBasicContainer>
        {formState === FormState.UPDATE && <h2> Site ID: {siteData.id}</h2>}
        {formState === FormState.CREATE && <h2> Create New Site </h2>}
        <FormInputText label={t('form_input_label.name')} control={control} name={'name'} />
        <FormInputText label={t('form_input_label.description')} control={control} name={'description'}/>
        <FormInputText label={t('form_input_label.region')} control={control} name={'region'}/>
        <FormInputText label={t('form_input_label.lat')} control={control} name={'lat'}/>
        <FormInputText label={t('form_input_label.lng')} control={control} name={'lng'}/>
        <ButtonFormSubmit title={t('form_submit.submit')} isRequesting={isRequesting} control={control} onSubmit={onSubmit}/>
    </FormBasicContainer>
}