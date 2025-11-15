import { Button } from "@/components/ui/button";
import { H1, H2, H4, Lead, Muted, Small } from "@/components/ui/typography";
import type { Metadata } from "next";
import { COMPANY, BENEFITS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "О компании | СК Архитектор",
  description: "Строительство домов под ключ в Тюмени и Тюменской области. Строим надежные дома по типовому или индивидуальному проекту. Гарантия до 25 лет.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Герой секция */}
      <section className="relative bg-gradient-to-b from-muted/50 to-background py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <H1>
              Строительство домов под ключ в Тюмени и Тюменской области
            </H1>
            <Lead className="max-w-2xl mx-auto">
              в Тюмени и Тюменской области
            </Lead>
          </div>
        </div>
      </section>

      {/* Основная информация */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2>Строим дома под ключ</H2>
              <Muted className="leading-relaxed">
                {COMPANY.name} специализируется на строительстве домов под ключ. 
                Работаем с {COMPANY.foundedYear} года и реализовали более {BENEFITS.projectsCompleted} проектов — от небольших загородных домов 
                до просторных коттеджей премиум-класса.
              </Muted>
              <Muted className="leading-relaxed">
                Предлагаем как типовые, так и индивидуальные проекты домов. Наша команда профессионалов 
                сопровождает вас на всех этапах — от проектирования до сдачи объекта под ключ.
              </Muted>
              <Button size="lg">Наши проекты</Button>
            </div> 
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <Small>Изображение компании</Small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши преимущества */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <H2 className="mb-4">Наши преимущества</H2>
            <Muted className="max-w-2xl mx-auto">
              Почему выбирают нас
            </Muted>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <H4>Надежные дома</H4>
              <Muted>
                Строим надежные дома по типовому или индивидуальному проекту
              </Muted>
            </div>

            <div className="bg-card p-6 rounded-lg border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <H4>Поэтапная оплата</H4>
              <Muted>
                Оплата по факту выполнения работ. Никаких скрытых платежей
              </Muted>
            </div>

            <div className="bg-card p-6 rounded-lg border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <H4>Гарантия до {BENEFITS.warrantyYears} лет</H4>
              <Muted>
                Предоставляем гарантию на все работы до {BENEFITS.warrantyYears} лет
              </Muted>
            </div>

            <div className="bg-card p-6 rounded-lg border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <H4>Готовые дома</H4>
              <Muted>
                В продаже готовые дома и коттеджи под ключ
              </Muted>
            </div>
          </div>
        </div>
      </section>

      {/* Цифры и достижения */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <H2 className="mb-4">Наши достижения</H2>
            <Muted className="max-w-2xl mx-auto">
              Результаты работы за более чем {new Date().getFullYear() - COMPANY.foundedYear} лет
            </Muted>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <H1 className="text-primary">{BENEFITS.projectsCompleted}+</H1>
              <Small>Реализованных проектов</Small>
            </div>
            <div className="text-center space-y-2">
              <H1 className="text-primary">{new Date().getFullYear() - COMPANY.foundedYear}</H1>
              <Small>Лет на рынке</Small>
            </div>
            <div className="text-center space-y-2">
              <H1 className="text-primary">{BENEFITS.teamSize}+</H1>
              <Small>Специалистов в команде</Small>
            </div>
            <div className="text-center space-y-2">
              <H1 className="text-primary">{BENEFITS.satisfactionRate}%</H1>
              <Small>Довольных клиентов</Small>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <H2>
            Готовы начать свой проект?
          </H2>
          <Lead className="opacity-90">
            Свяжитесь с нами для бесплатной консультации и расчета стоимости
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

