import { Mongo } from "../database/mongo.js"
import { ObjectId } from "mongodb"
import crypto from 'crypto'
import passport from "passport"

const collectionName = 'users'

export default class UsersDataAccess {
    async getUsers() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({})
            .toArray()

        return result
    }

    async deleteUsers(userId) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndDelete({ _id: new ObjectId(userId) })
            .toArray

        return result
    }

    async updateUsers(userId, userData) {
        try {
            if (userData.password) {

                const salt = crypto.randomBytes(16)
                crypto.pbkdf2(userData.password, salt, 310000, 16, 'sha256', async (error, hashedPassword) => {
                    if (error) {
                        throw new Error('Error during hashing password')
                    }

                    userData = { ...userData, password: hashedPassword, salt: salt }
                    const result = await Mongo.db
                        .collection(collectionName)
                        .findOneAndUpdate(
                            { _id: new ObjectId(userId) },
                            { $set: userData }
                        )
                        .toArray
                    return result
                })

            }

            else {
                const result = await Mongo.db
                    .collection(collectionName)
                    .findOneAndUpdate(
                        { _id: new ObjectId(userId) },
                        { $set: userData }
                    )
                    .toArray
                return result
            }

        } catch (error) { console.log(error) }

    }
}