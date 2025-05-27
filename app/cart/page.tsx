'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/cart-context'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { ShoppingCart, Trash2, Plus, Minus, LogIn } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CartPage() {
  const router = useRouter()
  const { items, total, removeItem, updateQuantity, clearCart } = useCart()
  const { user } = useAuth()
  const [showLoginModal, setShowLoginModal] = useState(false)

  const handleCheckout = () => {
    if (user) {
      router.push('/checkout')
    } else {
      setShowLoginModal(true)
    }
  }

  const handleLogin = () => {
    setShowLoginModal(false)
    router.push('/login')
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h1 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h1>
          <p className="text-gray-500 mb-8">
            Adicione produtos ao seu carrinho para continuar comprando
          </p>
          <Link href="/products">
            <Button>Continuar Comprando</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Carrinho de Compras ({items.length} {items.length === 1 ? 'item' : 'itens'})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-lg border p-4"
              >
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                    <p className="text-lg font-medium">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(item.price * item.quantity)}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-medium">Resumo do Pedido</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(total)}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Frete</span>
                <span>Calculado no checkout</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(total)}
                  </span>
                </div>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full"
            >
              {user ? 'Finalizar Compra' : 'Fazer Login para Continuar'}
            </Button>
            <Button
              onClick={clearCart}
              variant="outline"
              className="w-full"
            >
              Limpar Carrinho
            </Button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title="Login Necessário"
        action={{
          label: 'Fazer Login',
          onClick: handleLogin
        }}
      >
        <div className="text-center space-y-4">
          <LogIn className="w-12 h-12 mx-auto text-gray-400" />
          <p className="text-gray-600">
            Para finalizar sua compra, você precisa estar logado.
            Faça login ou crie uma conta para continuar.
          </p>
        </div>
      </Modal>
    </div>
  )
} 