import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';


export default function NavBar(props) {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);

    const signOutHandler = () => {
        setAuthenticated(false);
        navigate('/');
    }

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{ marginRight: '15px' }} />
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events' end />
                {authenticated && 
                    <Menu.Item as={NavLink} to='/events/new'>
                        <Button positive inverted content='Create Event' />
                    </Menu.Item>}
                {authenticated ? <SignedInMenu signOut={signOutHandler} /> : <SignedOutMenu setAuthenticated={setAuthenticated} />}
            </Container>
        </Menu>
    );
}