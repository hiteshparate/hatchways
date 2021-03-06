import { Card, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
      .catch((err) => console.log(err));
  }, []);

  const updateTags = (id, tag) => {
    const newStudents = students.map((s) => {
      if (s.id === id) {
        if (s['tags'] === undefined) {
          s['tags'] = [tag];
        } else {
          let tempTags = s['tags'];
          s['tags'] = [...tempTags, tag];
        }
      }
      return s;
    });
    setStudents(newStudents);
  };

  const filterByTag = (s) => {
    let newTag = tag.trim().toLowerCase();
    if (newTag === '') {
      return true;
    } else {
      if (s.hasOwnProperty('tags')) {
        for (let i = 0; i < s.tags.length; i++) {
          if (s.tags[i].toLowerCase().includes(newTag)) {
            return true;
          }
        }
      }

      return false;
    }
  };

  const filterByName = (s) => {
    return (
      s.firstName.toUpperCase().includes(search.toUpperCase()) ||
      s.lastName.toUpperCase().includes(search.toUpperCase()) ||
      s.firstName
        .toUpperCase()
        .concat(' ')
        .concat(s.lastName.toUpperCase())
        .includes(search.toUpperCase())
    );
  };

  return (
    <Card className='grid'>
      <div className='textField'>
        <TextField
          fullWidth
          type='text'
          placeholder='Search by name'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></TextField>
      </div>
      <div className='textField'>
        <TextField
          fullWidth
          type='text'
          placeholder='Search by Tag'
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        ></TextField>
      </div>

      {students
        .filter((s) => filterByName(s))
        .filter((s) => filterByTag(s))
        .map((s) => (
          <StudentDetails
            key={s.id}
            student={s}
            updateTags={updateTags}
          ></StudentDetails>
        ))}
    </Card>
  );
}

export default Student;
