'use client'

import { APP_NAME } from '@/lib/constants'
import { MapPin, Clock, Phone, Store, ShoppingBag, Package, Truck, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

const storeImages = [
  {
    src: '/images/stores/store-1.jpg',
    alt: 'Nossa loja no Shopping Morumbi',
  },
  {
    src: '/images/stores/store-2.jpg',
    alt: 'Nossa loja no Shopping Cidade São Paulo',
  },
  {
    src: '/images/stores/store-3.jpg',
    alt: 'Nossa loja no Shopping Villa-Lobos',
  },
]

export default function StoresPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Nossas Lojas</h1>

        {/* Hero Section with Carousel */}
        <div className="mb-12">
          <div className="relative bg-muted rounded-lg overflow-hidden">
            {/* Carousel */}
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {storeImages.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[400px]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Navigation */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h2 className="text-3xl font-semibold mb-4">Encontre a Loja Mais Próxima</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Visite uma de nossas lojas físicas e conheça nossa experiência completa de compras. 
                  Oferecemos atendimento personalizado, produtos exclusivos e serviços especiais.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button size="lg" className="w-full md:w-auto bg-white text-black hover:bg-white/90">
                    <MapPin className="w-4 h-4 mr-2" />
                    Encontrar Loja
                  </Button>
                  <Button size="lg" variant="outline" className="w-full md:w-auto border-white text-white hover:bg-white/10">
                    <Clock className="w-4 h-4 mr-2" />
                    Horários de Funcionamento
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store Locations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Lojas em Destaque</h2>
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Store className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Shopping Morumbi</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Av. Roque Petroni Júnior, 1089 - São Paulo, SP
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Segunda a Sábado: 10h às 22h | Domingo: 14h às 20h
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      (11) 4002-8922
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Como Chegar
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar
                  </Button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Store className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Shopping Cidade São Paulo</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Av. Paulista, 1313 - São Paulo, SP
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Segunda a Sábado: 10h às 22h | Domingo: 14h às 20h
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      (11) 4002-8923
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Como Chegar
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar
                  </Button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Store className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Shopping Villa-Lobos</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Av. das Nações Unidas, 4777 - São Paulo, SP
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Segunda a Sábado: 10h às 22h | Domingo: 14h às 20h
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      (11) 4002-8924
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Como Chegar
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Serviços Disponíveis</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Compras na Loja</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Produtos exclusivos</li>
                <li>• Atendimento personalizado</li>
                <li>• Teste de produtos</li>
                <li>• Promoções especiais</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Retirada na Loja</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Compra online, retirada na loja</li>
                <li>• Entrega expressa</li>
                <li>• Troca facilitada</li>
                <li>• Devolução na loja</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Serviços Financeiros</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cartão de crédito próprio</li>
                <li>• Parcelamento sem juros</li>
                <li>• Programa de pontos</li>
                <li>• Cashback</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Store Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Diferenciais das Nossas Lojas</h2>
          <div className="border rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Experiência de Compra</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ambiente moderno e acolhedor</li>
                  <li>• Atendimento especializado</li>
                  <li>• Produtos em exposição</li>
                  <li>• Teste de produtos</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Serviços Exclusivos</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Wi-Fi gratuito</li>
                  <li>• Área de descanso</li>
                  <li>• Cafeteria</li>
                  <li>• Estacionamento</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Precisa de Ajuda?</h2>
          <p className="text-muted-foreground mb-4">
            Entre em contato com nossa equipe de atendimento:
          </p>
          <div className="space-y-2">
            <p>📧 Email: lojas@nxamzn.com.br</p>
            <p>📞 Telefone: (11) 4002-8922</p>
            <p>💬 Chat: Disponível 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
} 