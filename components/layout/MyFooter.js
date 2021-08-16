import styles from '../../styles/Home.module.css'
import {Container} from "react-bootstrap";

export default function Footer() {
    const copy = "Copyright \u00A9 ";
    return (
        <Container>
            <div>
                <p>{copy} 2021</p>
            </div>
        </Container>
    );
};

