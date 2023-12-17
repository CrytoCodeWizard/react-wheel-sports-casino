import React, { useState, useEffect } from 'react';
import axios from "axios";
import { GROUPS_API } from "../utils/api";

const GroupStep = ({ onSelectGroup, onHandleNext }) => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        axios.get(GROUPS_API)
           .then(res => {
                setGroups(res.data);
            })
           .catch(err => {
                console.log(err);
            });
    }, []);

    const handelSelectGroup = group => {
        onHandleNext();
        onSelectGroup(group);
    }
    return (
      <div>
        <h2>
            Select a Group
        </h2>
        {
            groups.map(group => (
                <img
                    key={group.id}
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
                     onClick={() => handelSelectGroup(group)}
                    src={group.image}
                    alt='groupImage'/>
            ))
        }
      </div>
    );
}

export default GroupStep;
