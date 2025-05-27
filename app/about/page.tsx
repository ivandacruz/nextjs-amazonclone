import { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'
import { Building2, Users, Target, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: `Sobre a ${APP_NAME}`,
  description: 'Conheça mais sobre a NxAmzn, nossa história, missão e valores.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Sobre a {APP_NAME}</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            A {APP_NAME} é uma plataforma de e-commerce inovadora, comprometida em oferecer a melhor experiência de compra online para nossos clientes.
          </p>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="flex items-start gap-4">
              <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Nossa História</h2>
                <p className="text-muted-foreground">
                  Fundada com a missão de revolucionar o comércio eletrônico, a {APP_NAME} nasceu da visão de criar uma plataforma que une tecnologia, conveniência e confiabilidade.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Target className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Nossa Missão</h2>
                <p className="text-muted-foreground">
                  Proporcionar uma experiência de compra online excepcional, conectando clientes a produtos de qualidade com preços competitivos e entrega rápida.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Nossos Valores</h2>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Excelência no atendimento</li>
                  <li>Inovação constante</li>
                  <li>Transparência</li>
                  <li>Sustentabilidade</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Award className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Nossos Diferenciais</h2>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Interface intuitiva</li>
                  <li>Produtos selecionados</li>
                  <li>Entrega rápida</li>
                  <li>Suporte 24/7</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Por que escolher a {APP_NAME}?</h2>
            <p className="text-muted-foreground mb-4">
              Na {APP_NAME}, acreditamos que cada compra deve ser uma experiência positiva. Por isso, investimos em:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Tecnologia de ponta para uma navegação fluida</li>
              <li>Parcerias com as melhores marcas do mercado</li>
              <li>Processos logísticos otimizados</li>
              <li>Atendimento personalizado</li>
              <li>Políticas de devolução transparentes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 