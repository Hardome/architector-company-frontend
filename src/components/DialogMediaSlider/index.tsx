'use client';

import {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {X} from 'lucide-react';
import Image from 'next/image';
import type {Swiper as SwiperType} from 'swiper';
import {Keyboard, Navigation, Thumbs, Zoom} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

import {Button} from '@/components/ui/button';
import {Dialog} from '@/components/ui/dialog';

interface ImageItem {
  src: string;
  alt: string;
}

interface DialogMediaSliderProps {
  images: ImageItem[];
  currentIndex: number;
  onClose: () => void;
  onThumbnailClick?: (index: number) => void;
  showThumbnails?: boolean;
  showCounter?: boolean;
}

export function DialogMediaSlider({
  images,
  currentIndex,
  onClose,
  onThumbnailClick,
  showThumbnails = true,
  showCounter = true
}: DialogMediaSliderProps) {
  const [thumbs, setThumbs] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const isOpen = currentIndex !== null && currentIndex !== undefined && currentIndex >= 0;

  useEffect(() => {
    if (
      mainSwiperRef.current &&
      isOpen &&
      currentIndex >= 0 &&
      currentIndex < images.length
    ) {
      mainSwiperRef.current.slideTo(currentIndex);
    }
  }, [currentIndex, isOpen, images.length]);

  useEffect(() => {
    if (!isOpen) {
      mainSwiperRef.current = null;

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThumbs(null);
    }
  }, [isOpen]);

  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.activeIndex;

    if (onThumbnailClick) {
      onThumbnailClick(newIndex);
    }
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <div className={'fixed inset-0 z-[1000] bg-black/90 flex flex-col'}>
        {/* header */}
        {
          showCounter && (
            <div className={'flex justify-between items-center p-4 text-white'}>
              <span>
                {currentIndex + 1}
                {' / '}
                {images.length}
              </span>
              <Button variant={'ghost'} size={'icon'} onClick={onClose}>
                <X />
              </Button>
            </div>
          )
        }
        {
          !showCounter && (
            <div className={'flex justify-end items-center p-4'}>
              <Button
                variant={'ghost'}
                size={'icon'}
                onClick={onClose}
                className={'text-white'}
              >
                <X />
              </Button>
            </div>
          )
        }

        {/* main swiper */}
        <div className={'relative flex-1'}>
          <Swiper
            modules={[Navigation, Thumbs, Zoom, Keyboard]}
            navigation={true}
            thumbs={{swiper: thumbs}}
            zoom={true}
            keyboard={true}
            initialSlide={currentIndex}
            onSwiper={
              (swiper) => {
                mainSwiperRef.current = swiper;
              }
            }
            onSlideChange={handleSlideChange}
            className={'h-full'}
            style={
              {
                '--swiper-theme-color': '#fff'
              } as React.CSSProperties
            }
          >
            {
              images.map((item) => (
                <SwiperSlide key={item.src}>
                  <div
                    className={
                      'swiper-zoom-container relative flex items-center justify-center h-full'
                    }
                  >
                    <Image
                      src={item.src}
                      alt={item.alt || ''}
                      fill={true}
                      sizes={'100vw'}
                      className={'object-contain select-none'}
                    />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        {/* thumbs */}
        {
          showThumbnails && (
            <div className={'p-2'}>
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbs}
                slidesPerView={'auto'}
                spaceBetween={8}
                watchSlidesProgress={true}
                className={'h-20 w-fit'}
              >
                {
                  images.map((item, index) => (
                    <SwiperSlide
                      key={item.src}
                      className={
                        `
                          !w-auto
                          [&.swiper-slide-thumb-active]:border-3
                          [&.swiper-slide-thumb-active]:border-primary
                          [&.swiper-slide-thumb-active]:rounded
                          `
                      }
                      onClick={() => onThumbnailClick?.(index)}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt || ''}
                        className={'object-cover h-full rounded cursor-pointer select-none'}
                        width={80}
                        height={80}
                      />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          )
        }
      </div>
    </Dialog>,
    document.body
  );
}
