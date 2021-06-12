import {ApiEndpoints} from "../../constants/ApiEndpoints";
import BaseRequest from "../utils/BaseRequest";
import EffectUtility from "../utils/EffectUtility";
import ServerGeneralizedResponse from "../utils/ServerGeneralizedResponse";
import {PlaceOrderRequest} from "./requests/PlaceOrderRequest";
import {GetOrdersRequest} from "./requests/GetOrdersRequest";
import {ChangeOrderStatusRequest} from "./requests/ChangeOrderStatusRequest";
import {GiveReviewRequest} from "./requests/GiveReviewRequest";


export class OrderEffect {

    static placeOrder = async (data: PlaceOrderRequest) => {
        const endPoint = ApiEndpoints.order.placeOrder
        return await EffectUtility._postToModel(ServerGeneralizedResponse, endPoint, new BaseRequest(data))
    }

    static getOrders = async (data: GetOrdersRequest) => {
        const endPoint = ApiEndpoints.order.getOrders
        return await EffectUtility._postToModel(ServerGeneralizedResponse, endPoint, new BaseRequest(data))
    }

    static changeOrderStatus = async (data: ChangeOrderStatusRequest) => {
        const endPoint = ApiEndpoints.order.changeStatus
        return await EffectUtility._postToModel(ServerGeneralizedResponse, endPoint, new BaseRequest(data))
    }

    static giveReview = async (data: GiveReviewRequest) => {
        const endPoint = ApiEndpoints.order.giveReview
        return await EffectUtility._postToModel(ServerGeneralizedResponse, endPoint, new BaseRequest(data))
    }

}