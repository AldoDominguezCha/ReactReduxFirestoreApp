import { useNavigate } from 'react-router-dom';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

export default function HomePage(props) {
    const navigate = useNavigate();

    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' style={{marginBottom: 12}}/>
                    Re-vents
                </Header>
                <Button size='huge' inverted onClick={() => navigate('/events')}>
                    Get started!
                    <Icon name='right arrow' inverted />
                </Button>
            </Container>
        </Segment>
    );
}