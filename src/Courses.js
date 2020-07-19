import React from "react";
import aboutimage from "./images/aboutimage.jpg"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Courses() {
    return (
        <div className="courses" >
            <div className="MainCoursesArea">
                <div className="coursesimage">
                    <img src={aboutimage} alt="i" height="350px" width="550px" />
                </div>
                <div className="coursesparadetails">
                    <h1 className="coursesheading">Python Courses</h1>
                    <div className="coursespara">
                        <p>It's continued to be a favourite option for data scientists who use it for building and using Machine learning applications and other scientific computations. Python cuts development time in half   with its simple to read syntax and easy compilation feature. Debugging programs is a breeze in Python with its built in debugger.
                            </p>
                    </div>
                    <button className="coursesapplybutton">Book A Demo</button>
                </div>
            </div>
            <div className="mainFeaturescourses">
                <div className="box">1.adesg</div>
                <div className="box">2.asssssss</div>
                <div className="box">3.assasa</div>
                <div className="box">4.assaasas</div>
            </div>
            <div className="syllabusarea">
                <h1>Syllabus Overview</h1>
                <h3>Click on Topics</h3>
                <h6>for details syllabus</h6>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                1.Introduction to Python
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>-Values, Types, Variables<br />
                            -Operands and Expressions<br />
                            -Conditional Statements<br />
                            -Loops<br />
                            -Command Line Arguments
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                2.Sequences and File Operations
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                -Python files I/O Functions<br />
                            -Strings and related operations<br />
                            -Tuples and related operations<br />
                            -Lists and related operations<br />
                            -Dictionaries and related operations<br />
                            -Sets and related operations
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                3.Deep Dive – Functions, OOPs, Modules, Errors and Exceptions
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                Functions<br />
                                Function Parameters<br />
                                Object-Oriented Concepts<br />
                                Global Variables<br />
                                Variable Scope and Returning Values<br />
                                Errors and Exception Handling<br />
                                Handling Multiple Exceptions<br />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            <div className="project">
                <h1>Project Details</h1>
                <div className="projectarea"> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Courses