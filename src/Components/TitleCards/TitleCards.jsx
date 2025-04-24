import React , {useEffect, useRef, useState}from 'react'
import './TitleCards.css'
import cards_data from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom';



const TitleCards = ({title, category}) => {

  const [apiData,setApiData]=useState([]);

  const cardsRef=useRef();

  const url = `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGRmMWVlNWE2MWU5YTQ3ZWU3NDJmN2M5YTgyMmZiNSIsIm5iZiI6MTc0NDYyOTc0NC40Njg5OTk5LCJzdWIiOiI2N2ZjZWZmMGFhY2Y3Y2ZiMjY5OTc5OTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6vGWfGKHDDvO6C6qKrdu6WtcNxbuz26O0ncobwJfoFg'
  }
};


  const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(()=>{

            fetch(url, options)
          .then(res => res.json())
          .then(json => setApiData(json.results))
          .catch(err => console.error(err));
          
      cardsRef.current.addEventListener('wheel',handleWheel)
  
  },[])

  return (
    <div className='title-cards'>
     <h2>{title?title:"Popular on Netflix"}</h2> 
     <div className="card-list" ref={cardsRef}>
      {apiData.map((card, index)=>{
            return <Link to={`/player/${card.id}`} className="card" key={index}>
                 <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" /> 
                 <p>{card.original_title}</p>
            </Link>
      })}
     </div>  
    </div>
  )
}

export default TitleCards












// import React, { useEffect, useRef, useState } from 'react';
// import './TitleCards.css';

// const TitleCards = ({ title, category }) => {
//   const [apiData, setApiData] = useState([]);
//   const cardsRef = useRef();

//   const API_KEY = 'd4df1ee5a61e9a47ee742f7c9a822fb5'; // 🔑 Replace with your TMDb API key

//   const handleWheel = (event) => {
//     event.preventDefault();
//     cardsRef.current.scrollLeft += event.deltaY;
//   };

//   useEffect(() => {
//     let endpoint = '';

//     switch (category) {
//       case 'popular':
//         endpoint = 'movie/popular';
//         break;
//       case 'top_rated':
//         endpoint = 'movie/top_rated';
//         break;
//       case 'now_playing':
//         endpoint = 'movie/now_playing';
//         break;
//       case 'trending':
//         endpoint = 'trending/movie/week';
//         break;
//       default:
//         endpoint = 'movie/popular';
//     }

//     const URL = `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}`;

//     fetch(URL)
//       .then((res) => res.json())
//       .then((res) => setApiData(res.results))
//       .catch((err) => console.error(err));

//     const ref = cardsRef.current;
//     ref.addEventListener('wheel', handleWheel);

//     return () => {
//       ref.removeEventListener('wheel', handleWheel);
//     };
//   }, [category]);

//   return (
//     <div className='title-cards'>
//       <h2>{title ? title : 'Popular on Netflix'}</h2>
//       <div className='card-list' ref={cardsRef}>
//         {apiData.map((card, index) => (
//           <div className='card' key={index}>
//             <img
//               src={
//                 card.poster_path
//                   ? `https://image.tmdb.org/t/p/w500${card.poster_path}`
//                   : 'https://via.placeholder.com/500x750?text=No+Image'
//               }
//               alt={card.title || 'Untitled'}
//             />
//             <p>{card.title || card.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TitleCards;
