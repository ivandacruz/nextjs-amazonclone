'use client'

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  brand: string
  rating: number
  reviews: number
  stock: number
}

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

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
    <div className="group relative">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">
              {product.rating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-500">
              ({product.reviews} avaliações)
            </span>
          </div>
          <p className="text-lg font-medium text-gray-900">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </p>
        </div>
      </Link>
      <Button
        onClick={handleAddToCart}
        className="mt-4 w-full"
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? 'Fora de Estoque' : 'Adicionar ao Carrinho'}
      </Button>
    </div>
  )
} 