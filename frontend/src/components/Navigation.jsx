import { Link } from 'react-router-dom'
import Logout from '../components/Logout'
import { Navbar, Nav } from 'react-bootstrap'
const Navigation = () => {
    const style = {
        paddingLeft: '10px',
    }
    const liStyle = {
        display: 'inline-block',
        fontSize: '20px',
        padding: '7px',
    }
    return (
        <div style={style}>
            <Navbar
                style={style}
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#" as="span">
                            <Link to="/">blogs</Link>
                        </Nav.Link>
                        <Nav.Link href="#" as="span">
                            <Link to="/users">user</Link>
                        </Nav.Link>
                        <Nav.Link href="#" as="span">
                            <Logout />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
