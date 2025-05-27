'use client'

import { APP_NAME } from '@/lib/constants'
import { Cookie, Shield, Settings, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>

        {/* Main Info */}
        <div className="mb-12">
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">O Que São Cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita nosso site. Eles nos ajudam a melhorar sua experiência de navegação e a fornecer serviços personalizados.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <p className="text-muted-foreground">
                  Utilizamos cookies para melhorar a performance do site e sua experiência de navegação.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <p className="text-muted-foreground">
                  Você pode controlar suas preferências de cookies a qualquer momento.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <p className="text-muted-foreground">
                  Seus dados são protegidos de acordo com nossa Política de Privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Tipos de Cookies que Utilizamos</h2>
          <div className="grid gap-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Cookies Essenciais</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>• Necessários para o funcionamento básico do site</p>
                <p>• Permitem navegação e uso de recursos essenciais</p>
                <p>• Não podem ser desativados</p>
                <p>• Não coletam informações pessoais</p>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Cookies de Preferências</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>• Lembram suas configurações e preferências</p>
                <p>• Personalizam sua experiência de navegação</p>
                <p>• Podem ser desativados</p>
                <p>• Incluem preferências de idioma e região</p>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Cookies de Desempenho</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>• Coletam informações sobre como você usa o site</p>
                <p>• Ajudam a melhorar a performance do site</p>
                <p>• Podem ser desativados</p>
                <p>• Incluem análises de uso e métricas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Gerenciamento de Cookies</h2>
          <div className="border rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Como Controlar Seus Cookies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Acesse as configurações do seu navegador</li>
                  <li>• Gerencie suas preferências de cookies</li>
                  <li>• Exclua cookies existentes</li>
                  <li>• Bloqueie cookies específicos</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Configurações do Navegador</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Chrome: Configurações → Privacidade e Segurança</li>
                  <li>• Firefox: Opções → Privacidade e Segurança</li>
                  <li>• Safari: Preferências → Privacidade</li>
                  <li>• Edge: Configurações → Cookies e Permissões</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Duration */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Duração dos Cookies</h2>
          <div className="border rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-500 mt-1" />
                <p className="text-muted-foreground">
                  Os cookies podem ser temporários (sessão) ou permanentes. Os cookies de sessão são excluídos quando você fecha o navegador, enquanto os permanentes permanecem por um período específico.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Cookies de Sessão</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Duram apenas durante sua visita</li>
                    <li>• São excluídos ao fechar o navegador</li>
                    <li>• Mantêm seu carrinho de compras</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cookies Permanentes</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Podem durar até 2 anos</li>
                    <li>• Lembram suas preferências</li>
                    <li>• Mantêm você logado</li>
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
              <h3 className="text-xl font-semibold mb-4">Cookies de Terceiros</h3>
              <p className="text-muted-foreground">
                Alguns cookies são colocados por serviços de terceiros que aparecem em nossas páginas. Estes cookies são usados para análise, publicidade e funcionalidades sociais.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Atualizações da Política</h3>
              <p className="text-muted-foreground">
                Podemos atualizar nossa política de cookies periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como protegemos suas informações.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Seus Direitos</h3>
              <p className="text-muted-foreground">
                Você tem o direito de aceitar ou rejeitar cookies não essenciais. No entanto, a rejeição de cookies essenciais pode afetar a funcionalidade do site.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Dúvidas sobre Cookies?</h2>
          <p className="text-muted-foreground mb-4">
            Se você tiver dúvidas sobre nossa política de cookies, entre em contato conosco:
          </p>
          <div className="space-y-2">
            <p>📧 Email: privacidade@nxamzn.com.br</p>
            <p>📞 Telefone: (11) 4002-8922</p>
            <p>💬 Chat: Disponível 24/7 no canto inferior direito</p>
          </div>
        </div>
      </div>
    </div>
  )
} 