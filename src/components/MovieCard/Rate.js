import React from 'react'


const Rate  = ({ rating,addStar =()=>{}}) =>{
    const stars = (rate)=>{
        let starArray = []
        for (let i = 0; i<5; i++){
            if (i < rate){
                starArray.push(
                    <span 
                        className ='rating' 
                        key ={i}
                        onClick={()=>addStar(i+1) }
                        style ={{curser :'pointer'}}
                        > 
                        ★
                    </span>
                )
            }else{
                starArray.push(
                    <span 
                        className ='rating' 
                        key ={i}
                        onClick={()=>addStar(i+1) }
                        style ={{curser :'pointer'}}
                        > 
                        ☆
                    </span>
                )

            }
        }
        return starArray
    }
    return (
        <div>
            {stars(rating)}
        </div>
    )
}
export default Rate;