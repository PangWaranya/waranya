import React from 'react';
import {
  Card,  CardImg, CardTitle, CardText, CardColumns,
   CardBody, CardHeader
} from 'reactstrap';

const Conteat = (props) => {
  return (
    <CardColumns>
       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle tag="h5">About Me</CardTitle> 
      </Card>
      <Card>
            <CardBody>
            <CardTitle tag="h6" className="mb-2 text-muted">นางสาว วรัญญา ธนูศิลป์</CardTitle>
            <CardTitle tag="h6" className="mb-2 text-muted">ชื่อเล่น:แป้ง</CardTitle>
            <CardTitle tag="h6" className="mb-2 text-muted">วันเกิด: 11 มิถุนายน 2541</CardTitle>
            <CardTitle tag="h6" className="mb-2 text-muted">อายุ: 22 ปี</CardTitle>
            <CardTitle tag="h6" className="mb-2 text-muted">สัญชาติ: ไทย</CardTitle>
            <CardTitle tag="h6" className="mb-2 text-muted">ศาสนา: พุทธ</CardTitle>
            
        </CardBody>
      </Card>
      <Card>
        <CardImg   src="/img/pang2.jpg" alt="Card image cap" />
      </Card>
      <Card body inverse style={{ backgroundColor: '#262626', borderColor: '#333' }}>
      <CardHeader color="success">contact</CardHeader>
            <CardBody>
            <CardTitle tag="h6" className="mb-2 text-muted">E-mail: waranya.p12@gmail.com</CardTitle>
            <CardTitle tag="h6" className="mb-2 text-muted">หมายเลขโทรศัพท์: 0620747232</CardTitle>
            <CardText className="mb-2 text-muted">ที่อยู่: 165 ม.3 ต.ลำภูรา อ.ห้วยยอด จ.ตรัง 92190</CardText>
            
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle tag="h5">Personal project</CardTitle> 
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h7" className="mb-2 text-muted">Database systems: ฐานข้อมูลเกี่ยวกับการจองห้องพักและการคำนวณค่าน้ำค่าไฟ.</CardTitle>
          <CardTitle tag="h7" className="mb-2 text-muted"> Wed Programming: ออกแบบหน้าเว็บที่สนใจ. </CardTitle>
          <CardTitle tag="h7" className="mb-2 text-muted">Wed Programming: ทำเว็บศิษย์เก่าสาขาระบบสารสนเทศ ฟังก์ชันการ Login ของนักศึกษาและอาจารย์.</CardTitle>
          <CardTitle tag="h7" className="mb-2 text-muted"> Mobile Programming: ทำ Facebook Login Screen</CardTitle>
        </CardBody>
      </Card>
    
    </CardColumns>
  );
};

export default Conteat;