import React from "react";
import { Link } from "react-router-dom";

function CartItem(props) {
  return (
    <tr>
      <td>{props.product.id}</td>
      <td>
        <img
          className="img-thumbnail"
          src={`images/${props.product.image}`}
          alt={props.product.title}
        />
      </td>
      <td>
        <Link to={`product/${props.product.id}`}>{props.product.title}</Link>
      </td>
      <td>
        <input value={props.quantity} type="text" disabled />
      </td>
      <td>₹{props.product.price}</td>
      <td>
        <button
          onClick={() => {
            props.removeFromCart(props.product.id);
          }}
          className="btn btn-outline-danger"
        >
          <span className="icon is-small">
            {" "}
            <i className="fa fa-trash" aria-hidden="true"></i>{" "}
          </span>
        </button>
      </td>
    </tr>
  );
}
export default CartItem;
