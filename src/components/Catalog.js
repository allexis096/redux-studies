import { useEffect, useState } from "react";

import CatalogItem from './CatalogItem';

import api from '../services/api';

function Catalog() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Catalog;