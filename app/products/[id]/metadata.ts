import { Metadata } from 'next'
import { data } from '@/lib/data'

type ProductMetadataProps = {
  params: { id: string }
}

export async function generateMetadata({ params }: ProductMetadataProps): Promise<Metadata> {
  const product = data.featuredProducts.find((p) => p.id === params.id)

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