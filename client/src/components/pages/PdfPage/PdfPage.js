import React from 'react';
import PdfContainer from '../../../containers/PdfContainer';

const PdfPage  = ({ match }) => {
  return (
    <div>
      <PdfContainer match={match}/>      
    </div>
  )
};

export default PdfPage;

