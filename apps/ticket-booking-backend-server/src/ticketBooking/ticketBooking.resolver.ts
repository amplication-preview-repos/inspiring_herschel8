import * as graphql from "@nestjs/graphql";
import { TicketBookingResolverBase } from "./base/ticketBooking.resolver.base";
import { TicketBooking } from "./base/TicketBooking";
import { TicketBookingService } from "./ticketBooking.service";

@graphql.Resolver(() => TicketBooking)
export class TicketBookingResolver extends TicketBookingResolverBase {
  constructor(protected readonly service: TicketBookingService) {
    super(service);
  }
}
