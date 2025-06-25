import OrdersDataAccess from '../dataAccess/orders.js'
import {ok,serverError} from '../helpers/httpResponse.js'

export default class OrdersControllers {

    constructor() {
        this.dataAccess = new OrdersDataAccess()
    }

    async getOrders() {
        try {
            const orders = await this.dataAccess.getOrders()
            return ok(orders)
        } catch (error) {
            return serverError(error)
        }
    }

    async getOrdersByUserId(userId) {
        try {
            const orders = await this.dataAccess.getOrdersByUserId(userId)
            return ok(orders)
        } catch (error) {
            return serverError(error)
        }
    }

   

    async insertOrders(orderData) {
        try {
            const result = await this.dataAccess.insertOrder(orderData)
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async deleteOrders(orderId) {
        try {
            const result = await this.dataAccess.deleteOrders(orderId)
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async updateOrders(orderid, orderData) {
        try {
            const result = await this.dataAccess.updateOrders(orderid, orderData)
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

}