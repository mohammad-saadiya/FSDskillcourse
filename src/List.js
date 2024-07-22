function ReviewComp() {
    const reviews = [
        {user:"Reviewer Name1",desc:"this product is good"},
        {user:"Reviewer Name2",desc:"this product is not good"}
    ];
    const listreview = reviews.map((review, index) => 
      <div key ={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div >
          <img src="/userlogo.png" style={{height:"80px"}}/>
          </div>
          <div>
          <h2>{review.user}</h2>
          <p>{review.desc}</p>
          </div>
      </div>
    )
    return (
       <div>
        <h1>Reviews</h1>
        <ul>
            {listreview}
        </ul>
       </div>
    );
}
export default ReviewComp;