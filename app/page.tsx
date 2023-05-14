import Image from 'next/image';

export default function Home() {
  return (
    <main className="layout-wrapper h-[200vh]">
      <section className="flex justify-between mt-14">
        <figure className="font-normal lg:text-4xl text-pink-normal lg:leading-snug lg:w-[55%]">
          <h2 className="text-green-bold font-bold mb-4">Hello There!</h2>
          <h2>
            I&rsquo;m{' '}
            <span className="text-pink-bold">PinkMelon, a 2D Artist.</span>
            <br />I really love to draw human portraits, also do pixels, sprite,
            and design too!
          </h2>
          <p className="font-light mt-10">Talk to me personally?</p>
        </figure>
        <Image
          className="hidden md:block rounded-[100px]"
          src="/hero.png"
          height={320}
          width={320}
          alt="hero"
        />
      </section>
    </main>
  );
}
