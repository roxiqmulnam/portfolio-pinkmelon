import Link from 'next/link';

export type UnstyledLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function UnstyledLink({
  children,
  href,
  className,
}: UnstyledLinkProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
