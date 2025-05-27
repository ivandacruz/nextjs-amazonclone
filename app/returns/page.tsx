'use client'

import { APP_NAME } from '@/lib/constants'
import { RefreshCw, Clock, AlertCircle, CheckCircle2, Package, CreditCard } from 'lucide-react'

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Devoluções e Reembolsos</h1>

        {/* Main Info */}
        <div className="mb-12">
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Informações Importantes</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <p className="text-muted-foreground">
                  Você tem até 7 dias para solicitar a devolução de produtos não utilizados.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <p className="text-muted-foreground">
                  Reembolso processado em até 10 dias úteis após o recebimento do produto.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <p className="text-muted-foreground">
                  Produtos com defeito têm garantia de 90 dias.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Return Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Como Solicitar uma Devolução</h2>
          <div className="grid gap-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">1. Acesse seu Pedido</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>• Entre na sua conta</p>
                <p>• Vá para "Meus Pedidos"</p>
                <p>• Selecione o pedido que deseja devolver</p>
                <p>• Clique em "Solicitar Devolução"</p>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">2. Escolha o Motivo</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>• Selecione o motivo da devolução</p>
                <p>• Descreva o problema (se houver)</p>
                <p>• Escolha o método de reembolso</p>
                <p>• Confirme a solicitação</p>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">3. Envie o Produto</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>• Imprima a etiqueta de devolução</p>
                <p>• Embalagem original com todos os acessórios</p>
                <p>• Cole a etiqueta na embalagem</p>
                <p>• Envie para o endereço indicado</p>
              </div>
            </div>
          </div>
        </section>

        {/* Return Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Política de Devolução</h2>
          <div className="border rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Produtos Elegíveis</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Produtos não utilizados e na embalagem original</li>
                  <li>• Produtos com defeito de fabricação</li>
                  <li>• Produtos recebidos diferentes do pedido</li>
                  <li>• Produtos danificados durante o transporte</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Produtos Não Elegíveis</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Produtos usados ou danificados</li>
                  <li>• Produtos sem embalagem original</li>
                  <li>• Produtos de higiene pessoal</li>
                  <li>• Produtos com garantia expirada</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Informações sobre Reembolso</h2>
          <div className="border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Prazos de Reembolso</h3>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                O reembolso será processado após a confirmação do recebimento do produto em nosso centro de distribuição.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Métodos de Pagamento</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cartão de Crédito: 5-7 dias úteis</li>
                    <li>• Boleto: 10-15 dias úteis</li>
                    <li>• PIX: 1-2 dias úteis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Observações</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Frete de devolução grátis</li>
                    <li>• Reembolso do valor total</li>
                    <li>• Notificação por email</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Informações Adicionais</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Garantia Estendida</h3>
              <p className="text-muted-foreground">
                Produtos com garantia estendida podem ser devolvidos em até 90 dias. Consulte as condições específicas do produto.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Produtos em Promoção</h3>
              <p className="text-muted-foreground">
                Produtos adquiridos em promoção seguem a mesma política de devolução. O reembolso será feito pelo valor pago.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Trocas</h3>
              <p className="text-muted-foreground">
                Para trocar um produto, solicite a devolução e faça um novo pedido. O reembolso será processado normalmente.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Precisa de Ajuda?</h2>
          <p className="text-muted-foreground mb-4">
            Nossa equipe está pronta para ajudar você com sua devolução. Entre em contato através dos canais abaixo:
          </p>
          <div className="space-y-2">
            <p>📧 Email: devolucoes@nxamzn.com.br</p>
            <p>📞 Telefone: (11) 4002-8922</p>
            <p>💬 Chat: Disponível 24/7 no canto inferior direito</p>
          </div>
        </div>
      </div>
    </div>
  )
} 