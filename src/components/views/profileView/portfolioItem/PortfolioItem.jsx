import {Card, Button, Col, Row} from "react-bootstrap";
import {deletePortfolioEntry} from "../../../../redux/profile/profileSlice";
import {connect} from "react-redux";


const PortfolioItem = (props) => {

    const {
        deletePortfolioEntry,
        id,
        title,
        company,
        date,
        description
    } = props;


    return (
        <Card className="mb-3">
            <Card.Header>
                <Row>
                    <Col>
                        {company}
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button variant="danger" onClick={() => {
                            const confirmBox = window.confirm("Are you sure?")
                            if(confirmBox === true) {
                                deletePortfolioEntry(id)
                            }
                        }} >Remove</Button>

                    </Col>
                </Row>
            </Card.Header>
                <Card.Body>
                    <Card.Text>Title: {title}</Card.Text>
                    <Card.Text>{date}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
        </Card>
    )
}
const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deletePortfolioEntry: (id) => dispatch(deletePortfolioEntry(id))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioItem);