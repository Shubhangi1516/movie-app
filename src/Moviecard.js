import { Component } from "react";
class MovieCard extends Component{
    /*
    //addStars is a function inside a class so function keyword is not needed. 
    addStars = () =>{
        
        //form1
        // this.setState({
        //     stars: this.state.stars +0.5
        // });

        //Form2
        if(this.state.stars>=5){
            return;
        }
        this.setState((prevState)=>{
            return{
                stars:prevState.stars+0.5
            }
        });

        // this.state.stars += 0.5;
        // console.log("this.state.stars:", this.state.stars);
    }

    reduceStars=()=>{
        if(this.state.stars <=0){
            return;
        }
       this.setState((prevState)=>{
        return{
            stars:prevState.stars-0.5
        }
       })
    }

    handleFav=()=>{
        this.setState({
            fav: !this.state.fav
        })
    }

    handleCart=()=>{
        this.setState({
            cart: !this.state.cart
        })
    }*/

    render(){
        const {title,plot,price,rating,star,fav,cart} = this.props.movies;
        const {movies,addStars,reduceStars,toggleFav,toggleCart}=this.props;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKCfq9i-7CIg-6Ds5mugL6T5e_O7xaj0FVw&usqp=CAU"/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" onClick={()=>{reduceStars(movies)}}/> {/*passing the movie that user selected as an argument to the funcition */}
                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" onClick={()=>{addStars(movies)}} />
                                <span class="starCount">{star}</span>
                            </div>
                            

                            {/*conditional rendering */}
                            {/*fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:
                            <button className="favourite-btn" onClick={this.handleFav}>favourite</button>*/}
                            
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{toggleFav(movies)}}>
                                {fav?"unfavourite":"favourite"}
                            </button>

                            <button className={cart?"remove-cart-btn":"cart-btn"} onClick={()=>{toggleCart(movies)}}>
                                {cart?"Remove from cart":"Add to cart"}
                            </button>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        ) 
    }
}

export default MovieCard;