type Booking = {
  id: number;
  userId: number;
  itemId: number[];
  branchId: number;
  type: "in-store" | "home-delivery";
  bookingDate: string;
  confirmationDate: string | null;
  deliveryDate: string | null;
  status: "pending" | "confirmed" | "cancelled";
  totalPrice: number;
  discount: number;
};

export default Booking;
