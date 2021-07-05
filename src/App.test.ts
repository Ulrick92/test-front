
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
// import App from "./App";
// src/api/index.spec.ts
import apiJoovence from './conf/api.joovence';
import { AxiosResponse } from 'axios';
import { doctorsList } from './helpers/doctorsList';
import { Doctor } from "./models/doctor"

// jest.mock(...) is used to automatically mock the axios 
jest.mock('axios');

// Create an object of type of mocked Axios.
const mockedAxios = apiJoovence as jest.Mocked<typeof apiJoovence>;

describe('doctorsList()', () => {
  test('should return todo list', async () => {

    const setDoctors = (value: Doctor[]) => value;
    const setSpinner = (value: boolean) => value;

    //Our desired output
    const doctorTab: Doctor[] = [
      {
        id: "72713aef-70db-4d9f-bde6-75ed028ce9ac",
        name: "Dr. Philémon Fleury",
        address: {
          line1: "737 Simone de Vaugirard",
          line2: "Suite 825",
          postalCode: "95245",
          city: "Garanceberg",
          country: "PR"
        }
      },
      {
        id: "cc28a55a-879f-4855-9e96-5d78b91a0e5d",
        name: "Dr. Herbert Faure",
        address: {
          line1: "05057 Betty de la Bûcherie",
          line2: "Suite 624",
          postalCode: "25408",
          city: "Lake Arsinoé",
          country: "DZ"
        }
      }
    ];

    //Prepare the response we want to get from axios
    const mockedResponse: AxiosResponse = {
      data: doctorTab,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    // Make the mock return the custom axios response
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(apiJoovence.get).not.toHaveBeenCalled();
    const data = await doctorsList(setDoctors, setSpinner);
    expect(apiJoovence.get).toHaveBeenCalled();
    expect(data).toEqual(doctorTab);
  });
});
