import { useEffect, useState } from "react";
import { NextPage } from "next";

import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { FavoritePokemos } from "../../components/pokemon";
import { localFavorites } from "../../utils";

const FavoritesPage: NextPage = () => {
  const [favoritesPokemos, setFavoritesPokemos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemos(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritesPokemos.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemos pokemons={favoritesPokemos} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
