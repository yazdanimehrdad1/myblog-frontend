
import { Container, Row, Col, Media, Image, Card } from 'react-bootstrap';


export default function AuthorIntro(){

    return(
        <Row>
            <Col md="8">
            {/* AUTHOR INTRO STARTS */}
            <Media className="mb-4 admin-intro">
                <Image
                // roundedCircle
                width={128}
                height={128}
                className="mr-3"
                src="https://avatars.githubusercontent.com/u/11001227?v=4"
                alt="Generic placeholder"
                />
                <Media.Body>
                <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
                <p className="welcome-text">
                My name is Mehrdad Yazdani. I am a proactive and diligent Full Stack Developer. Expertise in object-oriented programming 
                technologies such as Python, JavaScript, and REACT. Strong ability to learn new technologies 
                quickly and bring a critical eye to new projects.
                </p>
                </Media.Body>
            </Media>
            {/* AUTHOR INTRO ENDS */}
            </Col>
        </Row>
    )
}