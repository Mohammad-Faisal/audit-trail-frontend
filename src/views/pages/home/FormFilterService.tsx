import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormBasicContainer } from '../../common-components/layout/FormStyles';
import { FormInputText } from '../../forms/common/FormInputText';
import ButtonFormSubmit from '../../buttons/ButtonFormSubmit';
import { useTranslation } from 'react-i18next';
import useFormInputValidation from '../../forms/common/useFormInputValidation';
import * as Yup from 'yup';
import { selectRequesting } from '../../../store/misc/requesting/RequestingSelector';
import FormValidationConstants from '../../forms/common/FormValidationConstants';
import { AnyObjectSchema } from 'yup';
import { selectFinished } from '../../../store/misc/finished/FinishedSelector';
import { FormInputRadio, RadioTypes } from '../../forms/common/FormInputRadio';
import { ServiceAction } from '../../../store/service/ServiceAction';
import { ServiceType } from '../../../constants/GeneralConstants';
import { FilterServiceInputs, GetFilteredServicesRequests } from '../../../store/service/requests/GetFilteredServicesRequests';
import { FormInputSlider } from '../../forms/common/FormInputSlider';

const INITIAL_STATE = {
    rateRange: [0, 99],
    ratingRange: [0, 5.0],
    type: ServiceType.OTHERS,
};

const VALIDATION_SCHEMA: AnyObjectSchema = Yup.object({
    type: FormValidationConstants.REQUIRED_AND_STRING_ONLY,
});

export const FormFilterService: FC = () => {
    const dispatch = useDispatch();

    const { control, values } = useFormInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);
    const isRequesting = useSelector((state) => selectRequesting(state, [ServiceAction.CREATE_SERVICE]));
    const isFinished = useSelector((state) => selectFinished(state, [ServiceAction.CREATE_SERVICE]));

    useEffect(() => {
        if (isFinished) control.resetData();
    }, [isFinished]);

    const onSubmit = () => {
        const newValues: FilterServiceInputs = {
            minRate: values.rateRange[0],
            maxRate: values.rateRange[1],
            minRating: values.ratingRange[0],
            maxRating: values.ratingRange[1],
            type: values.type,
        };
        dispatch(ServiceAction.getFilteredServices(new GetFilteredServicesRequests(newValues)));
    };

    return (
        <FormBasicContainer>
            <FormInputSlider control={control} label={'Rate'} name={'rateRange'} range={[0, 99]} step={1} />
            <FormInputSlider control={control} label={'Rating'} name={'ratingRange'} range={[0, 5.0]} step={0.1} />
            <FormInputRadio control={control} label={'Service Type'} name={'type'} type={RadioTypes.SERVICE_TYPE} />
            <ButtonFormSubmit title={'Get Services'} isRequesting={isRequesting} control={control} onSubmit={onSubmit} />
        </FormBasicContainer>
    );
};
