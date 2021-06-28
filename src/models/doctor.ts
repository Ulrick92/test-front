// Doctor Model
export interface Doctor {
    id: string,
    name: string,
    address: {
        line1: string,
        line2: string,
        postalCode: string,
        city: string,
        country: string
    }
}

// Availabilitie model
export interface Availability {
    start: Date
}

// Booking model
export interface Booking {
    id: string,
    doctorId: string,
    date: Date,
    createdAt: Date,
    updatedAt: Date,
    doctor? : Doctor,
}