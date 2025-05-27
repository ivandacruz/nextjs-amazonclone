import { data } from '@/lib/data'
import { CategoryGrid } from '@/components/shared/home/category-grid'

export const metadata = {
  title: 'Categorias',
}

export default function CategoriesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold">Categorias</h1>
          <p className="text-muted-foreground mt-2">
            Explore nossas categorias e encontre o que você procura
          </p>
        </div>

        <CategoryGrid categories={data.categories} />
      </div>
    </div>
  )
} 