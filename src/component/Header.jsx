import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { MdZoomOutMap, MdNotifications } from "react-icons/md";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div fluid="md" className="containers noMP">
                    <Row>
                        <Col>
                            <div className="search pl10">
                                <Form.Control type="search" placeholder="type to search..." />
                            </div>
                        </Col>
                        <Col xs={2}>
                            <Button variant="outline-primary"><MdZoomOutMap /></Button>
                            <Button variant="outline-warning"><MdNotifications /></Button>
                        </Col>
                        <Col xs={3}>
                            Welcome, Nitin <Button variant="outline-warning"><MdNotifications /></Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
