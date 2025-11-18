'use client';

import {useState} from 'react';
import {Calendar, Home, MapPin, X} from 'lucide-react';
import Image from 'next/image';

import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';

const projects = [
  {
    id: 1,
    name: 'Проект «Лесная усадьба»',
    area: 180,
    rooms: 4,
    price: 'от 15 500 000 ₽',
    features: ['Панорамное остекление', 'Терраса 40 м²', 'Гараж на 2 авто'],
    readyDate: 'IV квартал 2025',
    images: ['/project1.png']
  },
  {
    id: 2,
    name: 'Проект «Современный минимализм»',
    area: 140,
    rooms: 3,
    price: 'от 12 800 000 ₽',
    features: ['Плоская крыша', 'Патио', 'Умный дом'],
    readyDate: 'II квартал 2026',
    images: ['/project2.png']
  }
];

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [phone, setPhone] = useState('');
  const [lightboxProject, setLightboxProject] = useState<number | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

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

  return (
    <section id={'projects'} className={'py-20 lg:py-32 bg-background'}>
      <div className={'container mx-auto px-4 lg:px-8'}>
        <h2 className={'text-3xl lg:text-5xl font-bold text-center mb-16 text-primary'}>
          {'Проекты\r'}
        </h2>

        <div className={'grid md:grid-cols-2 gap-8 lg:gap-12'}>
          {
            projects.map((project, projectIndex) => (
              <div
                key={project.id}
                className={'bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow'}
              >
                {/* Image Gallery */}
                <div className={'relative aspect-[4/3] overflow-hidden group'}>
                  <button
                    onClick={() => openLightbox(projectIndex, 0)}
                    className={'w-full h-full'}
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      width={100}
                      height={100}
                      className={'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className={'p-6 lg:p-8 space-y-6'}>
                  <h3 className={'text-2xl font-bold text-card-foreground'}>
                    {project.name}
                  </h3>

                  <div className={'grid grid-cols-2 gap-4 text-sm'}>
                    <div className={'flex items-center gap-2 text-muted-foreground'}>
                      <Home size={18} />
                      <span>{project.area}{' м²'}</span>
                    </div>
                    <div className={'flex items-center gap-2 text-muted-foreground'}>
                      <Home size={18} />
                      <span>{project.rooms}{' комнаты'}</span>
                    </div>
                    <div className={'flex items-center gap-2 text-muted-foreground col-span-2'}>
                      <Calendar size={18} />
                      <span>{'Готовность: '}{project.readyDate}</span>
                    </div>
                  </div>

                  <div className={'space-y-2'}>
                    <p className={'font-semibold text-muted-foreground'}>
                      {'На территории:\r'}
                    </p>
                    <ul className={'space-y-1 text-sm'}>
                      {
                        project.features.map((feature, index) => (
                          <li key={index} className={'flex items-center gap-2'}>
                            <div className={'w-1.5 h-1.5 rounded-full bg-primary'} />
                            <span>{feature}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>

                  <div className={'pt-4 border-t border-border'}>
                    <p className={'text-2xl font-bold text-accent mb-4'}>
                      {project.price}
                    </p>
                    <Button
                      onClick={() => openModal(project.id)}
                      className={'w-full rounded-full bg-gradient-primary hover:opacity-90 transition-opacity'}
                      size={'lg'}
                    >
                      {'Узнать подробнее\r'}
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
              <p className={'text-muted-foreground'}>{'Интерактивная карта поселка'}</p>
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
              onChange={(e) => setPhone(e.target.value)}
              required={true}
              className={'rounded-lg'}
            />
            <Button
              type={'submit'}
              className={'w-full rounded-full bg-gradient-primary hover:opacity-90 transition-opacity'}
            >
              {'Отправить\r'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Image Lightbox */}
      {
        lightboxProject !== null && (
          <div className={'fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center'}>
            <button
              onClick={closeLightbox}
              className={'absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors'}
            >
              <X size={32} />
            </button>

            <div className={'max-w-7xl max-h-[90vh] mx-4'}>
              <Image
                src={projects[lightboxProject].images[lightboxImageIndex]}
                alt={projects[lightboxProject].name}
                className={'max-w-full max-h-full object-contain rounded-lg'}
              />
            </div>
          </div>
        )
      }
    </section>
  );
};

export default ProjectsSection;
