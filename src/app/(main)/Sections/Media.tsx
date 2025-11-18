import MediaGalleryGrid from './MediaGalleryGrid';

const mediaItems = [
  {src: '/heroImage.png', alt: 'Вид сверху на поселок', type: 'image'},
  {src: '/familyImage.png', alt: 'Жизнь в поселке', type: 'image'},
  {src: '/architectureImage.png', alt: 'Архитектура домов', type: 'image'},
  {src: '/serviceImage.png', alt: 'Сервисы поселка', type: 'image'},
  {src: '/natureImage.png', alt: 'Природа и парк', type: 'image'},
  {src: '/project1.png', alt: 'Проект дома 1', type: 'image'},
  {src: '/project2.png', alt: 'Проект дома 2', type: 'image'}
];

const MediaGallery = () => (
  <section id={'media'} className={'py-20 lg:py-32 bg-muted/30'}>
    <div className={'container mx-auto px-4 lg:px-8'}>
      <h2 className={'text-3xl lg:text-5xl font-bold text-center mb-16 text-primary'}>
        {'Медиа\r'}
      </h2>

      {/* Video Section */}
      <div className={'mb-12 rounded-2xl overflow-hidden shadow-medium'}>
        <div className={'aspect-video bg-muted flex items-center justify-center'}>
          <p className={'text-muted-foreground'}>{'Видео обзор поселка'}</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <MediaGalleryGrid mediaItems={mediaItems} />
    </div>
  </section>
);

export default MediaGallery;
