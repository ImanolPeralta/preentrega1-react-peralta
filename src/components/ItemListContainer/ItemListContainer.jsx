import { useState, useEffect } from "react";
import {
  getProductsByCategory,
  getProductsBySubcategory,
  getTopProducts,
} from "../../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId, subcategoryId } = useParams();

  // Título dinámico según ruta
  let title = "Productos Destacados";

  if (categoryId) {
    const categoryTitles = {
      hardware: "Productos de Hardware",
      accesorios: "Accesorios de Oficina",
      decoracion: "Decoración y Personalización",
    };
    title = categoryTitles[categoryId] || "Productos";
  } else if (subcategoryId) {
    const subcategoryTitles = {
      notebooks: "Notebooks",
      escritorio: "Computadoras de Escritorio",
      monitores: "Monitores",
      gabinetes: "Gabinetes para PC",
      mouses: "Mouses",
      teclados: "Teclados",
      auriculares: "Auriculares",
      escritorios: "Escritorios Ergonómicos",
      sillas: "Sillas Ergonómicas",
      luces: "Luces LED",
      cuadros: "Cuadros Temáticos",
      setup: "Accesorios Decorativos para Setups",
    };
    title = subcategoryTitles[subcategoryId] || "Productos";
  }

  useEffect(() => {
    let fetchFunction;
    let id;

    if (subcategoryId) {
      fetchFunction = getProductsBySubcategory;
      id = subcategoryId;
    } else if (categoryId) {
      fetchFunction = getProductsByCategory;
      id = categoryId;
    } else {
      fetchFunction = getTopProducts;
    }

    fetchFunction(id)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId, subcategoryId]);

  return (
    <div>
      <h1 className="section-title">{title}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
