import UnstyledLink from './links/UnstyledLink';

export default function Footer() {
  return (
    <footer className='h-20 flex items-center justify-center bg-secondary'>
      <UnstyledLink href="/">
        <h1 className="text-green-normal text-3xl font-bold">
          Pink<span className="text-pink-bold">Melon</span>
        </h1>
      </UnstyledLink>
    </footer>
  );
}
