import {FunctionComponent} from "react";
import {Availability, Doctor} from "../models/doctor";
import {formatDateCard, formatHour} from "../helpers/formatDate"
import {Button} from "../css/element"
import { useHistory } from "react-router-dom";

interface Props {
    availability: Availability,
    doctor: Doctor,
}

const Availabilitydate: FunctionComponent<Props> = ({availability, doctor}) => {
    
    let history = useHistory();
   
    // Destructuring availability object
    const {start} = availability;

    return<>
        <Button onClick={() => history.push({pathname:"/bookings", state:{doctor,start}})}>{formatDateCard(start)}<br/>{formatHour(start)}</Button>
    </>
}

export default Availabilitydate;