/* eslint-disable max-len */
import Image from 'next/image';

const aboutContent = [
  {
    text: 'Представьте место, где архитектура будущего встречается с энергией леса. Где ваш день начинается не с пробки, а с пробежки по хвойному лесу. Вы вдыхаете запах листвы летом, снега зимой, и влажности леса в межсезонье, наполняя свои легкие этой силой. Где вечером вы не стоите в очереди в прачечную, а играете с детьми в парке или обсуждаете последние новости с соседями за чашкой кофе в нашем коворкинге.\n\ELORIA — это не просто дома. Это продуманная экосистема для жизни без суеты.',
    image: '/walkingArea.png',
    alt: 'Счастливая семья в лесу'
  },
  {
    text: 'Архитектура, которая вдохновляет: Мы построили поселок с уникальным современным дизайном — чистые линии, панорамное остекление, натуральные материалы. Каждый дом — это авторский проект, который гармонично вписан в ландшафт.',
    image: '/road.png',
    alt: 'Современная архитектура дома'
  },
  {
    text: 'Инфраструктура, которая освобождает время: Забудьте о рутине. На территории поселка работает сервис управления бытом: от клининга и службы доставки продуктов до вывоза мусора и вызова мастера. Ваше время слишком ценно, чтобы тратить его на это.',
    image: '/topPerspective3.png',
    alt: 'Сервисная команда'
  },
  {
    text: 'Природа и активность прямо за порогом: Наш собственный ландшафтный парк с велодорожками, зоны для пикников и спортивный кластер с современным залом и площадками для функциональных тренировок. А прямо за территорией — настоящий лес, ставший вашим личным заповедником.\n\nСообщество единомышленников: Мы создаем дружелюбную среду, где соседи знают друг друга по имени, а дети вместе играют на безопасных улицах. Здесь рождаются настоящие дружбы и традиции.\n\ELORIA — это осознанный выбор в пользу жизни, где каждая минута наполнена смыслом, радостью и спокойствием. Добро пожаловать в ваш новый дом.',
    image: '/garden.png',
    alt: 'Парк и природа'
  }
];

export default function AboutSection() {
  return (
    <section id={'about'} className={'py-20 lg:py-32 bg-background'}>
      <div className={'container mx-auto px-4 lg:px-8'}>
        <h2 className={'text-3xl lg:text-5xl font-bold text-center mb-16 lg:mb-24 text-primary'}>
          {'О поселке'}
        </h2>

        <div className={'space-y-20 lg:space-y-32'}>
          {
            aboutContent.map((item, index) => (
              <div
              // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={
                  `flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 lg:gap-16 items-center`
                }
              >
                <div className={'flex-1 space-y-4'}>
                  <p className={'text-base lg:text-lg leading-relaxed text-light-text whitespace-pre-line'}>
                    {item.text}
                  </p>
                </div>
                <div className={'flex-1 w-full'}>
                  <div className={'aspect-square overflow-hidden shadow-medium'}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={1080}
                      height={608}
                      className={'w-full h-full object-cover hover:scale-105 transition-transform duration-500'}
                    />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}