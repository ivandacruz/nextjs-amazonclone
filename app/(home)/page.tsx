import { HomeCarousel } from '@/components/shared/home/home-carousel'
import { FeaturedProducts } from '@/components/shared/home/featured-products'
import { CategoryGrid } from '@/components/shared/home/category-grid'
import { data } from '@/lib/data'
import React from 'react'

export default async function Page() {
  return (
    <div className="space-y-8">
      <HomeCarousel items={data.carousels} />
      <div className="container">
        <FeaturedProducts products={data.featuredProducts} />
        <CategoryGrid categories={data.categories} />
      </div>
    </div>
  )
}
