import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSites} from "../../store/site/SiteSelector";
import {SiteAction} from "../../store/site/SiteAction";
import {Button, Table} from "antd";
import {ModalEditForm, Site} from "../modals/ModalEditForm";

export const SiteTable: FC = () => {

    const dispatch = useDispatch();
    const sites = useSelector(selectSites)


    useEffect(() => {
        dispatch(SiteAction.getSites())
    },[dispatch])

    useEffect(() => {
        console.log(sites)
    },[sites])


    const dataSource: Site[] = [
        {
            name: 'Mike',
            description: "32",
            region: '10 Downing Street',
        },
        {
            name: 'John',
            description: "42",
            region: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
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
            title: 'Edit',
            render: (text:string ,record : Site )=> <ModalEditForm siteData={record}/>
        },
    ];

    return <Table dataSource={dataSource} columns={columns} />;
}