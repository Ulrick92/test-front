import {Availability} from "../models/doctor"
import apiJoovence, {availabilitiesMap} from "../conf/api.joovence"

export const availabilitiesList = (id:string, setAvailabilities:(value:Availability[])=> void) => {
    // Fetch availabilities list
    const getAvailabilities = async () => {
        try{
            const response = await apiJoovence.get(`availabilities?doctorId=${id}`);
            const availabilitiesList = await response.data.map(availabilitiesMap);
            setAvailabilities(availabilitiesList);
        }catch(error){
            console.log(error);
        }
    };
    getAvailabilities();
};
