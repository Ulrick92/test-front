// import React, { useState } from "react";
import { FunctionComponent } from "react";
import { Header } from "../components";
import { useLocation } from "react-router-dom";
import { WrapBooking, Bookingcard, Titlebooking, Address } from "../css/element"
import { formatDateCard, formatHour } from "../helpers/formatDate"

const Bookings: FunctionComponent = () => {

    const location = useLocation();

    // Destructuring state object of location object
    const { doctor: { name, address: { line1, line2, postalCode, city, country } }, start } = location.state as any;

    return <>
        <Header />
        <WrapBooking>
            <Bookingcard>
                <Titlebooking>
                    <div>Vous avez rendez-vous avec</div>
                    <div>le <span>{name}</span> le <span>{formatDateCard(start, "long", "long")}</span> à <span>{formatHour(start)}</span></div>
                </Titlebooking>
                <div className="adress-block">
                    <strong>À l'adresse suivante :</strong>
                    <Address>
                        <div><i className="fas fa-map-marker-alt"></i> {line1} ({line2})</div>
                        <div><i className="fas fa-building"></i> {postalCode} {city} <i className="fas fa-globe-europe"></i> {country}</div>
                    </Address>
                </div>
            </Bookingcard>
        </WrapBooking>
    </>;
}

export default Bookings;