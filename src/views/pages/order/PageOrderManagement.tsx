import React from 'react';
import { OrdersTable } from './OrdersTable';

export const PageOrderManagement = () => {
    return (
        <div style={{ margin: '20px' }}>
            <h3> Order Management </h3>
            <OrdersTable />
        </div>
    );
};
