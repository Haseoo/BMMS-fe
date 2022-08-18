import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
export const MaterialsList = ({ materials }) => {
    return (
        <>
         <Stack direction="horizontal" gap={3}>
            <Form.Control className="me-auto" placeholder="Add your item here..." />
            <Button variant="secondary">Submit</Button>
            <div className="vr" />
            <Button variant="outline-danger">Reset</Button>
        </Stack>
        {materials.map(material => <div key={material.id}>{material.name}</div>)}
        </>
    ) 
}