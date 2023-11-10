
import { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'ReelTalk' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>&copy; {new Date().getFullYear()} ReelTalk</p>
    </footer>
  </div>
);

export default Layout;
