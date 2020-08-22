import React from "react";
import { Link } from "react-router-dom";

function ProductItem(props) {
  return (
    <div className="card p-0 float-left">
      <Link to={createLink(props.product.id)}>
        <img
          width="250px"
          height="250px"
          className="card-img-top"
          src={`images/${props.product.image}`}
          alt={props.product.title}
        />
      </Link>
      <div className="card-body">
        <div>
          <p className="text-left">₹{props.product.price}</p>
        </div>
        <Link to={createLink(props.product.id)} className="no-underline">
          <h6 className="card-title product-title mt-1">
            {props.product.title}
          </h6>
        </Link>
        <div className="card-text">
          <small className="text-muted">
            <p> Brand:{props.product.brand}</p>
          </small>
        </div>
      </div>
    </div>
  );
  // }
}
function createLink(id) {
  return "/product/" + id;
}

export default ProductItem;
