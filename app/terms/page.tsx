'use client'

import { APP_NAME } from '@/lib/constants'

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground">
              Ao acessar e usar a {APP_NAME}, você concorda em cumprir estes termos de uso. Se você não concordar com qualquer parte destes termos, não poderá acessar ou usar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Uso do Serviço</h2>
            <p className="text-muted-foreground mb-4">
              A {APP_NAME} oferece uma plataforma de e-commerce que permite aos usuários:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Navegar e pesquisar produtos</li>
              <li>Realizar compras online</li>
              <li>Gerenciar suas informações de conta</li>
              <li>Avaliar produtos e serviços</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Conta do Usuário</h2>
            <p className="text-muted-foreground mb-4">
              Para utilizar certos recursos da plataforma, você precisará criar uma conta. Você é responsável por:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Manter a confidencialidade de sua senha</li>
              <li>Fornecer informações precisas e atualizadas</li>
              <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Compras e Pagamentos</h2>
            <p className="text-muted-foreground mb-4">
              Ao realizar uma compra em nossa plataforma:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Você concorda em pagar o preço total do produto</li>
              <li>Garantimos a segurança das suas informações de pagamento</li>
              <li>Oferecemos diferentes métodos de pagamento</li>
              <li>Respeitamos as políticas de reembolso e devolução</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Privacidade e Dados</h2>
            <p className="text-muted-foreground mb-4">
              Sua privacidade é importante para nós. Nossa política de privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Propriedade Intelectual</h2>
            <p className="text-muted-foreground">
              Todo o conteúdo presente na {APP_NAME}, incluindo textos, imagens, logos e software, é protegido por direitos autorais e outras leis de propriedade intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitações de Responsabilidade</h2>
            <p className="text-muted-foreground">
              A {APP_NAME} não será responsável por quaisquer danos indiretos, incidentais ou consequentes decorrentes do uso ou impossibilidade de uso de nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Alterações nos Termos</h2>
            <p className="text-muted-foreground">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação na plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
            <p className="text-muted-foreground">
              Se você tiver dúvidas sobre estes termos, entre em contato conosco através da página de contato ou pelo email: contato@nxamzn.com.br
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 