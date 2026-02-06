// Define the rules for what a Card must have
export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
}

// Define the rules for what a Button must have
export interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary'; // Optional styling choice
}

export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  id: number;
  name: string;
  address: AddressProps;
  rating: number;
  category: string[];
  price: number;
  offers: OffersProps;
  image: string;
  discount: string;
  location: string;
  reviews: number;
}