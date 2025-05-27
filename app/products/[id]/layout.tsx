import { use } from 'react'
import { Metadata } from 'next'
import { data } from '@/lib/data'

type ProductLayoutProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductLayoutProps): Promise<Metadata> {
  const { id } = use(params)
  const product = data.featuredProducts.find((p) => p.id === id)

  if (!product) {
    return {
      title: 'Produto não encontrado',
    }
  }

  return {
    title: product.name,
    description: product.description,
  }
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 