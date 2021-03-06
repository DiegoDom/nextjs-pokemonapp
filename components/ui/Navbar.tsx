import Image from "next/image";
import NextLink from "next/link";
import { Spacer, Text, useTheme, Link } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: theme?.colors.gray900.value,
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        padding: "0px 20px",
        width: "100%",
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
            alt="App icon"
            width={70}
            height={70}
          />
        </Link>
      </NextLink>
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
