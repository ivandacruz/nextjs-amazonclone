import Image from 'next/image'
import Link from 'next/link'

interface Category {
  id: string
  name: string
  description: string
  image: string
}

interface CategoryGridProps {
  categories: Category[]
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Categorias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-[4/3] w-full">
              <Image
                src={category.image}
                alt={category.name}
                width={800}
                height={600}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm opacity-90">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
} 