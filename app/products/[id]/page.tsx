'use client'

import { use } from 'react'
import { useCart } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'
import { data } from '@/lib/data'
import { notFound } from 'next/navigation'
import { Star } from 'lucide-react'

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params)
  const { addItem } = useCart()
  const product = data.featuredProducts.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">
              {product.rating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-500">
              ({product.reviews} avaliações)
            </span>
          </div>
          <p className="text-2xl font-bold">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </p>
          <Button
            onClick={handleAddToCart}
            className="w-full"
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? 'Fora de Estoque' : 'Adicionar ao Carrinho'}
          </Button>
        </div>
      </div>
    </div>
  )
} 