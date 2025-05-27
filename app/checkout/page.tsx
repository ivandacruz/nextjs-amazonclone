'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useCart } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'
import { CreditCard, Lock } from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const { user } = useAuth()
  const { items, total } = useCart()

  useEffect(() => {
    // Se não houver usuário logado, redireciona para a página de login
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Finalizar Compra</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="border rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-medium">Informações de Pagamento</h2>
            
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="cardNumber" className="text-sm font-medium">
                  Número do Cartão
                </label>
                <div className="relative">
                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-2 border rounded-md pl-10"
                    required
                  />
                  <CreditCard className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="expiry" className="text-sm font-medium">
                    Data de Expiração
                  </label>
                  <input
                    id="expiry"
                    type="text"
                    placeholder="MM/AA"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cvv" className="text-sm font-medium">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome no Cartão
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nome como está no cartão"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium">
                  Endereço de Entrega
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Rua, número, complemento"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium">
                    Cidade
                  </label>
                  <input
                    id="city"
                    type="text"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="state" className="text-sm font-medium">
                    Estado
                  </label>
                  <input
                    id="state"
                    type="text"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="zipCode" className="text-sm font-medium">
                  CEP
                </label>
                <input
                  id="zipCode"
                  type="text"
                  placeholder="00000-000"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </form>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-medium">Resumo do Pedido</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal ({items.length} {items.length === 1 ? 'item' : 'itens'})</span>
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(total)}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Frete</span>
                <span>Grátis</span>
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

            <Button className="w-full">
              <Lock className="w-4 h-4 mr-2" />
              Finalizar Pagamento
            </Button>

            <p className="text-sm text-gray-500 text-center">
              Seus dados estão protegidos com criptografia SSL
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 