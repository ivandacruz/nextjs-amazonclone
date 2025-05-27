import { Newsletter } from '@/components/newsletter'
import { ProductCard } from '@/components/product-card'
import { data } from '@/lib/data'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/5">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">
              Bem-vindo à AmazonClone
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Encontre os melhores produtos com os melhores preços
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Produtos em Destaque</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Categorias</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 p-6">
                <h3 className="text-xl font-bold text-white">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 