'use client';

import {Fragment, useState} from 'react';
import {ChevronLeft, ChevronRight, X} from 'lucide-react';
import Image from 'next/image';

import {Button} from '@/components/ui/button';

interface MediaItem {
  src: string;
  alt: string;
  type: string;
}

interface MediaGalleryGridProps {
  mediaItems: MediaItem[];
}

const MediaGalleryGrid = ({mediaItems}: MediaGalleryGridProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % mediaItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + mediaItems.length) % mediaItems.length
      );
    }
  };

  return (
    <Fragment>
      <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'}>
        {
          mediaItems.map((item, index) => (
            <div
              key={item.src}
              className={
                'group aspect-square rounded-lg overflow-hidden ' +
                'shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer'
              }
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className={
                  'w-full h-full object-cover group-hover:scale-110 ' +
                  'transition-transform duration-300'
                }
              />
            </div>
          ))
        }
      </div>

      {
        lightboxIndex !== null && (
          <div
            className={
              'fixed inset-0 z-50 bg-background/95 backdrop-blur-sm ' +
              'flex items-center justify-center'
            }
          >
            <Button
              onClick={closeLightbox}
              className={
                'absolute top-4 right-4 p-2 text-foreground ' +
                'hover:text-primary transition-colors'
              }
            >
              <X size={32} />
            </Button>

            <Button
              type={'button'}
              onClick={prevImage}
              variant={'text'}
              className={
                'absolute left-4 p-2'
              }
            >
              <ChevronLeft size={48} />
            </Button>

            <div className={'max-w-7xl max-h-[90vh] mx-4'}>
              <Image
                src={mediaItems[lightboxIndex].src}
                alt={mediaItems[lightboxIndex].alt}
                width={1920}
                height={1080}
                className={'max-w-full max-h-full object-contain rounded-lg'}
              />
            </div>

            <Button
              onClick={nextImage}
              variant={'text'}
              className={
                'absolute right-4 p-2'
              }
            >
              <ChevronRight size={48} />
            </Button>

            <div className={'absolute bottom-4 left-1/2 -translate-x-1/2 text-foreground'}>
              {lightboxIndex + 1}{' / '}{mediaItems.length}
            </div>
          </div>
        )
      }
    </Fragment>
  );
};

export default MediaGalleryGrid;

