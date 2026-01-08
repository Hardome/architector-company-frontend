import Image from 'next/image';

import {H2, P} from '@/components/ui/typography';

const aboutContent = [
  {
    title: 'О поселке',
    text:
      'Представьте место, где архитектура будущего встречается с энергией леса. ' +
      'Где ваш день начинается не с пробки, а с пробежки по хвойному лесу. ' +
      'Вы вдыхаете запах листвы летом, снега зимой, и влажности леса в межсезонье, ' +
      'наполняя свои легкие этой силой. Где вечером вы не стоите в очереди в прачечную, ' +
      'а играете с детьми в парке или обсуждаете последние новости с соседями за чашкой ' +
      'кофе в нашем коворкинге.\n\n' +
      'ELLORIA — это не просто дома. Это продуманная экосистема для жизни без суеты.',
    image: '/walkingArea.webp',
    alt: 'Счастливая семья в лесу'
  },
  {
    title: 'Архитектура',
    text:
      'Архитектура, которая вдохновляет: Мы построили поселок с уникальным ' +
      'современным дизайном — чистые линии, панорамное остекление, натуральные материалы. ' +
      'Каждый дом — это авторский проект, который гармонично вписан в ландшафт.\n\n' +
      'Инфраструктура, которая освобождает время: Забудьте о рутине. На территории поселка ' +
      'работает сервис управления бытом: от клининга и службы доставки продуктов до вывоза ' +
      'мусора и вызова мастера. Ваше время слишком ценно, чтобы тратить его на это.',
    image: '/topPerspective3.webp',
    alt: 'Современная архитектура домов'
  },
  {
    title: 'Природа',
    text:
      'Природа и активность прямо за порогом: Наш собственный ландшафтный парк ' +
      'с велодорожками, зоны для пикников и спортивный кластер с современным залом и ' +
      'площадками для функциональных тренировок. А прямо за территорией — настоящий лес, ' +
      'ставший вашим личным заповедником.\n\n' +
      'Сообщество единомышленников: Мы создаем дружелюбную среду, где соседи знают друг ' +
      'друга по имени, а дети вместе играют на безопасных улицах. Здесь рождаются настоящие ' +
      'дружбы и традиции.',
    image: '/garden.webp',
    alt: 'Парк и природа'
  }
];

export default function AboutSection() {
  return (
    <section id={'about'} className={'py-20 bg-background'}>
      <div className={'container mx-auto px-4 lg:px-8'}>
        <div className={'space-y-20 lg:space-y-32'}>
          {
            aboutContent.map((item, index) => (
              <article
              // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={
                  `flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 lg:gap-16 bg-card rounded-2xl p-6 lg:p-8`
                }
              >
                <div className={'space-y-4 lg:w-1/2 flex flex-col justify-center lg:px-15'}>
                  <H2 variant={'card'}>
                    {item.title}
                  </H2>
                  <P variant={'body'}>
                    {item.text}
                  </P>
                </div>
                <div
                  className={
                    'lg:aspect-[2/1] rounded-2xl overflow-hidden shadow-medium ' +
                    'lg:w-1/2 lg:min-h-[480px]'
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={720}
                    height={480}
                    className={
                      'w-full h-full object-cover hover:scale-105 ' +
                      'transition-transform duration-500'
                    }
                    sizes={'(max-width: 1024px) 100vw, 50vw'}
                  />
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  );
}