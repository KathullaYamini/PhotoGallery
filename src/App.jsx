import { useReducer, useEffect } from "react";
import Gallery from "./components/Gallery";
import { favouritesReducer } from "./reducers/favouritesReducer";

export default function App() {

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    () => {
      const stored = localStorage.getItem("favourites");
      return stored ? JSON.parse(stored) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Gallery favourites={favourites} dispatch={dispatch} />
    </div>
  );
}