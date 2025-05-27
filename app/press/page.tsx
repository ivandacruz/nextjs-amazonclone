'use client'

import { APP_NAME } from '@/lib/constants'
import { Mail, Phone, FileText, Download, Newspaper, Users, Image, File } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PressPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Sala de Imprensa</h1>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Contato com a Imprensa</h2>
            <p className="text-muted-foreground mb-6">
              A {APP_NAME} está comprometida em manter um relacionamento transparente e eficiente com a imprensa. 
              Nossa equipe de comunicação está disponível para atender jornalistas e veículos de comunicação.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button size="lg" className="w-full md:w-auto">
                <Mail className="w-4 h-4 mr-2" />
                Contato Direto
              </Button>
              <Button size="lg" variant="outline" className="w-full md:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Baixar Media Kit
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Informações de Contato</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-muted-foreground">
                Para solicitações de entrevistas e informações gerais:
              </p>
              <p className="font-medium mt-2">imprensa@nxamzn.com.br</p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Telefone</h3>
              </div>
              <p className="text-muted-foreground">
                Departamento de Comunicação:
              </p>
              <p className="font-medium mt-2">(11) 4002-8922</p>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Comunicados à Imprensa</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Nova Sede da {APP_NAME}</h3>
                  <p className="text-muted-foreground">15 de Março, 2024</p>
                  <p className="mt-2">Empresa anuncia expansão com nova sede em São Paulo...</p>
                </div>
                <Button variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Ler Mais
                </Button>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Recorde de Vendas</h3>
                  <p className="text-muted-foreground">1 de Março, 2024</p>
                  <p className="mt-2">Plataforma atinge novo recorde de vendas no primeiro trimestre...</p>
                </div>
                <Button variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Ler Mais
                </Button>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Sustentabilidade</h3>
                  <p className="text-muted-foreground">15 de Fevereiro, 2024</p>
                  <p className="mt-2">Novas iniciativas sustentáveis são anunciadas pela empresa...</p>
                </div>
                <Button variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Ler Mais
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Media Kit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Logos e Imagens</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Logos em diferentes formatos e resoluções, fotos institucionais e imagens de produtos.
              </p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Baixar
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <File className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Ficha Técnica</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Informações sobre a empresa, números, fatos e dados relevantes.
              </p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Baixar
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Equipe</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Biografias e fotos dos principais executivos e porta-vozes.
              </p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Baixar
              </Button>
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Diretrizes para a Imprensa</h2>
          <div className="border rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Solicitações de Entrevista</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Enviar solicitação com pelo menos 48h de antecedência</li>
                  <li>• Incluir tema e perguntas principais</li>
                  <li>• Especificar formato e duração desejada</li>
                  <li>• Informar prazo para publicação</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Uso de Materiais</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Logos e imagens devem ser usados conforme manual</li>
                  <li>• Citar fonte ao utilizar informações</li>
                  <li>• Solicitar aprovação para uso de materiais exclusivos</li>
                  <li>• Respeitar direitos autorais e marcas registradas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Contato Emergencial</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Plantão 24h para casos urgentes</li>
                  <li>• Contato direto com assessor de imprensa</li>
                  <li>• Resposta em até 2 horas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Precisa de Mais Informações?</h2>
          <p className="text-muted-foreground mb-4">
            Nossa equipe de comunicação está à disposição para ajudar:
          </p>
          <div className="space-y-2">
            <p>📧 Email: imprensa@nxamzn.com.br</p>
            <p>📞 Telefone: (11) 4002-8922</p>
            <p>📱 WhatsApp: (11) 98765-4321</p>
          </div>
        </div>
      </div>
    </div>
  )
} 