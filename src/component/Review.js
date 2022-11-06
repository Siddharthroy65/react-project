import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
export default function Review(prop) {
  // let [showMore, setShowMore] = useState(false);
  return (
    <div className='container' style={{ width: '50rem', 'padding-top':'1rem'}}>
    <div className="card" style={{ width: '50rem'}}>
    <div className="card-header">
      <div className='row'>
      <h3 className='col-md-10'>Review</h3>
  {/*<button  className='col-md-2 btn btn-primary' type="submit" onSubmit={(e)=>{setShowMore(!showMore)}}>Show All Ratings</button>*/}
      </div>
      
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"><b>Title</b>: {prop.title}</li>
      <li className="list-group-item"><b>Comment</b>: {prop.comment}</li>
      <li className="list-group-item"><b>Usefulness</b>: {prop.usefulness}</li>
      <li className="list-group-item"><b>Reviewer name</b>: {prop.reviewer}</li>
      <li className="list-group-item"><b>Overall Rating</b>: <ReactStars count={prop.ratings.Overall} size={14} color="#ffd700" /> </li>
      

    </ul>
  </div>
  </div>
    
  );
}
