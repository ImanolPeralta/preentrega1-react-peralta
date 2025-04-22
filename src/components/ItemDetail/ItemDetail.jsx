import "../ItemDetail/ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, price, stock, description, image }) => {
  return (
    <div>
      <article className='CardItem'>
        <header className='header'>
          <h2 className='ItemHeader'>{name}</h2>
        </header>
        <picture>
          <img src={image} alt={name} className='ItemImg' />
        </picture>
        <section>
          <p className='Info'>Precio: ${price}</p>
          <p className='Info'>Descripción: {description}</p>
          <p className='Info'>Stock disponible: {stock}</p>
          <footer className='ItemFooter'>
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={(quantity) => {
                console.log('Cantidad agregada', quantity);
              }}
            />
          </footer>
        </section>
      </article>
    </div>
  );
};

export default ItemDetail;
