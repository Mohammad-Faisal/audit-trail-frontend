import BaseRequest from '../../utils/BaseRequest';
import { OrderStatus, UserType } from '../../../constants/GeneralConstants';

export class GetOrdersRequest extends BaseRequest {
    status: OrderStatus | null = null;
    orderOf: UserType = UserType.SERVICE_PROVIDER;

    constructor(orderOf: UserType, status?: OrderStatus) {
        super();
        this.orderOf = orderOf;
        if (status) this.status = status;
    }
}
