import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import './Loader.css'

export const Loader = () => {
    return (
        <Container className='d-flex justify-content-center' >
          <Spinner className='spinner' animation="grow" variant="info" />
          <Spinner className='spinner' animation="grow" variant="primary" />
          <Spinner className='spinner' animation="grow" variant="success" />
          <Spinner className='spinner' animation="grow" variant="danger" />
          <Spinner className='spinner' animation="grow" variant="warning" />
          <Spinner className='spinner' animation="grow" variant="secondary" />
          <Spinner className='spinner' animation="grow" variant="dark" />
        </Container>
      );
}
