import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title = "Welcome" }) => {
  return (
    <>
      <Head>
        <title>{title} | POKEMONAPP</title>
        <meta name="author" content="DiegoDom" />
        <meta name="description" content={`Detalles del pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex"`} />
        <meta property="og:title" content={`${title} | POKEMONAPP`} />
        <meta
          property="og:description"
          content={`Detalles del pokémon ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main className="main">{children}</main>
    </>
  );
};
