import { Menu } from 'antd';
import CartWidget from './CartWidget';
import '../styles.css';
import logo from '../assets/images/devstorelogo.jpg';

const items = [
    {
        label: 'Hardware',
        key: 'hardware',
        children: [
            { key: 'hardware-1', label: 'Computadoras de Escritorio' },
            { key: 'hardware-2', label: 'Notebooks' },
            { key: 'hardware-3', label: 'Monitores' },
            { key: 'hardware-4', label: 'Gabinetes para PC' },
            { key: 'hardware-5', label: 'Mouses' },
            { key: 'hardware-6', label: 'Teclados' },
            { key: 'hardware-7', label: 'Auriculares' }
        ],
    },
    {
        label: 'Accesorios de Oficina',
        key: 'accesorios',
        children: [
            { key: 'accesorios-1', label: 'Escritorios Ergonómicos' },
            { key: 'accesorios-2', label: 'Sillas Ergonómicas' }
        ]
    },
    {
        label: 'Personalización y Decoración',
        key: 'decoracion',
        children: [
            { key: 'decoracion-1', label: 'Luces LED' },
            { key: 'decoracion-2', label: 'Cuadros Temáticos' },
            { key: 'decoracion-3', label: 'Accesorios Decorativos para Setups' }
        ]
    }
];

const NavBar = () => {
    return (
        <div className="navbar">
            <span className="brand">
                <span className="brand-name">The Dev Store</span>
                <img src={logo} alt="Logo" />
            </span>
            <Menu mode="horizontal" className="custom-menu" items={items} />
            <CartWidget />
        </div>
    );
}

export default NavBar;