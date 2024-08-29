export type TicketBooking = {
  createdAt: Date;
  eventDate: Date | null;
  id: string;
  paymentStatus: boolean | null;
  timeSlot: string | null;
  updatedAt: Date;
};
