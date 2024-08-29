import { SortOrder } from "../../util/SortOrder";

export type TicketBookingOrderByInput = {
  createdAt?: SortOrder;
  eventDate?: SortOrder;
  id?: SortOrder;
  paymentStatus?: SortOrder;
  timeSlot?: SortOrder;
  updatedAt?: SortOrder;
};
