import React from 'react';
import { useEffect, useState } from 'react';
import HireDetails from '../HireDetails/HireDetails';
import Person from '../Person/Person';
import './Employee.css';

const Employee = () => {

    const [persons, setPersons] = useState([]);
    const [hire, setHire] = useState([]);

    // Fetch data from Information.JSON

    useEffect(() => {
        fetch('./Informations.JSON')
            .then(res => res.json())
            .then(data => setPersons(data))

    }, []);
    // console.log(persons);

    /* set data for handleHire */
    const handleHire = (person) => {

        if (!hire.includes(person)) {
            const newHire = [...hire, person]
            setHire(newHire);
        }
    }
    console.log(hire);


    return (
        <div className="container">

            {/* container of all employee */}

            <div className="person-info-container">
                {
                    persons.map(p => <Person handleHire={handleHire} key={p.phone} person={p}></Person>)
                }
            </div>

            {/* list of hired employee and salary details */}

            <div className="hire-info">
                <HireDetails hire={hire} ></HireDetails>
            </div>
        </div>);
};

export default Employee;