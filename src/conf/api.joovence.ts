import axios from "axios";
import {Doctor, Availability} from "../models/doctor"

// Instance of axios
const apiJoovence = axios.create({
  baseURL: "https://tech-test.joovence.dev/api/",
});

export default apiJoovence;

// Loop to display all doctors
export const doctorMap = (d:Doctor) => ({
  id: d.id,
  name: d.name,
  address: {
    line1: d.address.line1,
    line2: d.address.line2,
    postalCode: d.address.postalCode,
    city: d.address.city,
    country: d.address.country,
  },
});

// Loop to display all availabilities
export const availabilitiesMap = (a:Availability) => ({
  start:a.start
});
