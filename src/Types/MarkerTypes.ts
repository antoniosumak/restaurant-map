export type EventHandlers = {
  [eventName: string]: (event: L.LeafletEvent) => void;
};

export type MarkerProps = {
  lat: number;
  lng: number;
  eventHandlers?: EventHandlers;
  additionalProperties?: any;
};
