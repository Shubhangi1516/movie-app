import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component{
    
    render(){
        //const {title,plot,price,rating,stars,fav,cart}=this.state;

        //we can also destructure "movies" array from this.state to be used directly, instead of writing this.state.movies.map
        const {movies,addStars,decStars,toggleFav,toggleCart}=this.props;
        return(
            <>
               {movies.map((m)=>< MovieCard movies={m} 
                                           addStars={addStars} 
                                           reduceStars={decStars}
                                           toggleFav={toggleFav} 
                                           toggleCart={toggleCart} />)}
            </>
            
        )
    }
}

export default MovieList;