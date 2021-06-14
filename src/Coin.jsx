import React from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

const Coin = ({key,name,image,symbol,volume,price,rank,priceChange})=>
{
    return(
    <div className="coin">
        <div className="image">
            <div className="content2">
            <img src={image} alt=""/>
            </div>
            <div className="content">
             <h4>{name}</h4>
             </div>
             <div className="content">
             <h4>{symbol}</h4>
             </div>
        </div>
        
        
        <div className="price">
            <h4>{price}</h4>
        <h4>{volume}</h4>
        <h4>{rank}</h4>
        {
            priceChange>0?(

        <h4 className="green"><TrendingUpIcon/>{priceChange}%</h4>
            ):
            (
                <h4 className="red"><TrendingDownIcon/>{priceChange}%</h4>
            )           
}
        </div>
    </div> 

    )
}

export default Coin;