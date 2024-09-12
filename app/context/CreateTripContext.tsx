import { createContext, Dispatch, SetStateAction } from "react";

export type ContextDataType = string[];

export type TripContextObject<TData> = {
  tripContext: TData;
  setTripContext: Dispatch<SetStateAction<TData>>;
};

export const CreateTripContext = createContext<TripContextObject<ContextDataType> | null>(
  null
);
