'use client'

import { APP_NAME } from '@/lib/constants'
import { Search, Package, CreditCard, Truck, RefreshCw, Shield, MessageCircle } from 'lucide-react'

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Central de Ajuda</h1>

        {/* Search Section */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Como podemos ajudar?"
              className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <div className="p-4 border rounded-lg hover:border-primary transition-colors">
            <Package className="w-6 h-6 mb-2" />
            <h3 className="font-semibold">Pedidos</h3>
            <p className="text-sm text-muted-foreground">Acompanhe e gerencie seus pedidos</p>
          </div>
          <div className="p-4 border rounded-lg hover:border-primary transition-colors">
            <CreditCard className="w-6 h-6 mb-2" />
            <h3 className="font-semibold">Pagamentos</h3>
            <p className="text-sm text-muted-foreground">Métodos de pagamento e faturas</p>
          </div>
          <div className="p-4 border rounded-lg hover:border-primary transition-colors">
            <Truck className="w-6 h-6 mb-2" />
            <h3 className="font-semibold">Entregas</h3>
            <p className="text-sm text-muted-foreground">Informações sobre envio e rastreamento</p>
          </div>
          <div className="p-4 border rounded-lg hover:border-primary transition-colors">
            <RefreshCw className="w-6 h-6 mb-2" />
            <h3 className="font-semibold">Devoluções</h3>
            <p className="text-sm text-muted-foreground">Política de devolução e trocas</p>
          </div>
          <div className="p-4 border rounded-lg hover:border-primary transition-colors">
            <Shield className="w-6 h-6 mb-2" />
            <h3 className="font-semibold">Segurança</h3>
            <p className="text-sm text-muted-foreground">Proteção de dados e privacidade</p>
          </div>
          <div className="p-4 border rounded-lg hover:border-primary transition-colors">
            <MessageCircle className="w-6 h-6 mb-2" />
            <h3 className="font-semibold">Contato</h3>
            <p className="text-sm text-muted-foreground">Fale com nossa equipe</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-6">Perguntas Frequentes</h2>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Pedidos e Entregas</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Como rastrear meu pedido?</h4>
                <p className="text-muted-foreground">
                  Você pode rastrear seu pedido através do seu painel de conta ou usando o número de rastreamento enviado por email.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Quais são os prazos de entrega?</h4>
                <p className="text-muted-foreground">
                  Os prazos variam de acordo com a região e o método de envio escolhido. Em geral, entregamos em 2-5 dias úteis.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Pagamentos</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Quais formas de pagamento são aceitas?</h4>
                <p className="text-muted-foreground">
                  Aceitamos cartões de crédito, débito, boleto bancário e PIX.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Como solicitar reembolso?</h4>
                <p className="text-muted-foreground">
                  Você pode solicitar reembolso através do seu painel de conta ou entrando em contato com nosso suporte.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Devoluções e Trocas</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Qual é o prazo para devolução?</h4>
                <p className="text-muted-foreground">
                  Você tem até 7 dias para solicitar a devolução de produtos não utilizados.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Como fazer uma troca?</h4>
                <p className="text-muted-foreground">
                  Solicite a troca através do seu painel de conta ou entre em contato com nosso suporte.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Precisa de mais ajuda?</h2>
          <p className="text-muted-foreground mb-4">
            Nossa equipe está pronta para ajudar você. Entre em contato através dos canais abaixo:
          </p>
          <div className="space-y-2">
            <p>📧 Email: suporte@nxamzn.com.br</p>
            <p>📞 Telefone: (11) 4002-8922</p>
            <p>💬 Chat: Disponível 24/7 no canto inferior direito</p>
          </div>
        </div>
      </div>
    </div>
  )
} 