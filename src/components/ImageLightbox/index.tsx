'use client';

import {ChevronLeft, ChevronRight, X} from 'lucide-react';
import Image from 'next/image';

import {Button} from '@/components/ui/button';

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  images: ImageItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onThumbnailClick?: (index: number) => void;
  showThumbnails?: boolean;
  showCounter?: boolean;
  imageWidth?: number;
  imageHeight?: number;
}

const ImageLightbox = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onThumbnailClick,
  showThumbnails = false,
  showCounter = true,
  imageWidth = 1920,
  imageHeight = 1080
}: ImageLightboxProps) => {
  const hasMultipleImages = images.length > 1;

  return (
    <div
      className={
        'fixed inset-0 z-50 bg-background/95 backdrop-blur-sm ' +
        'flex flex-col items-center justify-center p-4'
      }
    >
      <Button
        onClick={onClose}
        className={
          'absolute top-4 right-4 p-2 text-background ' +
          'hover:text-primary transition-colors z-10'
        }
      >
        <X size={32} />
      </Button>
      {
        hasMultipleImages && (
          <Button
            type={'button'}
            onClick={onPrev}
            variant={'text'}
            className={'absolute left-4 p-2 z-10'}
          >
            <ChevronLeft size={48} />
          </Button>
        )
      }
      <div
        className={
          'max-w-[95vw] lg:max-w-[90vw] max-h-[85vh] lg:max-h-[90vh] mx-4 mb-4'
        }
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={imageWidth}
          height={imageHeight}
          className={'max-w-full max-h-full object-contain rounded-lg'}
        />
      </div>
      {
        hasMultipleImages && (
          <Button
            onClick={onNext}
            variant={'text'}
            className={'absolute right-4 p-2 z-10'}
          >
            <ChevronRight size={48} />
          </Button>
        )
      }
      {
        showThumbnails && hasMultipleImages && (
          <div
            className={
              'absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 ' +
            'overflow-x-auto max-w-[90vw] p-2 scrollbar-hide'
            }
          >
            {
              images.map((item, index) => {
                const isActive = index === currentIndex;
                const baseClasses =
              'flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ' +
              'cursor-pointer transition-all duration-200 hover:opacity-80';
                const activeClasses = isActive ?
                  'border-4 border-primary shadow-lg scale-105' :
                  'border-2 border-border opacity-60 hover:opacity-80';
                const thumbnailClassName = `${baseClasses} ${activeClasses}`;

                return (
                  <div
                    key={item.src}
                    onClick={() => onThumbnailClick?.(index)}
                    className={thumbnailClassName}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={80}
                      height={80}
                      className={'w-full h-full object-cover'}
                    />
                  </div>
                );
              })
            }
          </div>
        )
      }
      {
        showCounter && hasMultipleImages && (
          <div
            className={
              'absolute bottom-20 left-1/2 -translate-x-1/2 text-foreground font-houschka'
            }
          >
            {currentIndex + 1}
            {' / '}
            {images.length}
          </div>
        )
      }
    </div>
  );
};

export default ImageLightbox;

