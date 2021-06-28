import {useState, useEffect} from "react"
import {Doctor} from "../models/doctor"
import {doctorsList} from "../helpers/doctorsList"

const useDoctors = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [spinner, setSpinner] = useState<boolean>(true);

    useEffect(()=>{
        doctorsList(setDoctors, setSpinner);
    },[]);
    return {
        doctors,
        spinner
    };
}

export default useDoctors