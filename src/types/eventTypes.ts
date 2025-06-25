export interface BookingData {
  name: string;
  email: string;
  tickets: number;
  paymentMethod: "credit" | "debit" | "paypal";
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
}

export interface BookingData {
  name: string;
  email: string;
  tickets: number;
  paymentMethod: "credit" | "debit" | "paypal";
}

// Add this export if missing
export type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  price: number;
  image: string;
  seats: number;
};
