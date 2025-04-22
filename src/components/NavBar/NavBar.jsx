import { Menu } from 'antd';
import CartWidget from '../CartWidget/CartWidget'
import '../../styles.css';
import logo from '../../assets/images/devstorelogo.jpg';
import { Link } from 'react-router-dom';

const items = [
  {
    label: <Link to="/category/hardware">Hardware</Link>,
    key: 'hardware',
    children: [
      {
        key: 'hardware-1',
        label: <Link to="/subcategory/pcescritorio">Computadoras de Escritorio</Link>,
      },
      {
        key: 'hardware-2',
        label: <Link to="/subcategory/notebooks">Notebooks</Link>,
      },
      {
        key: 'hardware-3',
        label: <Link to="/subcategory/monitores">Monitores</Link>,
      },
      {
        key: 'hardware-4',
        label: <Link to="/subcategory/gabinetes">Gabinetes para PC</Link>,
      },
      {
        key: 'hardware-5',
        label: <Link to="/subcategory/mouses">Mouses</Link>,
      },
      {
        key: 'hardware-6',
        label: <Link to="/subcategory/teclados">Teclados</Link>,
      },
      {
        key: 'hardware-7',
        label: <Link to="/subcategory/auriculares">Auriculares</Link>,
      },
    ],
  },
  {
    label: <Link to="/category/accesorios">Accesorios de Oficina</Link>,
    key: 'accesorios',
    children: [
      {
        key: 'accesorios-1',
        label: <Link to="/subcategory/escritorios">Escritorios Ergonómicos</Link>,
      },
      {
        key: 'accesorios-2',
        label: <Link to="/subcategory/sillas">Sillas Ergonómicas</Link>,
      },
    ],
  },
  {
    label: <Link to="/category/decoracion">Personalización y Decoración</Link>,
    key: 'decoracion',
    children: [
      {
        key: 'decoracion-1',
        label: <Link to="/subcategory/luces">Luces LED</Link>,
      },
      {
        key: 'decoracion-2',
        label: <Link to="/subcategory/cuadros">Cuadros Temáticos</Link>,
      },
      {
        key: 'decoracion-3',
        label: <Link to="/subcategory/accesorios">Accesorios Decorativos para Setups</Link>,
      },
    ],
  },
];

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="brand">
        <span className="brand-name">The Dev Store</span>
        <img src={logo} alt="Logo" />
      </Link>
      <Menu mode="horizontal" className="custom-menu" items={items} />
      <CartWidget />
    </div>
  );
};

export default NavBar;
