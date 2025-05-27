'use client'

import { APP_NAME } from '@/lib/constants'
import { Briefcase, Users, Heart, Award, GraduationCap, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Carreiras na {APP_NAME}</h1>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Faça Parte do Nosso Time</h2>
            <p className="text-muted-foreground mb-6">
              Na {APP_NAME}, buscamos pessoas talentosas e apaixonadas para fazer parte da nossa jornada de inovação e crescimento. 
              Oferecemos um ambiente dinâmico, oportunidades de desenvolvimento e a chance de fazer a diferença.
            </p>
            <Button size="lg" className="w-full md:w-auto">
              Ver Vagas Disponíveis
            </Button>
          </div>
        </div>

        {/* Why Join Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Por Que Trabalhar Conosco?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Cultura Inovadora</h3>
              </div>
              <p className="text-muted-foreground">
                Ambiente colaborativo que valoriza a criatividade e o pensamento inovador. 
                Incentivamos novas ideias e soluções disruptivas.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Bem-estar</h3>
              </div>
              <p className="text-muted-foreground">
                Programas de saúde e bem-estar, ambiente de trabalho flexível e equilíbrio 
                entre vida pessoal e profissional.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Crescimento</h3>
              </div>
              <p className="text-muted-foreground">
                Oportunidades claras de desenvolvimento profissional e plano de carreira 
                estruturado para seu crescimento.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Impacto</h3>
              </div>
              <p className="text-muted-foreground">
                Faça parte de uma empresa que está transformando o mercado e impactando 
                positivamente a vida das pessoas.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Benefícios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Saúde e Bem-estar</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Plano de saúde completo</li>
                <li>• Plano odontológico</li>
                <li>• Gympass</li>
                <li>• Programa de saúde mental</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Desenvolvimento</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Plano de carreira</li>
                <li>• Treinamentos</li>
                <li>• Mentoria</li>
                <li>• Acesso a cursos</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Qualidade de Vida</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Horário flexível</li>
                <li>• Home office</li>
                <li>• Vale refeição</li>
                <li>• Vale transporte</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Vagas em Destaque</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Desenvolvedor Full Stack</h3>
                  <p className="text-muted-foreground">São Paulo, SP - Remoto</p>
                </div>
                <Button variant="outline">Candidatar-se</Button>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">UX/UI Designer</h3>
                  <p className="text-muted-foreground">São Paulo, SP - Híbrido</p>
                </div>
                <Button variant="outline">Candidatar-se</Button>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Analista de Marketing Digital</h3>
                  <p className="text-muted-foreground">São Paulo, SP - Presencial</p>
                </div>
                <Button variant="outline">Candidatar-se</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Processo Seletivo</h2>
          <div className="border rounded-lg p-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Inscrição</h3>
                  <p className="text-muted-foreground">
                    Envie seu currículo e portfólio através do nosso site ou LinkedIn.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Entrevistas</h3>
                  <p className="text-muted-foreground">
                    Conversas com a equipe de recrutamento e gestores da área.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Testes Práticos</h3>
                  <p className="text-muted-foreground">
                    Avaliação técnica e desafios práticos relacionados à vaga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Dúvidas sobre Carreiras?</h2>
          <p className="text-muted-foreground mb-4">
            Entre em contato com nossa equipe de recrutamento:
          </p>
          <div className="space-y-2">
            <p>📧 Email: carreiras@nxamzn.com.br</p>
            <p>📞 Telefone: (11) 4002-8922</p>
            <p>💬 LinkedIn: linkedin.com/company/nxamzn</p>
          </div>
        </div>
      </div>
    </div>
  )
} 