'use client';

import {Fragment, useState} from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const DialogMediaSlider = dynamic(() => import('@/components/DialogMediaSlider'), {ssr: false});

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
                width={300}
                height={300}
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
          <DialogMediaSlider
            images={
              mediaItems.map((item) => {
                return {src: item.src, alt: item.alt};
              })
            }
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onThumbnailClick={openLightbox}
            showThumbnails={true}
            showCounter={true}
          />
        )
      }
    </Fragment>
  );
};

export default MediaGalleryGrid;

