import React, {components}from 'react'; 
import '../App.css';

import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';

  const Slideimg = (props) => {
    return (
      <div>
        <Card>
        <CardImg  top width="100%"  src="/img/pang.jpg" alt="Card image cap" />
        <CardBody className='waranya'>
          <CardTitle tag="h5">WARANYA TANUASIN</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">กำลังศึกษาในระดับชั้นปริญญาตรี มหาวิทยาลัยสงขลานครินทร์</CardSubtitle>
          
        </CardBody>
      </Card>
      </div>
    );
  };
  
  export default Slideimg;
