import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactElement, cloneElement } from 'react';

export interface NavLinkProps extends LinkProps {
  children: ReactElement;
}

const NavLink: FC<NavLinkProps> = ({ children, href, ...props }) => {
  const router = useRouter();

  return (
    <Link href={href} {...props}>
      {router.pathname === href
        ? cloneElement(children, {
            className: `${children.props.className || ''}active`,
          })
        : children}
    </Link>
  );
};

export default NavLink;