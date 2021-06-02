import { Chip } from '@material-ui/core';
import React from 'react';

function Tag(props) {
  return <Chip color='primary' variant='primary' label={props.tag}></Chip>;
}

export default Tag;
