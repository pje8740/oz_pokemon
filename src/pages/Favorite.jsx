import { useSelector } from "react-redux";
import { selectFavoritePokemon } from "../RTK/selector";

export default function Favorite() {
  const pokemon = useSelector(selectFavoritePokemon);
  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
