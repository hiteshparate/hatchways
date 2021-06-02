import { Grid, Icon, IconButton, Tooltip, Typography } from '@material-ui/core';
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

  return (
    <Grid container spacing={7}>
      <Grid item sm={3} justify='center'>
        <img src={pic} className='profileImage' alt='employee'></img>
      </Grid>
      <Grid item sm={7}>
        <h2>
          {firstName.toUpperCase()} {lastName.toUpperCase()}
        </h2>
        <Typography>email: {email}</Typography>
        <p>Comapny: {company}</p>
        <p>Skill: {skill}</p>
        {show === false
          ? grades.map((g, index) => (
              <h6 key={index}>
                Test{index + 1} : {g}
              </h6>
            ))
          : null}
        <Typography>Average: {getAverage(grades)}%</Typography>
        {tags ? tags.map((t, index) => <Tag key={index} tag={t}></Tag>) : null}
        <input
          type='text'
          placeholder='add tag here'
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={addInputToTags}
        ></input>
      </Grid>
      <Grid item sm={1}>
        {expandButton}
        {/* <i className='icon' onClick={() => setShow(!show)}>
          {show === true ? (
            <PlusLg size={30}></PlusLg>
          ) : (
            <DashLg size={30}></DashLg>
          )}
        </i> */}
      </Grid>
    </Grid>
  );
}

export default StudentDetails;
