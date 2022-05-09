import React, { Component } from 'react';
import Movie from './movie';
import heGotGame from '../movie-imgs/he-got-game.jpg';
import spaceJam from '../movie-imgs/space-jam.jpg';
import coachCarter from '../movie-imgs/coach-carter.jpg';

export default class MovieList extends Component {
    render() {
        const movieArray = [
            {
                id: 1,
                title: "He Got Game",
                img: heGotGame,
                description: "A basketball player's father must try to convince him to go to a college so he can get a shorter sentence.",
                imdbRating: "6.9",
                imdbLink: "https://www.imdb.com/title/tt0124718/",
            },
            {
                id: 2,
                title: "Space Jam",
                img: spaceJam,
                description: "In a desperate attempt to win a basketball match and earn their freedom, the Looney Tunes seek the aid of retired basketball champion, Michael Jordan.",
                imdbRating: "6.5",
                imdbLink: "https://www.imdb.com/title/tt0117705/",
            },
            {
                id:3,
                title: "Coach Carter",
                img: coachCarter,
                description: "Controversy surrounds high school basketball coach Ken Carter after he benches his entire team for breaking their academic contract with him.",
                imdbRating: "7.3",
                imdbLink: "https://www.imdb.com/title/tt0393162/",
            }
        ];

        let movies;
        if (movieArray) {
            movies = movieArray.map((movie, id) => <Movie key={id} {...movie} />);
        }

        return (
            <div className="container d-flex flex-column bg-dark">
                <h1 className="text-light mb-3">Top Movies</h1>
                <div>{movies}</div>
            </div>
        )
    }
}