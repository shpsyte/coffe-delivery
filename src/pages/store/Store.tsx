import { products } from "../../services/products";
import { Hero } from "./componentes/Hero";
import { Card } from "../../components/Card";

export function Store() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="flex flex-wrap gap-8 mb-32">
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
