import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">WELCOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="card">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            className="img"
            variant="top"
            src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/322119782_1597217347374374_6406488918709826376_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=7zK3DjnjleMAX8jCJlq&_nc_ht=scontent.ftun1-2.fna&oh=00_AfB2VZxvD6MUtOIhsBCewlvQnpQb-pzCRCTAramZZShUuA&oe=657EA105"
          />
          <Card.Body>
            <Card.Title>about me</Card.Title>
            <Card.Text>Ben Salah Ayoub 22 YEARS OLD</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="al">
        <Alert className="alert" variant="success">
          <Alert.Heading>have a nice search in my web</Alert.Heading>
          <p>
            About Me: I am a passionate web developer with [8] years of
            experience in building interactive and user-friendly websites. I
            specialize in front-end development, where I leverage my skills in
            HTML, CSS, and JavaScript to create visually appealing and
            responsive web applications. Skills: - Proficient in HTML, CSS, and
            JavaScript - Experience with front-end frameworks like React and
            Angular - Strong understanding of responsive design principles -
            Familiarity with version control systems like Git - Knowledge of
            UX/UI best practices
          </p>
          <hr />
          <p className="mb-0">have a nice day and welcome to my page</p>
        </Alert>
      </div>
    </div>
  );
}

export default App;
