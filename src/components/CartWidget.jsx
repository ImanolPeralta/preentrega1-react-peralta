import { ShoppingCartOutlined } from '@ant-design/icons';

const CartWidget = ({ itemCount = 0 }) => {
  return (
    <div className="cart-widget">
      <ShoppingCartOutlined />
      <span className="cart-count">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
