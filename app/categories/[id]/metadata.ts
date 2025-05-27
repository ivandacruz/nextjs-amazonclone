import { Metadata } from 'next'
import { data } from '@/lib/data'

type CategoryMetadataProps = {
  params: { id: string }
}

export async function generateMetadata({ params }: CategoryMetadataProps): Promise<Metadata> {
  const category = data.categories.find((c) => c.id === params.id)

  if (!category) {
    return {
      title: 'Categoria não encontrada',
    }
  }

  return {
    title: category.name,
    description: category.description,
  }
} 