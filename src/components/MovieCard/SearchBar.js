import React from 'react'
import {Input} from 'reactstrap' 
import Protypes from 'prop-types'
import Rate from './Rate'

const SearchBar = ({handleSearch,ratingSearch, setRatingSearch}) =>{
    return (
        <div style ={{display:"flex"}}>
            <div style ={{width:"50%"}}>
                <Input type="text"  
                placeholder ="enter the title you search.."
                onChange ={handleSearch}
                
            />
            </div>
            
            <div  style={{cursor:"pointer"}} >
                <Rate
                    ClassName="row"
                    rating ={ratingSearch}
                    addStar={setRatingSearch} ></Rate>
            </div>
        </div>       
    )
}
SearchBar.prototype={
    handleSearch: Protypes.func.isRequired
}
export default SearchBar