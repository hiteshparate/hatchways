import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import StudentDetails from './StudentDetails';

function Student() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');
  useEffect(() => {
    axios
      .get('https://api.hatchways.io/assessment/students')
      .then((res) => {
        setStudents(res.data.students);
      })
      .then(() => {
        students.forEach((s) => (s['tags'] = []));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container'>
      <Container className='block'>
        <input
          type='text'
          placeholder='Search by name'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='Search by Tag'
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        ></input>
        {students
          .filter(
            (s) =>
              s.firstName.toUpperCase().includes(search.toUpperCase()) ||
              s.lastName.toUpperCase().includes(search.toUpperCase()) ||
              s.firstName
                .toUpperCase()
                .concat(' ')
                .concat(s.lastName.toUpperCase())
                .includes(search.toUpperCase())
          )
          .map((s) => (
            <>
              <StudentDetails key={s.id} student={s}></StudentDetails>
              <input
                type='text'
                placeholder='add tage here'
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              ></input>
            </>
          ))}
      </Container>
    </div>
  );
}

export default Student;
