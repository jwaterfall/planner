import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { FaCalendarDay, FaHandsWash, FaStickyNote } from 'react-icons/fa';

interface NavbarLinkProps {
  href: string;
  Icon: IconType;
}

const NavbarLink: FC<NavbarLinkProps> = ({ Icon, href }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={`p-4 flex items-center justify-center grow border-y-2 border-transparent transition-colors
      ${isActive ? 'border-t-red-500 text-red-500' : 'text-white'}`}
      passHref
    >
      <Icon className="w-6 h-6" />
    </Link>
  );
};

const Navbar: FC = () => (
  <div className="w-full flex bg-neutral-800">
    <NavbarLink href="/" Icon={FaStickyNote} />
    <NavbarLink href="/upcoming" Icon={FaCalendarDay} />
    <NavbarLink href="/cleaning" Icon={FaHandsWash} />
  </div>
);

export default Navbar;
