import { Availability } from "../models/doctor"
import apiJoovence from "../conf/api.joovence"

export const availabilitiesList = async (id: string): Promise<Availability[]> => {
    // Fetch availabilities list
    try {
        const response = await apiJoovence.get(`availabilities?doctorId=${id}`);
        return await response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};
