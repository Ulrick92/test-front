import {Booking} from "../models/doctor"
import apiJoovence from "../conf/api.joovence"

export const booking = (date:Date, doctorId:string, setAction:(value:Booking) => void) => {
    const postBooking = async () => {
        try{
            const response = await apiJoovence.post("bookings", {
                date,
                doctorId
              });
            const result = await response.data;
            setAction(result);
        }catch(error){
            console.log(error);
        }
    };
    postBooking();
}