import {Navbar, Nav, Container} from 'react-bootstrap';

const Navigation =()=> {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><span>Adajah's</span> Auto</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href='/cars'>For Sale</Nav.Link>
                        <Nav.Link href='/new'>Sell</Nav.Link>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/register'>Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;