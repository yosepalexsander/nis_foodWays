import { Fragment } from "react";
import { Grid } from "@material-ui/core";

import CartItem from "../micro/CartItem";

import "./styles.css";

const CartList = (props) => {
  const { cart, dispatchAction, isFromCart } = props;

  /** Logic to handle product in cart context
   * @param  product
   */
  const incrementProduct = (product) => {
    dispatchAction({ type: "ADD_PRODUCT", payload: product });
  };

  const decrementProduct = (product) => {
    dispatchAction({ type: "REMOVE_PRODUCT", payload: product });
  };
  const removeProduct = (product) => {
    dispatchAction({ type: "REMOVE_CART", payload: product });
  };
  return (
    <Grid id="cart-list" item container xs={7} direction="column" flexWrap="nowrap">
      <hr className="divider" />
      {cart.map((product) => (
        <Fragment key={product.id}>
          <Grid container item>
            <CartItem
              item={product}
              incrementQty={isFromCart && incrementProduct}
              decrementQty={isFromCart && decrementProduct}
              removeItem={isFromCart && removeProduct}
            />
          </Grid>
          <hr className="divider" />
        </Fragment>
      ))}
    </Grid>
  );
};

export default CartList;
