import Card from 'react-bootstrap/Card';
import Input from './Input';
import ButtonComponent from './ButtonComponent';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Teachers() {
  return (
    <>
      
        <Card
          bg='light'
          
          text="light"
          style={{ width: '50rem',height:'30rem' }}
          className="mb-2"
        >
          <Card.Body style={{ height:'40rem',display:"flex",flexDirection:"column" }}>
          <div style={{display:"flex",width:"40rem", flexWrap:"wrap" }}>
          <Input placeholder="First Name"/>
          <Input placeholder="Last Name"/>
          <Input placeholder="Select Qualification"/>
          <Input placeholder="Select Subjects"/>
          <Input placeholder="Select Classes"/>
          <Input placeholder="Select Section"/>
          <Input placeholder="Mobile Number"/>
          <Input placeholder="Alternate Mobile Number"/>
          <Input placeholder="Email"/>
          <ButtonComponent variant="info" text="Upload documents"/>
          </div>
          <div>
            <div>
            <FloatingLabel controlId="floatingTextarea2" label="Address">
        <Form.Control
          as="textarea"
          placeholder="Address"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
           
            </div>
          </div>
          </Card.Body>
        </Card>
     
    </>
  );
}

export default Teachers;