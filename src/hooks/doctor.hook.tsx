import { useState, useEffect } from "react"
import { Doctor } from "../models/doctor"
import { doctorsList } from "../helpers/doctorsList"

const useDoctors = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loader, setLoader] = useState<boolean>(true);

    const doctorsListTab = async () => {
        const result = await doctorsList()
        setDoctors(result)
        setLoader(false)
    }

    useEffect(() => {
        doctorsListTab()
    }, []);
    return {
        doctors,
        loader
    };
}

export default useDoctors