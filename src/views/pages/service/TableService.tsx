import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';

import { ServiceAction } from '../../../store/service/ServiceAction';
import BaseRequest from '../../../store/utils/BaseRequest';
import { selectServices } from '../../../store/service/ServiceSelector';
import { selectLoggedInState } from '../../../store/user/UserSelector';
import { selectFinished } from '../../../store/misc/finished/FinishedSelector';

export const TableService: FC = () => {
    const dispatch = useDispatch();
    const tableData = useSelector(selectServices);
    const isSignedIn = useSelector(selectLoggedInState);

    const isFinishedCreate = useSelector((state) => selectFinished(state, [ServiceAction.CREATE_SERVICE]));
    const isFinishedUpdate = useSelector((state) => selectFinished(state, [ServiceAction.CREATE_SERVICE]));

    console.log(tableData);
    useEffect(() => {
        dispatch(ServiceAction.getServicesByProvider(new BaseRequest()));
    }, [dispatch, isSignedIn, isFinishedCreate, isFinishedUpdate]);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Hourly Rate',
            dataIndex: 'hourlyRate',
        },
        {
            title: 'Rating',
            dataIndex: 'averageRating',
        },
        {
            title: 'Preferred Hour',
            dataIndex: 'preferredHour',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        // {
        //     title: 'Edit',
        //     render: (text:string ,record  )=> <ModalEditForm siteData={record}/>
        // },
    ];

    return (
        <div style={{ margin: '20px' }}>
            <h3> Service Table</h3>
            <Table dataSource={tableData} columns={columns} />
        </div>
    );
};
