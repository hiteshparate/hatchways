import {
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React, { useState } from 'react';
import Tag from './Tag';

function StudentDetails(props) {
  const { company, email, firstName, grades, id, lastName, pic, skill, tags } =
    props.student;

  const [show, setShow] = useState(true);
  const [tag, setTag] = useState('');

  const getAverage = (grades) => {
    let average = 0;
    for (let i = 0; i < grades.length; i++) {
      average = average + parseInt(grades[i]);
    }

    return average / grades.length;
  };

  const addInputToTags = (e) => {
    if (e.key === 'Enter') {
      props.updateTags(id, tag);
      setTag('');
    }
  };

  const expandButton = show ? (
    <Tooltip title='expand'>
      <IconButton onClick={() => setShow(!show)}>
        <Add fontSize='large'></Add>
      </IconButton>
    </Tooltip>
  ) : (
    <Tooltip title='shrink'>
      <IconButton onClick={() => setShow(!show)}>
        <Remove fontSize='large'></Remove>
      </IconButton>
    </Tooltip>
  );

  const showGrades =
    show === false
      ? grades.map((g, index) => (
          <Typography key={index}>
            Test{index + 1} : {g}
          </Typography>
        ))
      : null;

  const tagsMarkUp = tags
    ? tags.map((t, index) => <Tag key={index} tag={t}></Tag>)
    : null;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4} sm={3}>
          <img src={pic} className='profileImage' alt='employee'></img>
        </Grid>
        <Grid item xs={6} sm={7}>
          <Typography variant='h4'>
            {firstName.toUpperCase()} {lastName.toUpperCase()}
          </Typography>
          <Typography variant='body1'>Email: {email}</Typography>
          <Typography variant='body1'>Comapny: {company}</Typography>
          <Typography variant='body1'>Skill: {skill}</Typography>
          {showGrades}

          <Typography variant='body1'>
            Average: {getAverage(grades)}%
          </Typography>
          {tagsMarkUp}
          <br></br>

          <TextField
            type='text'
            placeholder='add tag here'
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            onKeyDown={addInputToTags}
          ></TextField>
        </Grid>
        <Grid item xs={2} sm={2}>
          {expandButton}
        </Grid>
      </Grid>
      <hr></hr>
    </>
  );
}

export default StudentDetails;
