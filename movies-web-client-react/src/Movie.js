import React, { Component } from 'react';
import { Header, Segment, Image, Grid } from 'semantic-ui-react';

import { IMAGE_BASE_URL } from './config'

class Movie extends Component {

    render() {
        return (
            <Grid columns={2} >
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h3">{this.props.name}</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h4">{this.props.genre}</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>{this.props.description}</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={IMAGE_BASE_URL + this.props.photo} size='medium' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
};

export default Movie