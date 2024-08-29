import { TicketBookingWhereInput } from "./TicketBookingWhereInput";
import { TicketBookingOrderByInput } from "./TicketBookingOrderByInput";

export type TicketBookingFindManyArgs = {
  where?: TicketBookingWhereInput;
  orderBy?: Array<TicketBookingOrderByInput>;
  skip?: number;
  take?: number;
};
