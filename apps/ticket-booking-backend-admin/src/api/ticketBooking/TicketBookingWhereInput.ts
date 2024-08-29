import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TicketBookingWhereInput = {
  eventDate?: DateTimeNullableFilter;
  id?: StringFilter;
  paymentStatus?: BooleanNullableFilter;
  timeSlot?: StringNullableFilter;
};
