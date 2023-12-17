import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { GROUPS_API } from '../utils/api';

const TeamStep = ({
    selectedGroup,
    onSelectTeam,
    onHandleNext
    }) => {
    // const [teams, setTeams] = useState([]);

    // useEffect(() => {
    //     if (selectedGroup) {
    //         axios.get(`${GROUPS_API} / ${selectedGroup.id}`)
    //            .then(res => {
    //                 setTeams(res.data);
    //             })
    //            .catch(err => {
    //                 console.log(err);
    //             });
    //     }
    // }, [selectedGroup]);

    const handleSelectTeam = (team) => {
        onHandleNext();
        onSelectTeam(team);
    }

    return (
      <div>
        <h1>
            { selectedGroup.name }
        </h1>
        {
            selectedGroup.teams.map(team => (
                <img
                    style={{
                        width: '100px',
                        height: '100px',
                        padding: '10px',
                        borderRadius: '50%',
                        border: '1px solid #000',
                        marginRight: '10px',
                        cursor: 'pointer',
                        backgroundColor: 'black',
                     }}
                    key={team.id}
                    src={team.image}
                    onClick={() => handleSelectTeam(team)}
                    alt='teamImage'/>
            ))
        }
      </div>
    )
}

export default TeamStep;