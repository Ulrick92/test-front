import { Booking } from "../models/doctor"
import apiJoovence from "../conf/api.joovence"

export const booking = async (date: Date, doctorId: string): Promise<Booking> => {
    try {
        const response = await apiJoovence.post("bookings", {
            date,
            doctorId
        });
        return await response.data;
    } catch (error) {
        console.log(error);
        return {
            id: "",
            doctorId: "",
            date: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    }
}