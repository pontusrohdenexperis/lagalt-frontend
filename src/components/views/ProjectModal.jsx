import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import DiscussionBoardComponent from './discussionBoard/DiscussionBoardComponent'
import ChatWindowComponent from "../chat/ChatWindowComponent";
import KeycloakService from '../../services/keycloakService';
import { connect } from 'react-redux';
import "./ProjectModal.css";

const ProjectModal = (props) => {
  const displayChat = true;

  function displayChatWindow() {
    return (
      <Col sm="4">
        {selectedProject.chatBoard && <ChatWindowComponent chatboardUrl={selectedProject.chatBoard}></ChatWindowComponent>}
      </Col>
    );
  }

  const { projects, selectedProject } = props;

  return (
    <Container>
      <Row>
        <Col>
          <Card className="projectComponent" style={{ marginTop: "0px" }}>
            <Card.Body>
              <Card.Title>{selectedProject.title}</Card.Title>
              <Card.Text>{selectedProject.description}</Card.Text>
            </Card.Body>
            <img
              style={{ minHeight: "250px" }}
              src="https://source.unsplash.com/1600x900"
              alt=""
            />
            <Card.Body>
              <DiscussionBoardComponent></DiscussionBoardComponent>
            </Card.Body>
          </Card>
        </Col>
        {/* if user is member of project*/}
        {KeycloakService.isLoggedIn() ? displayChatWindow() : null}
      </Row>
      <br />
      <Row>
        <Col xs={{ span: 2, offset: 5 }}>
          <Button>Apply to project</Button>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
    selectedProject: state.projects.selectedProject,
    messages: state.messages.messages,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal);
