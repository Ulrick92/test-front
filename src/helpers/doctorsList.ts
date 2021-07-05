import { Doctor } from "../models/doctor"
import apiJoovence from "../conf/api.joovence"

// fetch data doctors list
export const doctorsList = async (): Promise<Doctor[]> => {
    try {
        const response = await apiJoovence.get("doctors");
        return await response.data;
    }
    catch (error) {
        console.log(error);
        return []
    }
}