const AddHouse = ({ setHouses }) => {
  const addHouse = async () => {
    const newHouse = {
      id: 3,
      address: "4 Privet Dr, Little Whinging, Surrey",
      country: "United Kingdom",
      price: 1000000,
    };

    const response = await fetch("http://localhost:5000/house", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHouse),
    });

    if (response.ok) {
      setHouses((currentHouses) => [...currentHouses, newHouse]);
    }
  };

  return (
    <>
      <button onClick={addHouse} className="btn btn-primary">
        Add
      </button>
    </>
  );
};

export default AddHouse;
