import { Link, useLocation } from "react-router-dom";

export const ProductList = ({ products }) => {
  const location = useLocation();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`${product.id}`} state={{ from: location }}>
            <img src="https://via.placeholder.com/400x200" alt="" />
            <div>{product.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
