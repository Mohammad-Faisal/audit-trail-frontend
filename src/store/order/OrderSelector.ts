import { RootState } from '../index';

export const selectOrders = (state: RootState) => {
    const orders = state.order.orders;

    return orders.map((singleOrder) => {
        return {
            orderId: singleOrder.id,
            serviceName: singleOrder.service.name,
            orderFrom: singleOrder.orderFrom.name,
            orderTo: singleOrder.orderTo.name,
            orderDate: singleOrder.createdDate,
            status: singleOrder.status,
            review: singleOrder.review,
            rating: singleOrder.rating,
        };
    });
};
