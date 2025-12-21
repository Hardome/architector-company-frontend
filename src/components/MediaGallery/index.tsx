'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import {DialogMediaSlider} from '@/components/DialogMediaSlider';

interface MediaGalleryProps {
  images: {src: string; alt: string}[];
}

export function MediaGallery({images}: MediaGalleryProps) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      {/* inline slider */}
      <Swiper
        modules={[Navigation]}
        navigation={true}
        onSlideChange={(s) => setActive(s.activeIndex)}
        className={'w-full rounded-xl overflow-hidden h-full'}
        style={
          {
            '--swiper-theme-color': '#fff'
          }
        }
      >
        {
          images.map((image, i) => (
            <SwiperSlide key={image.src}>
              <Image
                src={image.src}
                alt={image.alt || ''}
                fill={true}
                sizes={'(max-width: 768px) 100vw, 50vw'}
                className={'object-cover cursor-pointer select-none'}
                onClick={
                  () => {
                    setActive(i);
                    setOpen(true);
                  }
                }
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <DialogMediaSlider
        images={images}
        currentIndex={open ? active : -1}
        onClose={
          () => {
            setOpen(false);
          }
        }
        onThumbnailClick={
          (index) => {
            setActive(index);
          }
        }
        showThumbnails={true}
        showCounter={true}
      />
    </React.Fragment>
  );
}
