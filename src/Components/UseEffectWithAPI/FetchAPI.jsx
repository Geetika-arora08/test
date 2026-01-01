import React, { useEffect, useState } from "react";
import './style.css';


// function FetchAPI() {
//     const [movies, setMovies] = useState([]);

//     useEffect (() => {
//         fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=c3e33eb747efb8bb8deac93308c266c4")

//         .then(res => res.json())
//         .then(json => {
//             setMovies(json.results);
//             console.log(json.results);
//         })
//         .catch((error) => {
//             console.log("Error fetching Data" , error);
//         });
//     }, []);

//     return(
//         <div>
//              <h2 className="heading">🍿Popular-Movies🍿</h2>      
//             <div className="grid">
//                 {
//                     movies.map((value, i) => (
//                         <div className="card" key={i}>
//                              <img src = {`https://image.tmdb.org/t/p/w500${value.poster_path}`} />
//                             <h1>{value.title}</h1>
//                             <h2>Release Date : {value.release_date}</h2>
//                             <p><strong>Overview : </strong>{value.overview}</p>

//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }
// export default FetchAPI;




function FetchAPI() {
    const [movies, setMovies] = useState([]);
    const [load, setLoad] = useState({});

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1%27&api_key=c3e33eb747efb8bb8deac93308c266c4")
        .then(response => response.json())
        .then(json => {
            setMovies(json.results);
            console.log(json.results);

            setLoad(json.dates);
            console.log(json.dates);
        })
        .catch((err) => {
            console.log("Error fetching Data", err);
        });

    }, []);
        

    return (
        <div>
            <h2 className="heading">Now-Playing-Movies</h2>


    {/* 🗓 Showing date range */}
      {load.maximum && load.minimum && (
        <div style={{ marginLeft:'520px',}}>
          <p>
            <b>From:</b> {load.minimum} &nbsp; <b>To:</b> {load.maximum}
          </p>
        </div>
      )}

            <div className="grid">

                
                 {
                    movies.map((value, i) => (
                        <div className="card" key={i}>
                            <img src = {`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt="Image"
                           style={{width:'150px', height:'200px'}} />
                             <h1>Title : {value.title}</h1>
                             <p><strong>Release Date : </strong>{value.release_date}</p>
                             <p><strong>Vote Average : </strong>{value.vote_average}</p>
                             <h2>Overview</h2>
                            <p>{value.overview}</p>
            
                        </div>
                    ))
                } 

            </div>
        </div>
    )
}

export default FetchAPI;

// function FetchAPI() {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // fetch("https://jsonplaceholder.typicode.com/posts")
//         fetch("https://restcountries.com/v3.1/all?fields=name,flags")
//         .then(response => response.json())
//         .then(json => {
//             setPosts(json)

//             setLoading(false);
//         })
//         .catch((err) => {
//             console.log("Error fetching Data", err);
//             setLoading(false);
//         });

//     }, []);

//     if(loading) {
//         return <p>Data is Loading....</p>;
//     }

//     return (
//         <div className="container">

//             <h2 className="heading">🏴Countries and Flags🏴</h2> 

//             <div className="grid">
//                 {
//                     posts.map((value, i) => (
//                         <div className="card" key={i}>

//                             <img src={value.flags.png} 
//                             style={{width:'100px', marginLeft:'120px', height:'100px'}} />
//                             <h2>{value.flags.svg}</h2>
//                             <h3>{value.name.common}</h3>
//                             <p>{value.flags.alt}</p>
                           
//                         </div>
//                     ))
//                 }

//             </div>

//         </div>
//     )
// }

// export default FetchAPI;