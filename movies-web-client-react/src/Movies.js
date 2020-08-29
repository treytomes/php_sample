import React, { Component } from 'react';
import { Button, Container, Dropdown, Grid, Header, Message } from 'semantic-ui-react';

import { API_BASE_URL } from './config';
import Movie from './Movie';

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genres: null,
            movie: null,
            isLoadingGenres: null,
            isLoadingMovie: null,
        };
    }

    componentDidMount() {
        this.getGenres();
    }

    async getMovieFromGenre(genre) {
        if (this.state.movie) {
            if (genre === this.state.movie.genre) {
                // Load a new movie in the current genre.
                try {
                    this.setState({ isLoadingMovie: true });
                    const response = await fetch(API_BASE_URL + '/movies/' + this.state.movie.id + '/next');
                    const movieData = await response.json();
                    this.setState({ movie: movieData.data, isLoadingMovie: false});
                } catch (err) {
                    this.setState({ isLoading: false });
                    console.error(err);
                }
                return;
            }
        }

        // Load the first movie in the new genre.
        try {
            this.setState({ isLoadingMovie: true });
            const response = await fetch(API_BASE_URL + '/genres/' + genre);
            const movieData = await response.json();
            this.setState({ movie: movieData.data, isLoadingMovie: false});
        } catch (err) {
            this.setState({ isLoading: false });
            console.error(err);
        }
    }

    async getGenres() {
        if (!this.state.genres) {
            try {
                this.setState({ genres: this.state.genres, isLoadingGenres: true, isLoadingMovie: this.state.isLoadingMovie });
                const response = await fetch(API_BASE_URL + '/genres');
                const genresList = await response.json();
                this.setState({ genres: genresList.data.map(
                    genre => ({
                        key: genre,
                        text: genre.charAt(0).toUpperCase() + genre.slice(1),
                        value: genre
                    })), isLoadingGenres: false});
            } catch (err) {
                this.setState({ isLoadingGenres: false });
                console.error(err);
            }
        }
    }

    render() {
        return (
            <Container>
                <Header as="h1">Movies Sample</Header>

                <Grid columns={2}>
                    <Grid.Column>
                        {this.state.genres &&
                            <Dropdown name='genres' placeholder='Genre' options={this.state.genres}
                                      onChange={(e, data) => this.setState({selectedGenre: data.value})} />
                        }
                    </Grid.Column>

                    <Grid.Column>
                        <Button primary onClick={() => this.getMovieFromGenre(this.state.selectedGenre)}>Search</Button>
                    </Grid.Column>
                </Grid>

                {this.state.isLoadingGenres && <Message info header="Loading genres..." />}

                {this.state.movie &&
                    <Movie
                        id={this.state.movie.id}
                        name={this.state.movie.name}
                        genre={this.state.movie.genre}
                        description={this.state.movie.description}
                        photo={this.state.movie.photo} />
                }
            </Container>
        );
    }
};

export default Movies