import React, {components}from 'react'; 
import '../App.css';
import { Card, Row, Col,ListGroup, ListGroupItem, Progress} from 'reactstrap';

const Education = (props) => {

    return (
        <Row>
          <Col sm="6">
            <Card body>
            <ListGroup flush>
                <ListGroupItem color="danger">Education</ListGroupItem>
                <ListGroupItem >มัธยมตอนปลาย: โรงเรียนมัธยมวัดควนวิเศษมูลนิธิ</ListGroupItem>
                <ListGroupItem >มัธยมตอนต้น: โรงเรียนมัธยมวัดควนวิเศษมูลนิธิ</ListGroupItem>
                <ListGroupItem >ประถมศึกษา: โรงเรียนบ้านลำภูรา</ListGroupItem>
                <ListGroupItem ></ListGroupItem>
            </ListGroup>
              
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
            <ListGroup flush >
                <ListGroupItem color="danger">skill</ListGroupItem>
                   
                 <div>
    
                    <div className="text-center">php</div>
                    <Progress color="success" value="40" />
                    <div className="text-center">Database</div>
                    <Progress value={60} />
                    <div className="text-center">html5, CSS</div>
                    <Progress color="success" value={70} />
                    <div className="text-center">bootstrap</div>
                    <Progress value="60" />
                    <Progress multi></Progress>
                </div>
            </ListGroup>
              
            </Card>
          </Col>
        </Row>
  );
}

export default Education;