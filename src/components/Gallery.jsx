import { useState, useMemo, useCallback } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";
import Spinner from "./Spinner";

export default function Gallery({ favourites, dispatch }) {

  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter(photo =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div>

      <input
        type="text"
        placeholder="Search by author..."
        onChange={handleSearch}
        className="w-full p-3 border rounded mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {filteredPhotos.map(photo => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            favourites={favourites}
            dispatch={dispatch}
          />
        ))}

      </div>

    </div>
  );
}