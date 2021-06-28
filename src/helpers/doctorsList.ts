import {Doctor} from "../models/doctor"
import apiJoovence, {doctorMap} from "../conf/api.joovence"

// fetch data doctors list
export const doctorsList = (setDoctors:(value:Doctor[])=>void, setSpinner:(value:boolean)=>void) => {
    const getDoctors = async () => {
        try{
            const response = await apiJoovence.get("doctors");
            const  doctorsList  = await response.data.map(doctorMap);
            setDoctors(doctorsList);
        }
        catch (error){
            console.log(error);
        }finally{
            setSpinner(false);
        }
    };
    getDoctors();
}