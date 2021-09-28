import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
const WelcomeTron = () => {


    return (
        <Container>
    <Jumbotron style={{ color: 'white', backgroundImage: "url(https://www.teahub.io/photos/full/16-167968_library-wallpaper-50371-px-hdwallsource-library-background.jpg)", backgroundSize: "100%" }}>
        <h1>Welcome and browse</h1>
        <p>
          Enjoy your time at StriveBooks.
        </p>
        <p>
          <Button variant="light">hmmm</Button>
        </p>
    </Jumbotron>
    </Container>
    )
}

export default WelcomeTron