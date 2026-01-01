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
      <h2 className={'text-3xl lg:text-5xl text-center mb-16 text-primary'}>
        {'Медиа'}
      </h2>

      <div className={'mb-12 rounded-2xl overflow-hidden shadow-medium'}>
        <div className={'aspect-video bg-muted flex items-center justify-center'}>
          {/* <p className={'text-muted-foreground'}>{'Видео обзор поселка'}</p> */}
          <video
            title={'Обзор поселка'}
            src={'/review.webm'}
            controls={true}
            playsInline={true}
            poster={'/walkingArea.webp'}
            preload={'metadata'}
            className={'w-full h-full object-cover'}
          />
        </div>
      </div>
      <MediaGalleryGrid mediaItems={mediaItems} />
    </div>
  </section>
);

export default MediaGallery;
