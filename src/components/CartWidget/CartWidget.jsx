import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import '../CartWidget/CartWidget.css';

const CartWidget = ({ itemCount = 0 }) => {
  return (
    <div className="cart-widget">
      <Badge count={itemCount} overflowCount={99} showZero>
        <ShoppingCartOutlined className="cart-icon" />
      </Badge>
    </div>
  );
};

export default CartWidget;
