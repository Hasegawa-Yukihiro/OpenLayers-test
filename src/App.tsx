import React from "react";
import "ol/ol.css";
import { useHooks } from "./hooks";

const App = () => {
  const { mapRef, handleZoomOutClick, handleZoomInClick } = useHooks();

  return (
    <React.Fragment>
      <div style={{ zIndex: 0, height: "400px" }} ref={mapRef} />
      <button onClick={handleZoomOutClick}>Zoom out</button>
      <button onClick={handleZoomInClick}>Zoom in</button>
    </React.Fragment>
  );
};

export default App;
