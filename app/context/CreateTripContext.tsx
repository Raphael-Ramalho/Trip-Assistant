import { TravelersListType } from "@/pages/MyTrips/SelectTraveler/selectTraveler.types";
import { Moment } from "moment";
import { createContext, Dispatch, SetStateAction } from "react";
import { Point } from "react-native-google-places-autocomplete";

export type ContextDataType = {
  locationInfo: {
    name?: string;
    coordinates?: Point;
    photoRef?: string;
    url?: string;
  };
  travelerCount?: TravelersListType;
  startDate?: Moment;
  endDate?: Moment;
  totalNoOfDays?: number;
};

export type TripContextObject = {
  tripData: ContextDataType;
  setTripData: Dispatch<SetStateAction<ContextDataType>>;
};

export const initialContextValue: TripContextObject = {
  tripData: { locationInfo: {} },
  setTripData: () => {},
};

export const CreateTripContext =
  createContext<TripContextObject>(initialContextValue);
