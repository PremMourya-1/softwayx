import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <main className="section-padding-top pt-24 section-padding-bottom">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="badge mb-4 inline-block">Products</span>
          <h1 className="section-title mb-4">
            Explore Our <span className="gradient-text">Products</span>
          </h1>
          <p className="section-subtitle mx-auto max-w-2xl">
            Discover the platforms we are building to help businesses with
            sales, operations, growth, and customer engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Want to learn more about our products?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Visit product pages for detailed feature lists, screenshots and next
            steps for each platform.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-3">
            Contact Sales
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Products;
