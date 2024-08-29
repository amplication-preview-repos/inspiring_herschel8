import { TicketBooking as TTicketBooking } from "../api/ticketBooking/TicketBooking";

export const TICKETBOOKING_TITLE_FIELD = "timeSlot";

export const TicketBookingTitle = (record: TTicketBooking): string => {
  return record.timeSlot?.toString() || String(record.id);
};
