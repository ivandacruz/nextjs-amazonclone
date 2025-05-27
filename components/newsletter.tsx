'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o email para sua API
    console.log('Email inscrito:', email)
    setIsSubscribed(true)
    setEmail('')
  }

  return (
    <section className="bg-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Mail className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-bold">Inscreva-se em nossa Newsletter</h2>
          <p className="mt-2 text-gray-600">
            Receba as últimas novidades, ofertas exclusivas e atualizações diretamente no seu email.
          </p>

          {isSubscribed ? (
            <div className="mt-6 rounded-lg bg-green-50 p-4 text-green-700">
              Obrigado por se inscrever! Você receberá nossas atualizações em breve.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="max-w-md"
              />
              <Button type="submit">
                Inscrever-se
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
} 