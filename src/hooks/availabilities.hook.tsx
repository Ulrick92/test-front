import { useState, useEffect } from "react"
import { Availability } from "../models/doctor"
import { availabilitiesList } from "../helpers/availabilitiesList"

const useAvailabilities = (id: string) => {
    const [availabilities, setAvailabilities] = useState<Availability[]>([]);

    const availabilitiesListTab = async () => {
        const result = await availabilitiesList(id);
        setAvailabilities(result);
    }

    useEffect(() => {
        availabilitiesListTab()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return availabilities
}

export default useAvailabilities