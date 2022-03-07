export default function Cart(props){
 const {quantity = 0, handleBasketShow = Function.prototype} = props
  return(
    <div className="cart #004d40 teal darken-4 " style={{borderRadius : "6px"}}
    onClick={handleBasketShow}
    >
      <div style={{padding : "10px"}}>
      <i className="large material-icons cart-icon" style={{fontSize : "30px", color : "#fff"}}>add_shopping_cart</i>
      {quantity ? <span style={{fontSize : "16px", color : "#fff"}}>{quantity}</span> : null}
    </div>
    </div>

  )
}