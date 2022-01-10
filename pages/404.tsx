import Link from 'next/link';
import { FC } from 'react';

const NotFoundPage: FC = () => (
  <div>
    <h2>404</h2>
    <h4>Page not found...</h4>
    <Link href="/">Homepage</Link>
  </div>
);

export default NotFoundPage;
