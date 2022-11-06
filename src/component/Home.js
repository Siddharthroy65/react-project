import React, { useState } from "react";
import Axios from "axios";
import Review from "./Review";

export default function Home() {
  const BASE_URL = "http://www.i2ce.in";
  const [data, setData] = useState({
    product_id: '',
    viewer_id: '',
  });
  const [reviewData, setReviewData] = useState([])

  function submit(e) {
    e.preventDefault();
    console.log(`${BASE_URL}/reviews/${data.product_id}/${data.viewer_id}`);
    Axios.get(`${BASE_URL}/reviews/${data.product_id}/${data.viewer_id}`,{ mode: "no-cors" }).then(
      (res) => {
        console.log(res.data);
        setReviewData(res.data.reviews)
      }
    );
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div className="container" style={{ width: "50rem" }}>
      <div className="row">
        <div className="col-sm-12">
          <h1 className="my-3">Select Product Id and Viewer Id Using React</h1>

          <div className="row mb-3">
            <div className="form-group col-md-5">

              <label className="mb-2">Product Ids</label>
                <select
                  name="Product ids"
                  onChange={(e) => handle(e)}
                  id="product_id"
                  value={data.product_id}
                  className="form-control"
                >
                <option  >--Select Product Ids--</option>
                {Array.from({length:20}, (_,index) => index+1).map((x)=><option key={x}>{x}</option>)}
              </select>
            </div>
            <div className="form-group col-md-5">
              <label className="mb-2">Viewer Ids</label>
              <select
                name="Viewer Id"
                onChange={(e) => handle(e)}
                id="viewer_id"
                value={data.viewer_id}
                className="form-control"
              >
                <option>--Select Viewer Ids--</option>
                {Array.from({length:10}, (_,index) => index+1).map((x)=><option key={x}>{x}</option>)}
              </select>
            </div>
            <div className="form-group col-md-2 mt-4">
              <button
                className="btn btn-success mt-2"
                onClick={(e) => submit(e)}
              >
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="row">
      {reviewData.map(review=> <Review 
        title={review.title}
        comment={review.comment}
        usefulness={review.usefulness}
        reviewer={review.reviewer && review.friend ? review.reviewer.name: ""}
        ratings={review.ratings}
        ></Review>)}
      </div>
      {/*<div>
      <button className="btn btn-success mt-2" onClick={(e) => submit(e)}>
                Next
      </button>
      </div>
      */}
      
    </div>
  );
}



