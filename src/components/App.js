// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [dogUrl, setDogUrl] = useState("");
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) => {
          setDogUrl(data.message);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching dog image:", error);
        });
    }, []);
  
    useEffect(() => {
      if (dogUrl) {
        setImage(<img alt="A Random Dog" src={dogUrl} />);
      }
    }, [dogUrl]);
  
    return (
      <div>
        <p>{isLoading ? "Loading..." : image}</p>
      </div>
    );
  }

export default App