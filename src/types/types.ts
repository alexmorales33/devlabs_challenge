import { ViewProps } from "react-native";

export type Product = {
  id: string;
  name: string;
};

export type Province = {
  label: string;
  value: string;
};

export type RootStackParamList = {
  Home: undefined;
  Heart: undefined;
  Bag: undefined;
  Notification: undefined;
  OnBoarding: undefined;
};

export interface CoffeeType {
  type: string;
  with: string;
  image: string;
  rating: number;
  opinions: number;
  description: string;
  price: number;
  size: string[];
}

export interface TopRowProps extends ViewProps {
  alignItems?: string;
}

export interface RatingRowProps extends ViewProps {
  alignItems?: string;
  justifyContent?: string;
}

export type DetailItemRouteParams = {
  coffeeId: number;
};

export type RootStackParamListDetail = {
  DetailItem: DetailItemRouteParams;
};

export interface FlexibleContainerProps extends ViewProps {
  width: string;
  height: string;
}
