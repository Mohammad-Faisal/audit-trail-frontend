import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Table } from 'antd';
import { selectLoggedInUserType } from '../../../store/user/UserSelector';
import { selectFinished } from '../../../store/misc/finished/FinishedSelector';
import { OrderAction } from '../../../store/order/OrderAction';
import { GetOrdersRequest } from '../../../store/order/requests/GetOrdersRequest';
import { selectOrders } from '../../../store/order/OrderSelector';
import { OrderStatus } from '../../../constants/GeneralConstants';
import { ChangeOrderStatusRequest } from '../../../store/order/requests/ChangeOrderStatusRequest';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { ModalReviewOrder } from './ModalReviewOrder';

const { confirm } = Modal;

export const OrdersTable: FC = () => {
    const tableData = useSelector(selectOrders);
    const userType = useSelector(selectLoggedInUserType);
    const dispatch = useDispatch();

    const isFinishedUpdate = useSelector((state) => selectFinished(state, [OrderAction.CHANGE_ORDER_STATUS]));
    const isFinishedReview = useSelector((state) => selectFinished(state, [OrderAction.GIVE_REVIEW]));

    useEffect(() => {
        dispatch(OrderAction.getOrders(new GetOrdersRequest(userType)));
    }, [isFinishedUpdate, isFinishedReview]);

    const changeOrderStatus = (orderId, newStatus: OrderStatus) => {
        let confirmText = '';
        let content = '';
        if (newStatus === OrderStatus.ACCEPTED) {
            confirmText = 'Are you sure to accept this order?';
            content = 'After you accept this order the next step will be done by the user';
        } else if (newStatus === OrderStatus.REJECTED) {
            confirmText = 'Are you sure to reject this order?';
            content = "After you reject this order you can't change it's status anymore";
        } else if (newStatus === OrderStatus.RUNNING) {
            confirmText = 'Are you sure to start this order?';
            content = "Once you start only the service provider can change it's status";
        } else if (newStatus === OrderStatus.COMPLETED) {
            confirmText = 'Are you sure to complete this order?';
            content = 'After you complete the order the user needs to verify this';
        } else if (newStatus === OrderStatus.FINISHED) {
            confirmText = 'Are you happy with this order?';
            content = 'If you are happy then provide a review';
        } else if (newStatus === OrderStatus.UNFINISHED) {
            confirmText = 'Is something wrong with the order?';
            content = 'If something went wrong then give a review';
        }
        confirm({
            title: confirmText,
            icon: <ExclamationCircleOutlined />,
            content,
            okText: 'Yes',
            cancelText: 'No',
            onOk: () => dispatch(OrderAction.changeOrderStatus(new ChangeOrderStatusRequest(orderId, newStatus))),
        });
    };

    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'orderId',
        },
        {
            title: 'Service Name',
            dataIndex: 'serviceName',
        },
        {
            title: 'Ordered By',
            dataIndex: 'orderFrom',
        },
        {
            title: 'Service Provider',
            dataIndex: 'orderTo',
        },
        {
            title: 'Order Date',
            dataIndex: 'orderDate',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Review',
            dataIndex: 'review',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
        },
        {
            title: '',
        },
        {
            title: 'Accept',
            render: (text: string, record) => <Button onClick={() => changeOrderStatus(record.orderId, OrderStatus.ACCEPTED)}> Accept </Button>,
        },
        {
            title: 'Reject',
            render: (text: string, record) => <Button onClick={() => changeOrderStatus(record.orderId, OrderStatus.REJECTED)}> Reject </Button>,
        },
        {
            title: 'Action',
            render: (text: string, record) => <Button onClick={() => changeOrderStatus(record.orderId, OrderStatus.RUNNING)}> Start Order </Button>,
        },
        {
            title: 'Action',
            render: (text: string, record) => (
                <Button onClick={() => changeOrderStatus(record.orderId, OrderStatus.RUNNING)}> Complete Order </Button>
            ),
        },
        {
            title: 'Action',
            render: (text: string, record) => (
                <Button onClick={() => changeOrderStatus(record.orderId, OrderStatus.FINISHED)}> Verify Service </Button>
            ),
        },
        {
            title: 'Action',
            render: (text: string, record) => (
                <Button onClick={() => changeOrderStatus(record.orderId, OrderStatus.UNFINISHED)}> Reject Service </Button>
            ),
        },
        {
            title: 'Action',
            render: (text: string, record) => <ModalReviewOrder orderId={record.orderId} />,
        },
    ];

    return (
        <div style={{ margin: '20px' }}>
            <h3> Order Table</h3>
            <Table dataSource={tableData} columns={columns} />
        </div>
    );
};
