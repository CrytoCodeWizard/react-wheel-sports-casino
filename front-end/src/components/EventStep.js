import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { EVENTS_API } from '../utils/api';

const EventStep = ({
    selectedGroup,
    selectedTeam,
    onSelectEvent,
    onHandleNext
}) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (selectedTeam) {
            axios.get(`${EVENTS_API}?team_red=${selectedTeam.name}`)
               .then(res => {
                    setEvents(res.data);
                })
               .catch(err => {
                    console.log(err);
                });

            axios.get(`${EVENTS_API}?team_black=${selectedTeam.name}`)
                .then(res => {
                     setEvents(events => (
                        [...events, ...res.data]
                     ));
                 })
                .catch(err => {
                     console.log(err);
                 });
        }
    }, [selectedTeam]);

    const handleSelectEvent = event => {
        onHandleNext();
        onSelectEvent(event);
    }

    return (
      <div>
        <h1>
            { selectedTeam.name }
        </h1>
        {
            events.length > 0?
                events.map(event => (
                    <button key={event.id} onClick={() => handleSelectEvent(event)}>
                        { event.name }
                    </button>
                 )) : <p> There are no Upcoming Events. </p>
        }
      </div>
    )
}

export default EventStep;