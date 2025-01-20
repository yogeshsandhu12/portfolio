import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope, FaCode, FaDatabase, FaUserAlt, FaBriefcase, FaUniversity, FaCertificate } from 'react-icons/fa'; // Icons for sections

const Portfolio = () => {
    return (
        <Card className="my-5 shadow-lg rounded p-4 m-4">
            <Container style={{ textAlign: 'left'}}>
                {/* Header Section */}
                <Row className="mb-4">
                    <Col>
                        <h1 className="display-4 text-dark">Yogesh Sandhu</h1>
                        <p className="lead text-dark">
                            Full Stack Developer | <a href="mailto:yogeshkumarsandhu.12@gmail.com"  className="text-dark"><FaEnvelope className="text-dark" /> yogeshkumarsandhu.12@gmail.com</a> |
                            <a href="https://www.linkedin.com/in/yogesh-sandhu-108478185/" target="_blank" rel="noopener noreferrer"  className="text-dark"><FaLinkedin className="text-dark" /> LinkedIn</a>
                        </p>
                    </Col>
                </Row>

                {/* Summary Section */}
                <Row className="mb-4">
                    <Col>
                        <Card className="shadow-sm rounded">
                            <Card.Body>
                                <Card.Title className="text-dark"><FaUserAlt className="text-dark" /> Summary</Card.Title>
                                <Card.Text className="text-dark">
                                    A highly skilled Full Stack Developer with over 3 years of experience in building and maintaining web applications across diverse domains, including Core Banking Systems, Insurance products, and eCommerce platforms. Proficient in frontend and backend development with a focus on secure, scalable, and high-performance systems.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Technical Skills Section */}
                <Row className="mb-4">
                    <Col>
                        <Card className="shadow-sm rounded">
                            <Card.Body>
                                <Card.Title className="text-dark"><FaCode className="text-dark" /> Technical Skills</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="text-dark"><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Responsive Web Design</ListGroup.Item>
                                    <ListGroup.Item className="text-dark"><strong>Backend:</strong> Java Spring Boot, RESTful APIs, Yii2 Framework, Microservices</ListGroup.Item>
                                    <ListGroup.Item className="text-dark"><strong>Database:</strong> MySQL, PostgreSQL</ListGroup.Item>
                                    <ListGroup.Item className="text-dark"><strong>Authentication:</strong> JWT (JSON Web Tokens), OAuth2 (Access & Refresh Tokens)</ListGroup.Item>
                                    <ListGroup.Item className="text-dark"><strong>Tools & Platforms:</strong> Git, Docker, Maven, Postman, Amazon EC2, Ubuntu</ListGroup.Item>
                                    <ListGroup.Item className="text-dark"><strong>Frameworks:</strong> Spring Boot, Yii2, Spring Cloud (Eureka, API Gateway)</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Professional Experience Section */}
                <Row className="mb-4">
                    <Col>
                        <Card className="shadow-sm rounded">
                            <Card.Body>
                                <Card.Title className="text-dark"><FaBriefcase className="text-dark" /> Professional Experience</Card.Title>

                                <Card.Subtitle className="mb-2 mt-3 text-dark">Finovate Globals (September 2024 – Present)</Card.Subtitle>
                                <ul className="text-dark">
                                    <li>Developed and maintained Core Banking System (CBS) features, integrating KYC products and third-party APIs like Ongrid for user verification.</li>
                                    <li>Built a responsive frontend with React and implemented microservices with Spring Boot.</li>
                                    <li>Deployed applications on Amazon EC2 for scalability and optimized system performance for banking clients.</li>
                                </ul>

                                <Card.Title className="mt-3 text-dark">Projects:</Card.Title>
                                <ul className="text-dark">
                                    <li><strong>Core Banking System (CBS):</strong> Developed features focusing on real-time transaction processing, user data management, and KYC integration using Spring Boot and React.</li>
                                    <li><strong>KYC Integration:</strong> Integrated Ongrid API to enhance speed and accuracy of user identity validation.</li>
                                    <li><strong>Login Authentication System:</strong> Designed a JWT-based authentication system for secure login and session management.</li>
                                    <li><strong>Microservices Architecture:</strong> Utilized Spring Boot with Eureka and API Gateway for service discovery and centralized routing, improving scalability and fault tolerance.</li>
                                    <li><strong>Custom React Modules:</strong> Developed reusable React components for a modular and scalable frontend.</li>
                                </ul>

                                <Card.Subtitle className="mb-2 mt-3 text-dark">Xtreme Softech (June 2022 – September 2024)</Card.Subtitle>
                                <ul className="text-dark">
                                    <li>Designed and developed the backend of insurance products using Java Spring Boot.</li>
                                    <li>Created RESTful APIs for price fetching, invoice generation, and user data updates.</li>
                                </ul>

                                <Card.Title className="mt-3 text-dark">Projects:</Card.Title>
                                <ul className="text-dark">
                                    <li><strong>Property Insurance Platform:</strong> Integrated an Inventory Purchase System for automating insurance policy management.</li>
                                    <li><strong>Dashboards:</strong> Designed interactive dashboards to track insurance applications, policy updates, and key metrics.</li>
                                    <li><strong>Invoice Generation:</strong> Automated invoice creation for property insurance policies, enhancing billing accuracy.</li>
                                    <li><strong>Policy Documents:</strong> Developed a system to generate, view, and manage insurance policy documents.</li>
                                    <li><strong>eCommerce Insurance Module:</strong> Built features like cart saving, order management, and checkout for seamless online insurance purchases.</li>
                                    <li><strong>Data Import:</strong> Automated importing of 1600+ live customer records from Excel to the database, improving data accuracy and efficiency.</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Education Section */}
                <Row className="mb-4">
                    <Col>
                        <Card className="shadow-sm rounded">
                            <Card.Body>
                                <Card.Title className="text-dark"><FaUniversity className="text-dark" /> Education</Card.Title>
                                <p className="text-dark">Bachelor’s in Computer Science - Starex University (Graduated in 2022)</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Certifications Section */}
                <Row className="mb-4">
                    <Col>
                        <Card className="shadow-sm rounded">
                            <Card.Body>
                                <Card.Title className="text-dark"><FaCertificate className="text-dark" /> Certifications</Card.Title>
                                <ul className="text-dark">
                                    <li>Full Stack Developer Pro – Imarticus Learning (2024)</li>
                                    <li>IBM Ice Day – IBM (2022)</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Footer Section */}
                <Row className="mt-4">
                    <Col>
                        <Button
                            variant="primary"
                            href="https://www.linkedin.com/in/yogesh-sandhu-108478185/"
                            target="_blank"
                            className="w-100 shadow"
                            style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
                        >
                            View LinkedIn Profile
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};

export default Portfolio;