'use client';

import React, {useState} from 'react';
import {Calendar, Home, LayoutDashboard, MapPin} from 'lucide-react';
import Image from 'next/image';

import ImageLightbox from '@/components/ImageLightbox';
import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {H2, H3, P} from '@/components/ui/typography';

// Функция для генерации путей к изображениям проекта
const generateProjectImages = (
  folderName: string,
  count: number,
  imageName: string
): string[] =>
  Array.from(
    {length: count},
    (_, i) => `/${folderName}/${imageName} (${i + 1}).webp`
  );

const projects = [
  {
    id: 1,
    name: 'Проект «Willow Breeze»',
    // area: 180,
    // rooms: 4,
    price: 'от 1 000 000 ₽',
    // features: ['Панорамное остекление', 'Терраса 40 м²', 'Гараж на 2 авто'],
    // readyDate: 'IV квартал 2025',
    images: generateProjectImages('WillowBreeze', 26, 'Willow Breeze')
  },
  {
    id: 2,
    name: 'Проект «Serenity»',
    // area: 140,
    // rooms: 3,
    price: 'от 1 000 000 ₽',
    // features: ['Плоская крыша', 'Патио', 'Умный дом'],
    // readyDate: 'II квартал 2026',
    images: generateProjectImages('Serenity', 16, 'Serenity')
  },
  {
    id: 3,
    name: 'Проект «Sunnybrook»',
    // area: 140,
    // rooms: 3,
    price: 'от 1 000 000 ₽',
    // features: ['Плоская крыша', 'Патио', 'Умный дом'],
    // readyDate: 'II квартал 2026',
    images: generateProjectImages('Sunnybrook', 33, 'Sunnybrook')
  },
  {
    id: 4,
    name: 'Проект «Hilltop»',
    // area: 140,
    // rooms: 3,
    price: 'от 1 000 000 ₽',
    // features: ['Плоская крыша', 'Патио', 'Умный дом'],
    // readyDate: 'II квартал 2026',
    images: generateProjectImages('Hilltop', 17, 'Hilltop')
  }
];

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [lightboxProject, setLightboxProject] = useState<number | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    // TODO: Отправить телефон на сервер
    // eslint-disable-next-line no-console
    console.log('Phone submitted:', phone);

    setIsModalOpen(false);
    setPhone('');
  };

  const openLightbox = (projectIndex: number, imageIndex: number) => {
    setLightboxProject(projectIndex);
    setLightboxImageIndex(imageIndex);
  };

  const closeLightbox = () => {
    setLightboxProject(null);
    setLightboxImageIndex(0);
  };

  const nextImage = () => {
    if (lightboxProject !== null) {
      const project = projects[lightboxProject];

      setLightboxImageIndex((prev) =>
        prev < project.images.length - 1 ? prev + 1 : 0);
    }
  };

  const prevImage = () => {
    if (lightboxProject !== null) {
      const project = projects[lightboxProject];

      setLightboxImageIndex((prev) =>
        prev > 0 ? prev - 1 : project.images.length - 1);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setLightboxImageIndex(index);
  };

  return (
    <section id={'projects'} className={'py-20 lg:py-32 bg-background'}>
      <div className={'container mx-auto px-4 lg:px-8'}>
        <H2 className={'lg:text-5xl font-normal text-center mb-16 text-primary'}>
          {'Проекты'}
        </H2>
        <div className={'grid md:grid-cols-2 gap-8 lg:gap-12'}>
          {
            projects.map((project, projectIndex) => (
              <div
                key={project.id}
                className={
                  'bg-card rounded-2xl overflow-hidden shadow-soft ' +
                  'hover:shadow-medium transition-shadow'
                }
              >
                {/* Image Gallery */}
                <div className={'relative aspect-[4/3] overflow-hidden group'}>
                  <div
                    onClick={() => openLightbox(projectIndex, 0)}
                    className={'w-full h-full hover:cursor-pointer'}
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      width={1080}
                      height={720}
                      className={
                        'w-full h-full object-cover group-hover:scale-105 ' +
                        'transition-transform duration-300'
                      }
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={'p-6 lg:p-8 space-y-6'}>
                  <H3 className={'text-card-foreground font-normal text-3xl'}>
                    {project.name}
                  </H3>

                  {/*
                  <div className={'grid grid-cols-2 gap-4 text-sm'}>
                    <div className={'flex items-center gap-2 text-muted-foreground'}>
                      <Home size={18} />
                      { <P>{project.area}{' м²'}</P>
                    </div>
                    <div className={'flex items-center gap-2 text-muted-foreground'}>
                      <LayoutDashboard size={18} />
                       <P>{project.rooms}{' комнаты'}</P>
                    </div>
                     <div
                      className={
                        'flex items-center gap-2 text-muted-foreground col-span-2'
                      }
                    >
                      <Calendar size={18} />
                      <P>
                        {'Готовность: '}
                        {project.readyDate}
                      </P>
                    </div>
                  </div>*/}

                  {/* <div className={'space-y-2'}>
                    <P className={'font-semibold text-muted-foreground'}>
                      {'На территории:\r'}
                    </P>
                    <ul className={'space-y-1 text-sm'}>
                      {
                        project.features.map((feature) => (
                          <li key={feature} className={'flex items-center gap-2'}>
                            <div
                              className={'w-1.5 h-1.5 rounded-full bg-primary'}
                            />
                            <P>{feature}</P>
                          </li>
                        ))
                      }
                    </ul>
                  </div> */}

                  <div className={'pt-4 border-t border-border'}>
                    <P className={'text-3xl font-bold text-accent mb-4 text-secondary'}>
                      {project.price}
                    </P>
                    <Button
                      onClick={openModal}
                      className={'w-full rounded-full hover:opacity-90 transition-opacity text-xl'}
                      size={'lg'}
                    >
                      {'Узнать подробнее'}
                    </Button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {/* Map Placeholder */}
        <div className={'mt-16 rounded-2xl overflow-hidden shadow-medium'}>
          <div className={'aspect-video bg-muted flex items-center justify-center'}>
            <div className={'text-center space-y-2'}>
              <MapPin className={'mx-auto text-muted-foreground'} size={48} />
              <P className={'text-muted-foreground'}>{'Интерактивная карта поселка'}</P>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{'Оставьте номер телефона'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className={'space-y-4'}>
            <Input
              type={'tel'}
              placeholder={'+7 (___) ___-__-__'}
              value={phone}
              onChange={(evt) => setPhone(evt.target.value)}
              required={true}
              className={'rounded-lg'}
            />
            <Button
              type={'submit'}
              className={
                'w-full rounded-full bg-gradient-primary ' +
                'hover:opacity-90 transition-opacity'
              }
            >
              {'Отправить'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Image Lightbox */}
      {
        lightboxProject !== null && (
          <ImageLightbox
            images={
              projects[lightboxProject].images.map((src, index) => {
                return {
                  src,
                  alt: `${projects[lightboxProject].name} - изображение ${index + 1}`
                };
              })
            }
            currentIndex={lightboxImageIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
            onThumbnailClick={handleThumbnailClick}
            showThumbnails={true}
            showCounter={projects[lightboxProject].images.length > 1}
            imageWidth={1200}
            imageHeight={800}
          />
        )
      }
    </section>
  );
};

export default ProjectsSection;
