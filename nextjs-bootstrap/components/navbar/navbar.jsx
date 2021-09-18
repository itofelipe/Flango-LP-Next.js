import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Image from 'next/image'
import Flango_icon from '../../assets/img/chicken.png'


export default function Header() {
    return (
        <Navbar fixed="top">
            <Container>
                <Navbar.Brand href="#">
                    <Image src={Flango_icon} alt="Flango icon" className="header-icon" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="header_menu">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}