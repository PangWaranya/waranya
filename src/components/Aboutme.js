import React, {components}from 'react'; 
import '../App.css';
import { Card, CardHeader, CardBody,
    ListGroup,ListGroupItem,CardGroup} from 'reactstrap';
  
  const Aboutme = (props) => {
    return (
      <div>
          <CardGroup>
            <Card >
            <CardHeader color="success">About Me</CardHeader>
            <CardBody>
              <ListGroup flush>
                <ListGroupItem >นางสาว วรัญญา ธนูศิลป์ </ListGroupItem>
                <ListGroupItem >ชื่อเล่น:แป้ง</ListGroupItem>
                <ListGroupItem >วันเกิด: 11 มิถุนายน 2541</ListGroupItem>
                <ListGroupItem >อายุ: 22 ปี</ListGroupItem>
                <ListGroupItem >สัญชาติ: ไทย</ListGroupItem>
                <ListGroupItem >ศาสนา: พุทธ</ListGroupItem>
                <ListGroupItem ></ListGroupItem>
              </ListGroup>
              <ListGroup flush className='con'>
                <ListGroupItem color="warning">contact</ListGroupItem>
                <ListGroupItem >E-mail: waranya.p12@gmail.com</ListGroupItem>
                <ListGroupItem >หมายเลขโทรศัพท์: 0620747232</ListGroupItem>
                <ListGroupItem >ที่อยู่: 165 ม.3 ต.ลำภูรา อ.ห้วยยอด จ.ตรัง 92190</ListGroupItem>
            </ListGroup>
    
          </CardBody>
          
        </Card>
        </CardGroup>
  
      </div>
    );
  };
  
  export default Aboutme;