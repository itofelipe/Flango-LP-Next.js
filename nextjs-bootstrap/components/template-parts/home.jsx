import { Container } from 'react-bootstrap';
import Image from 'next/image'
import Flango_logo from '../../assets/img/Flango_logo.png'


export default function Header() {
    return (
        <section id="home">
            <Container>
                <div className="home_description">
                    <div className="home_description_box">
                        <Image src={Flango_logo} alt="Flango logo" className="flango_logo" />
                        <h3>Delicius Fried Chicken</h3>
                        <p>Did you have tried?</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}