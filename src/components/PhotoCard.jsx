export default function PhotoCard({ photo, favourites, dispatch }) {

  const isFav = favourites.includes(photo.id);

  const toggleFav = () => {
    dispatch({
      type: "TOGGLE_FAV",
      payload: photo.id
    });
  };

  return (
    <div className="bg-white rounded shadow">

      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover rounded-t"
      />

      <div className="flex justify-between items-center p-3">

        <p className="text-sm">{photo.author}</p>

        <button onClick={toggleFav}>
          {isFav ? "❤️" : "🤍"}
        </button>

      </div>

    </div>
  );
}