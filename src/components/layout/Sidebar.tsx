import React, { useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

const Sidebar: React.FC = () => {
  const { fetchWeather } = useWeather();
  const [favorites, setFavorites] = useState<{ name: string; image: string }[]>(
    [
      {
        name: "New York",
        image: "/assets/images/city3.webp",
      },
      {
        name: "San Francisco",
        image: "/assets/images/city1.webp",
      },
    ]
  );
  const [showModal, setShowModal] = useState(false);
  const [cityInput, setCityInput] = useState("");

  // Random images for cities
  const cityImages = [
    "/assets/images/city1.webp",
    "/assets/images/city2.webp",
    "/assets/images/city3.webp",
    "/assets/images/city4.webp",
    "/assets/images/city5.webp",
  ];

  useEffect(() => {
    localStorage.setItem("favorities", JSON.stringify(favorites));
  }, [favorites]);

  // Add new favorite city
  const addFavoriteCity = () => {
    if (cityInput.trim() === "") return;
    if (
      favorites.some(
        (city) => city.name.toLowerCase() === cityInput.toLowerCase()
      )
    ) {
      return;
    }

    const randomImage =
      cityImages[Math.floor(Math.random() * cityImages.length)];

    const newFavourites = [
      ...favorites,
      { name: cityInput, image: randomImage },
    ];

    setFavorites(newFavourites);

    setCityInput("");
    setShowModal(false);
  };

  useEffect(() => {
    const favorite = localStorage.getItem("favorites");
    if (favorite) {
      setFavorites(JSON.parse(favorite));
    } else {
      setFavorites([
        {
          name: "New York",
          image: "/assets/images/city3.webp",
        },
        {
          name: "San Francisco",
          image: "/assets/images/city1.webp",
        },
      ]);
    }
  }, []);

  return (
    <aside className="w-full md:w-[288px] p-6">
      {/* Favourites Section */}
      <div className="border p-4 rounded-xl border-border-gray">
        <h2 className="font-bold text-lg">Add to favourites</h2>
        <p className="text-dark-gray text-base font-normal">
          Save your favourite cities for quick access in the future.
        </p>
        <Button
          onClick={() => setShowModal(true)}
          className="mt-3 w-full bg-light-blue font-medium text-base !rounded-2xl"
          data-testid="add-favourite-button"
        >
          Add to favourites
        </Button>
      </div>

      {/* Favorite Cities List */}
      <ul className="mt-6 space-y-4">
        {favorites.map((city) => (
          <li
            key={city.name}
            onClick={() => fetchWeather(city.name)}
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-lg">{city.name}</span>
          </li>
        ))}
      </ul>

      {/* Modal for Adding Favorite City */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className="text-lg font-semibold">Add City to Favorites</h2>
          <input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            className="mt-3 p-2 w-full border rounded-lg text-primary"
            placeholder="Enter city name..."
          />
          <Button
            onClick={addFavoriteCity}
            className="mt-3 w-full bg-light-blue text-primary font-medium text-base rounded-lg"
          >
            Save City
          </Button>
        </Modal>
      )}
    </aside>
  );
};

export default Sidebar;
