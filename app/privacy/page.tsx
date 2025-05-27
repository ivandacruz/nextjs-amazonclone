'use client'

import { APP_NAME } from '@/lib/constants'

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
            <p className="text-muted-foreground">
              A {APP_NAME} está comprometida em proteger sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nossa plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Informações que Coletamos</h2>
            <p className="text-muted-foreground mb-4">
              Coletamos os seguintes tipos de informações:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Informações de identificação pessoal (nome, email, endereço)</li>
              <li>Informações de pagamento (processadas de forma segura)</li>
              <li>Dados de uso e navegação</li>
              <li>Informações do dispositivo e localização</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Como Usamos suas Informações</h2>
            <p className="text-muted-foreground mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Processar e entregar seus pedidos</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Comunicar sobre produtos e promoções</li>
              <li>Prevenir fraudes e garantir a segurança</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground mb-4">
              Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Prestadores de serviços (entregas, pagamentos)</li>
              <li>Parceiros comerciais (com seu consentimento)</li>
              <li>Autoridades legais (quando exigido por lei)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Seus Direitos</h2>
            <p className="text-muted-foreground mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Retirar seu consentimento</li>
              <li>Receber uma cópia dos seus dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Segurança dos Dados</h2>
            <p className="text-muted-foreground">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações, incluindo:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Criptografia de dados sensíveis</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Treinamento regular de nossa equipe</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Cookies e Tecnologias Similares</h2>
            <p className="text-muted-foreground">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, personalizar conteúdo e analisar o uso do site. Você pode controlar suas preferências de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Retenção de Dados</h2>
            <p className="text-muted-foreground">
              Mantemos suas informações apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletadas, incluindo obrigações legais, contábeis ou de relatórios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Alterações na Política</h2>
            <p className="text-muted-foreground">
              Podemos atualizar esta política periodicamente. Notificaremos você sobre quaisquer alterações significativas através do site ou por email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contato</h2>
            <p className="text-muted-foreground">
              Para questões sobre privacidade ou para exercer seus direitos, entre em contato conosco:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Email: privacidade@nxamzn.com.br</li>
              <li>Telefone: (11) 4002-8922</li>
              <li>Endereço: Av. Paulista, 1000 - Bela Vista, São Paulo - SP</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
} 