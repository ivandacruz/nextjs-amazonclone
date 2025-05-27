'use client'

import { APP_NAME } from '@/lib/constants'
import { Truck, Clock, MapPin, Package, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Envio e Entrega</h1>

        {/* Main Info */}
        <div className="mb-12">
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Informações Importantes</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <p className="text-muted-foreground">
                  Entregamos para todo o Brasil com diferentes opções de envio.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <p className="text-muted-foreground">
                  Frete grátis para compras acima de R$ 99,00 em produtos selecionados.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <p className="text-muted-foreground">
                  Rastreamento em tempo real do seu pedido.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Métodos de Envio</h2>
          <div className="grid gap-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Entrega Padrão</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>• Prazo de entrega: 3-5 dias úteis</p>
                <p>• Rastreamento disponível</p>
                <p>• Entrega em dias úteis</p>
                <p>• Frete a partir de R$ 9,90</p>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Entrega Expressa</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>• Prazo de entrega: 1-2 dias úteis</p>
                <p>• Rastreamento em tempo real</p>
                <p>• Entrega prioritária</p>
                <p>• Frete a partir de R$ 19,90</p>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Retirada em Loja</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>• Disponível em lojas selecionadas</p>
                <p>• Retirada em até 2 horas</p>
                <p>• Sem custo adicional</p>
                <p>• Necessário agendamento</p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Times */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Prazos de Entrega</h2>
          <div className="border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Estimativas por Região</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Regiões Metropolitanas</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• São Paulo: 1-2 dias úteis</li>
                  <li>• Rio de Janeiro: 2-3 dias úteis</li>
                  <li>• Belo Horizonte: 2-3 dias úteis</li>
                  <li>• Curitiba: 2-3 dias úteis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Demais Regiões</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sul: 3-5 dias úteis</li>
                  <li>• Sudeste: 3-5 dias úteis</li>
                  <li>• Centro-Oeste: 4-6 dias úteis</li>
                  <li>• Norte/Nordeste: 5-7 dias úteis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tracking */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Rastreamento de Pedidos</h2>
          <div className="border rounded-lg p-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Acompanhe seu pedido em tempo real através do seu painel de conta ou usando o código de rastreamento enviado por email.
              </p>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-500 mt-1" />
                <p className="text-muted-foreground">
                  O código de rastreamento é enviado assim que seu pedido é despachado. Você também pode encontrá-lo na página de detalhes do pedido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Informações Adicionais</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Horários de Entrega</h3>
              <p className="text-muted-foreground">
                As entregas são realizadas de segunda a sexta-feira, das 8h às 18h. Não realizamos entregas em finais de semana e feriados.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Endereço Incorreto</h3>
              <p className="text-muted-foreground">
                Em caso de endereço incorreto, entre em contato com nosso suporte imediatamente. Após o envio, não podemos garantir alterações no endereço de entrega.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Ausência no Local</h3>
              <p className="text-muted-foreground">
                Se não houver ninguém no local da entrega, o transportador fará até 3 tentativas. Após isso, o pedido será retornado ao centro de distribuição.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Dúvidas sobre Entrega?</h2>
          <p className="text-muted-foreground mb-4">
            Nossa equipe está pronta para ajudar você. Entre em contato através dos canais abaixo:
          </p>
          <div className="space-y-2">
            <p>📧 Email: entrega@nxamzn.com.br</p>
            <p>📞 Telefone: (11) 4002-8922</p>
            <p>💬 Chat: Disponível 24/7 no canto inferior direito</p>
          </div>
        </div>
      </div>
    </div>
  )
} 