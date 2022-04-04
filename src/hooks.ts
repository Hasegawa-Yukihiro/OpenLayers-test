import { useCallback, useEffect, useMemo, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

export const useHooks = () => {
  const mapRef = useRef(null);
  const map = useMemo(
    () =>
      new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      }),
    []
  );

  const handleZoomOutClick = useCallback(() => {
    const view = map.getView();
    const zoom = view.getZoom()!;
    view.setZoom(zoom - 1);
  }, [map]);

  const handleZoomInClick = useCallback(() => {
    const view = map.getView();
    const zoom = view.getZoom()!;
    view.setZoom(zoom + 1);
  }, [map]);

  useEffect(() => {
    map.setTarget(mapRef.current!);
  }, [map]);

  return { mapRef, handleZoomOutClick, handleZoomInClick };
};
