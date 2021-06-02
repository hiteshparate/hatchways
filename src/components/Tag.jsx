import { Button } from '@material-ui/core';
import React from 'react';

function Tag(props) {
  return <Button variant='contained'>{props.tag}</Button>;
}

export default Tag;
