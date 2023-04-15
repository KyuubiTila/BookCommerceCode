import { useEffect, useState } from 'react';
import { ProductCard } from '../../../components/Elements/ProductCard';

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await fetch('http://localhost:8000/featured_products');
        if (!response.ok) throw new Error('Problem fetching local data');
        const data = await response.json();
        setProducts(data);
      };
      fetchProducts();
    } catch (err) {
      console.error(`${err} 💥`);

      throw err;
    }
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
