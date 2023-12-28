import React from "react";

function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7835/7835563.png"
          alt=""
        />
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg"
            alt="image shows"
          />
        </div>
        <div className="text-wrapper item">
          <span>Photo graphy</span>
          <span>Price : 200 rs/-</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
