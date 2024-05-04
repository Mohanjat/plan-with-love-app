import { useState } from "react";


function Card({id,image,info,price,name,removeTour}){

    const [readmore, setReadmore] = useState(false);
     
    const description = readmore ? info : `${info.substring(0,200)}...`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return (
        <div className="card">
           
            <img className="image"  src={image} ></img>
            
            <div className="card_info">

                <div className="card_details">
                    <h4 className="tour_price">₹ {price}</h4>
                    <h4 className="tour_name">{name}</h4>
                </div>

                <div className="tour_description" >
                    {description}
                    <span className="read_more" onClick={readmoreHandler} >
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>

            </div>
            
            
            <button className="not_interested" onClick={()=> removeTour(id)} >
                Not Interested
            </button>

        </div>
    )
}

export default Card;