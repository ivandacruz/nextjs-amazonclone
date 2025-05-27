import { use } from 'react'
import { data } from '@/lib/data'
import { notFound } from 'next/navigation'
import { ProductCard } from '@/components/product-card'

type CategoryPageProps = {
  params: Promise<{ id: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { id } = use(params)
  const category = data.categories.find((c) => c.id === id)

  if (!category) {
    notFound()
  }

  const categoryProducts = data.featuredProducts.filter(
    (product) => product.category === category.id
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">{category.name}</h1>
      <p className="mb-8 text-gray-600">{category.description}</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
} 