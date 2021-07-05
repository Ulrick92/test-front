import { FunctionComponent } from "react";
import { Doctor } from "../models/doctor";
import { Availabilitydate } from "../components";
import { Profile, Profilename, Address, Wrapbutton, Card } from "../css/element";
import { useAvailabilities } from "../hooks";

interface Props {
    doctor: Doctor,
}

const Doctorcard: FunctionComponent<Props> = ({ doctor }) => {

    // Destructuring doctor object
    const { id, name, address: { line1, line2, postalCode, city } } = doctor;

    const availabilities = useAvailabilities(id);

    // Loop availabilities list
    const availabilitiesList = availabilities.map((a) => (
        <Availabilitydate key={`${a.start}`} availability={a} doctor={doctor} />
    ));

    return (
        <Card>
            <Profile>
                <i className="fas fa-user-alt"></i>
            </Profile>
            <Profilename>{name}</Profilename>
            <Address>
                <div><i className="fas fa-map-marker-alt"></i> {line1} ({line2})</div>
                <div><i className="fas fa-building"></i> {postalCode} {city}</div>
            </Address>
            <Wrapbutton>
                {availabilitiesList}
            </Wrapbutton>
        </Card>
    )
}

export default Doctorcard;