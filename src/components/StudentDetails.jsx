import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { PlusLg, DashLg } from 'react-bootstrap-icons';
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

  return (
    <Row className='justify-content-md-center'>
      <Col xs lg={2}>
        <img src={pic} className='profileImage' alt='employee'></img>
      </Col>
      <Col xs lg={4} md='auto'>
        <h2>
          {firstName.toUpperCase()} {lastName.toUpperCase()}
        </h2>
        <p>email: {email}</p>
        <p>Comapny: {company}</p>
        <p>Skill: {skill}</p>
        {show === false
          ? grades.map((g, index) => (
              <h6 key={index}>
                Test{index + 1} : {g}
              </h6>
            ))
          : null}
        <p>Average: {getAverage(grades)}%</p>
        {tags ? tags.map((t, index) => <Tag key={index} tag={t}></Tag>) : null}
        <input
          type='text'
          placeholder='add tag here'
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={addInputToTags}
        ></input>
      </Col>
      <Col>
        <i className='icon' onClick={() => setShow(!show)}>
          {show === true ? (
            <PlusLg size={30}></PlusLg>
          ) : (
            <DashLg size={30}></DashLg>
          )}
        </i>
      </Col>
    </Row>
  );
}

export default StudentDetails;
