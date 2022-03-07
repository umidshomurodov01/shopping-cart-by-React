export default function BasketItem(props){
  const {id,name,price,quantity,incrementQuantity,decrementQuantity,removeFromBasket = Function.prototype} = props;

  return(
    <li className="collection-item ">
      {name} x{quantity} = {price * quantity}<b>$</b>
    <span className="secondary-content  ">
    <i class="material-icons iconbskp" onClick={()=> incrementQuantity(id) }>add</i>
    <i class="material-icons iconbskr" onClick={()=> decrementQuantity(id)}>remove</i>
    <i class="material-icons basket-delete" onClick={()=>removeFromBasket(id)}>delete_forever</i>
      </span>
      </li>

  )
}