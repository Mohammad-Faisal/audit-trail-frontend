import React from 'react';
import { useDispatch } from 'react-redux';
import { OrderAction } from '../../../store/order/OrderAction';
import { PlaceOrderRequest } from '../../../store/order/requests/PlaceOrderRequest';
export const IndividualService = ({ service }: any) => {
    const dispatch = useDispatch();
    const orderService = () => {
        dispatch(OrderAction.placeOrder(new PlaceOrderRequest(service.id)));
    };

    return (
        <div style={{ border: '1px solid', height: '200px', width: '150px' }}>
            <div>{service.name} </div>
            <div>{service.description} </div>
            <div>Rate {service.hourlyRate} </div>
            <div>{service.preferredHour} </div>
            <button onClick={orderService}> Order Service </button>
        </div>
    );
};
