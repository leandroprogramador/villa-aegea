import PlatesDataAccess from '../dataAccess/plates.js'
import {ok,serverError} from '../helpers/httpResponse.js'

export default class PlatesControllers {

    constructor() {
        this.dataAccess = new PlatesDataAccess()
    }

    async getPlates() {
        try {
            const plates = await this.dataAccess.getPlates()
            return ok(plates)
        } catch (error) {
            return serverError(error)
        }
    }

     async getAvailablePlates() {
        try {
            const plates = await this.dataAccess.getAvailablePlates()
            return ok(plates)
        } catch (error) {
            return serverError(error)
        }
    }

    async insertPlates(plateData) {
        try {
            const result = await this.dataAccess.insertPlate(plateData)
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async deletePlates(plateId) {
        try {
            const result = await this.dataAccess.deletePlates(plateId)
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async updatePlates(plateid, plateData) {
        try {
            const result = await this.dataAccess.updatePlates(plateid, plateData)
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

}