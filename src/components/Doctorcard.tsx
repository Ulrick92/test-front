import {useState, useEffect, FunctionComponent} from "react";
import {Doctor, Availability} from "../models/doctor";
import {Availabilitydate} from "../components";
import { Profile, Profilename, Address, Wrapbutton, Card } from "../css/element";
import {availabilitiesList} from "../helpers/availabilitiesList"

interface Props {
    doctor: Doctor,
}

const Doctorcard: FunctionComponent<Props> = ({doctor}) => {

    // Destructuring doctor object
    const {id, name, address:{ line1, line2, postalCode, city}} = doctor;
    
    // Availabilities List
    const [availabilities, setAvailabilities] = useState<Availability[]>([]);

    useEffect(() => {
        availabilitiesList(id, setAvailabilities);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    // Loop availabilities list
    const AvailabilitiesList = availabilities.map((a,i) => (
        <Availabilitydate key={i} availability={a} doctor={doctor}/>
      ));

    return<>
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
                {AvailabilitiesList}
            </Wrapbutton>
        </Card>
    </>
}

export default Doctorcard;