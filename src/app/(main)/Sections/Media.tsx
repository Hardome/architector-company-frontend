import {H2} from '@/components/ui/typography';

import MediaGalleryGrid from './MediaGalleryGrid';

const mediaItems = [
  {src: '/topPerspective.webp', alt: 'Вид сверху на поселок', type: 'image'},
  {src: '/topPerspective2.webp', alt: 'Жизнь в поселке', type: 'image'},
  {src: '/architecture.webp', alt: 'Архитектура домов', type: 'image'},
  {src: '/road3.webp', alt: 'Сервисы поселка', type: 'image'},
  {src: '/garden.webp', alt: 'Природа и парк', type: 'image'}
  // {src: '/house.png', alt: 'Проект дома 1', type: 'image'}
  // {src: '/house.png', alt: 'Проект дома 2', type: 'image'}
];

const MediaGallery = () => (
  <section id={'media'} className={'py-20 lg:py-32 bg-muted/30'}>
    <div className={'container mx-auto px-4 lg:px-8'}>
      <H2 variant={'section'} className={'mb-16 text-primary'}>
        {'Медиа'}
      </H2>

      <div className={'mb-12 rounded-2xl overflow-hidden shadow-medium'}>
        <div className={'aspect-video bg-muted flex items-center justify-center'}>
          <video
            title={'Обзор поселка'}
            src={'/review.webm'}
            controls={true}
            playsInline={true}
            poster={'/walkingArea.webp'}
            preload={'metadata'}
            className={'w-full h-full object-cover'}
            aria-label={'Видео обзор поселка ELLORIA'}
          />
        </div>
      </div>
      <MediaGalleryGrid mediaItems={mediaItems} />
    </div>
  </section>
);

export default MediaGallery;
