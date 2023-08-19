import React from 'react';
import {EventTable} from "./eventTable/EventTable";
import {Heading} from "../../../components/heading/Heading";


export const EventList = () => {
    return (
        <div>
            <Heading text={'События'}/>
            <EventTable/>
        </div>
    );
};

