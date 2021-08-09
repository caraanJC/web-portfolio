import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import '../styles/CartItem.css';

import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import DeleteIcon from '@material-ui/icons/Delete';

interface IProps {
  cartItem: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
    count: number;
  };
}

const CartItem: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const { increaseCartItem, decreaseCartItem, deleteCartItem } =
    bindActionCreators(actionCreators, dispatch);

  const plusButtonClickHandler = () => {
    increaseCartItem(props.cartItem.id);
  };
  const minuButtonClickHandler = () => {
    decreaseCartItem(props.cartItem.id);
  };
  const deleteButtonClickHandler = () => {
    deleteCartItem(props.cartItem.id);
  };

  return (
    <li className='cartItem' key={props.cartItem.id}>
      <div className='cartItem__imgContainer'>
        <img
          className='cartItem__img'
          src={props.cartItem.image}
          alt={props.cartItem.name}
        />
      </div>

      <div className='cartItem__details'>
        <p className='cartItem__name'>{props.cartItem.name}</p>
        <button
          className='cartItem__button cartItem__button--plus'
          onClick={plusButtonClickHandler}
        >
          <AddBoxIcon />
        </button>
        <button
          className='cartItem__button cartItem__button--minus'
          onClick={minuButtonClickHandler}
        >
          <IndeterminateCheckBoxIcon />
        </button>
        <button
          className='cartItem__button cartItem__button--delete'
          onClick={deleteButtonClickHandler}
        >
          <DeleteIcon />
        </button>
        <p className='cartItem__price'>
          Php {props.cartItem.price} x {props.cartItem.count} = Php{' '}
          {props.cartItem.price * props.cartItem.count}
        </p>
      </div>
    </li>
  );
};

export default CartItem;