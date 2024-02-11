import React, { useEffect, useState } from "react";
import fileList from "./images.js"; // Adjust the path accordingly
import "./final.scss";
import useSound from "use-sound";
import boopSfx from "./budday.mp3";
import cake from "./imageFolder/birthday-happy.gif";

const Final = () => {
  const [finalPPT, setFinalPPT] = useState(false);
  const [play] = useSound(boopSfx);
  const [zoom, setZoom] = useState(1);

  const [shuffledPhotos, setShuffledPhotos] = useState([]);
  const [animatedPhotos, setAnimatedPhotos] = useState([]);

  useEffect(() => {
    const photos = [...fileList];

    // Shuffle the array of photos
    const shuffled = [...photos].sort(() => Math.random() - 0.5);
    setShuffledPhotos(shuffled);
  }, []);

  const handleFinalPPT = () => {
    if (zoom < 10) {
      setZoom(zoom * 2);
      return;
    }
    play();
    setFinalPPT(true);
    const animatePhotos = async () => {
      const animated = [];
      for (let i = 0; i < shuffledPhotos.length; i++) {
        animated.push(shuffledPhotos[i]);
        setAnimatedPhotos([...animated]);
        await new Promise((resolve) => setTimeout(resolve, 300)); // Adjust the delay as needed
      }
    };

    animatePhotos();
  };

  return (
    <>
      {finalPPT == false ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "100vh",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "40vh",
              backgroundColor: "#755151",
              color: "white",
              fontSize: "30px",
              display: "flex",
            }}
          >
            <div
              style={{
                margin: "auto",
                width: "fit-content",
                backgroundColor: "rgb(230, 174, 66)",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              Ready for your 23rd Birthday Bash?
            </div>
          </div>
          <div
            onClick={handleFinalPPT}
            style={{
              position: "absolute",
              zIndex: "1",
              padding: "30px",
              fontSize: "15px",
              backgroundColor: "white",
              border: "1px solid black",
              top: "35%",
              transform: `scale(${zoom})`,
              cursor: "default",
            }}
          >
            Yes
          </div>
          <div>
            <img
              src={cake}
              style={{
                width: "500px",
                height: "fit-content",
                marginTop: "auto",
                marginBottom: 0,
              }}
            />
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            backgroundColor: "#200",
          }}
        >
          <div
            // onClick={play}
            style={{
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontSize: "100px",
              backgroundColor: "#faedcb",
              color: "#200",
              borderRadius: "50px",
              border: "1px solid white",
            }}
          >
            Happy Birthday Haroo Cookieeeee!!<br></br>Scroll Down and Have fun!
          </div>
          <div
            className="photo-collage"
            style={{
              backgroundColor: "#200",
            }}
          >
            {animatedPhotos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                className={`collage-photo animated-photo-${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Final;
