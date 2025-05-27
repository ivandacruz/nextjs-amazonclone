'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'
import { ShoppingCart, Search, User, LogOut } from 'lucide-react'
import { data } from '@/lib/data'
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export function Header() {
  const { items } = useCart()
  const { user, logout } = useAuth()
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<typeof data.featuredProducts>([])
  const searchRef = useRef<HTMLDivElement>(null)

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = data.featuredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchResults.length > 0) {
      // Navigate to the first result
      window.location.href = `/products/${searchResults[0].id}`
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">{APP_NAME}</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {data.headerMenus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative" ref={searchRef}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
              className="h-9 w-9"
            >
              <Search className="h-5 w-5" />
            </Button>

            {isSearchVisible && (
              <div className="absolute right-0 top-full mt-2 w-96 rounded-md border bg-background p-2 shadow-lg">
                <form onSubmit={handleSearch} className="mb-2">
                  <div className="flex gap-2">
                    <Input
                      type="search"
                      placeholder="Buscar produtos..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-9"
                      autoFocus
                    />
                    <Button type="submit" size="sm" className="h-9">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </form>

                {searchResults.length > 0 && (
                  <div className="max-h-96 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors"
                        onClick={() => setIsSearchVisible(false)}
                      >
                        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{product.name}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            {product.description}
                          </p>
                          <p className="text-sm font-medium">
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(product.price)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {searchQuery && searchResults.length === 0 && (
                  <p className="p-2 text-sm text-muted-foreground text-center">
                    Nenhum produto encontrado
                  </p>
                )}
              </div>
            )}
          </div>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative h-9 w-9">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm">{user.name}</span>
              <Button variant="ghost" size="icon" onClick={logout} className="h-9 w-9">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
} 