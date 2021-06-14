import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';

function App() {

  
   const [coins,setCoins] = useState([]);
   const [Search,setSearch] = useState('');
   
  useEffect(
    ()=>
    {
     
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(
        (res)=>
        {
          setCoins(res.data)
          
        }
      )
    },

    []

  );
  const change=(event)=>
  {
    setSearch(event.target.value);
    console.log(Search)
  }

  const filteredCoins = coins.filter((coin)=>
  {
    return coin.name.toLowerCase().includes(Search.toLowerCase())
  })
  
  
  
  return (
   
    
    <div className="coin_container">
      <div className="search">
        <h2> Search Cryptos</h2>
        <input onChange={change}>
        </input>        
      </div>
      <div className="display_div">
   
     
      
      
      
      
      
       {
        


      

          
 
        filteredCoins.map((coin)=>
        {
          console.log(coin)
          return(
           
         
            <Coin key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  volume={coin.market_cap}
                  price={coin.current_price}
                  rank ={coin.market_cap_rank}
                  priceChange = {coin.price_change_percentage_24h}
                  
                  />
         
          )
        }
         )
      
      }
      </div>
    </div>
    
 );
}

export default App;
