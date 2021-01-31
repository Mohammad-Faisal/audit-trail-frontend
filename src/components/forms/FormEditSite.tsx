import React, {FC, useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {selectSiteDataForEdit} from "../../store/site/SiteSelector";
import {SiteAction} from "../../store/site/SiteAction";

type Inputs ={
    name: string,
    description: string,
    region: string,
}


export const FormEditSites : FC = () => {
    const { register, handleSubmit, watch,setValue, errors } = useForm<Inputs>();


    const dispatch = useDispatch();

    const siteData = useSelector(selectSiteDataForEdit)

    const onSubmit = (data: Inputs) => {
        dispatch(SiteAction.setSiteDataForEdit(data))
    }


    useEffect(() => {
        // @ts-ignore
        const {name , description , region} = siteData
        setValue('name' , name)
        setValue('description' , description)
        setValue('region' , region)
    },[siteData])

    return  <form style={{display:"grid" , gridTemplateRows:"1fr" , gridRowGap:"10px" ,justifyItems:"start", margin:"40px"}} onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        <h2> Site Data</h2>
        <input name="name"  defaultValue="Name of the Site" ref={register({ required: true })} />
        {errors.name && <span>This field is required</span>}
        {/* include validation with required or other standard HTML validation rules */}
        <label> Description</label>
        <input name="description" ref={register()} />
        <label> Region</label>
        <input name="region" ref={register()} />
        <label> Latitude</label>
        <input name="latitude" ref={register()} />
        <label> Longitude</label>
        <input name="longitude" ref={register()} />
        {/* errors will return when field validation fails  */}

        <input type="submit" />
    </form>
}