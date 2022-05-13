import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element | JSX.Element[],
  title?: string;
};

export const Layout: FC<Props> = ({ children, title = 'Welcome' }) => {
  return (
    <>
      <Head>
        <title>{ title } | POKEMONAPP</title>
        <meta name="author" content="DiegoDom" />
        <meta name="description" content="Detalles del pokémon $$$$$" />
        <meta name="keywords" content={`${ title }, pokemon, pokedex"`} />
      </Head>

      <Navbar/>

      <main className='main'>
        { children }
      </main>

    </>
  )
}
