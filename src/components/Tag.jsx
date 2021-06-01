import React from 'react';
import { Badge } from 'react-bootstrap';

function Tag(props) {
  return <Badge variant='primary'>{props.tag}</Badge>;
}

export default Tag;
