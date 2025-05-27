import { ProductCard } from '@/components/ui/product-card'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Produtos em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
} 