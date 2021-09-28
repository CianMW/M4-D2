import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'



const MyFooter = () => {

    return (
        <Navbar fixed="bottom"bg="danger" variant="dark" text="light">
        <p style={{ color: 'white' }}>Thank you for visiting</p>
        </Navbar>
    )
}

export default MyFooter