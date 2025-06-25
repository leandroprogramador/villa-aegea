import { Mongo } from "../database/mongo.js"
import { ObjectId } from "mongodb"

const collectionName = 'plates'

export default class PlatesDataAccess {
    async getPlates() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({})
            .toArray()

        return result
    }

     async getAvailablePlates() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({available:true})
            .toArray()

        return result
    }

    async insertPlate(plateData) {
        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(plateData)

        return result
    }

    async deletePlates(plateId) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndDelete({ _id: new ObjectId(plateId) })
            .toArray

        return result
    }

    async updatePlates(plateId, plateData) {
        try {
            const result = await Mongo.db
                .collection(collectionName)
                .findOneAndUpdate(
                    { _id: new ObjectId(plateId) },
                    { $set: plateData }
                )
                .toArray
            return result


        } catch (error) { console.log(error) }

    }
}