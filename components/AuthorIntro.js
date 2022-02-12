
import { Container, Row, Col, Media, Image, Card } from 'react-bootstrap';


export default function AuthorIntro(){

    return(
        <Row>
            <Col md="8">
            {/* AUTHOR INTRO STARTS */}
            <Media className="mb-4 admin-intro">
                <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src=""
                alt="Generic placeholder"
                />
                <Media.Body>
                <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
                <p className="welcome-text">
                My name is Mehrdad Yazdabi and I am an experienced software engineer and freelance developer.
                and this is my blog page.
                </p>
                </Media.Body>
            </Media>
            {/* AUTHOR INTRO ENDS */}
            </Col>
        </Row>
    )
}