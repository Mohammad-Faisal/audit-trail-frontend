import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSites} from "../../store/site/SiteSelector";
import {SiteAction} from "../../store/site/SiteAction";
import {Button, Table} from "antd";
import {ModalEditForm, Site} from "../modals/ModalEditForm";
import {GetSitesRequest} from "../../store/site/request-models/GetSitesRequest";

export const SiteTable: FC = () => {

    const dispatch = useDispatch();
    const tableData = useSelector(selectSites)


    useEffect(() => {
        dispatch(SiteAction.getSites(new GetSitesRequest()))
    },[dispatch])

    useEffect(() => {
        console.log(tableData)
    },[tableData])


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            //key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Region',
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: 'Latitude',
            dataIndex: 'lat',
            key: 'lat',
        },
        {
            title: 'Longitude',
            dataIndex: 'lng',
            key: 'lng',
        },
        {
            title: 'Edit',
            render: (text:string ,record : Site )=> <ModalEditForm siteData={record}/>
        },
    ];

    return <Table dataSource={tableData} columns={columns} />;
}