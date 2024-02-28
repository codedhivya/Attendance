import { Button, Col, Form, Row } from 'react-bootstrap';

const AttendanceForm = ({ resetData, sortbyID, searchData }) => {

    return (
        <div>
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Button className='mb-3 ' variant="primary" onClick={() => resetData()}>Reset</Button>
                    </Col>
                    <Col xs="auto">
                        <Button className='mb-3 ' variant="primary" onClick={() => sortbyID()}>Sort</Button>
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Filter"
                            className=" mr-sm-2"
                            onChange={(e) => searchData(e.target.value)}
                        />
                    </Col>
                </Row>
            </Form></div>
    )
}

export default AttendanceForm