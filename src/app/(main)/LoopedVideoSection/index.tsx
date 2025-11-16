import {Button} from '@/components/ui/button';
import {H1, Lead} from '@/components/ui/typography';

export default function LoopedVideoSection() {
  return (
    <section className={'relative h-[80vh] w-full md:h-screen overflow-hidden'}>
      <video
        className={'absolute inset-0 h-full w-full object-cover'}
        src={'/interview.mp4'}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
      />
      <div className={'absolute inset-0 bg-black/40'} />
      <div className={'relative z-10 flex h-full py-18 mx-4 lg:mx-0'}>
        <div className={'text-white mr-auto ml-auto'}>
          <H1 className={'text-white lg:text-7xl font-normal'}>
            {'Дружелюбный поселок в пяти минутах от города'}
          </H1>
          <Lead className={'text-white text-lg mt-7'}>
            {'Ваш дом — место наполнения энергией'}
          </Lead>
          <a href={'#projects'}>
            <Button size={'xl'} className={'rounded-md mt-9'} variant={'outline'}>
              {'Подобрать дом'}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}