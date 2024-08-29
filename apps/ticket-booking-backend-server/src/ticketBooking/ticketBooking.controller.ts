import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TicketBookingService } from "./ticketBooking.service";
import { TicketBookingControllerBase } from "./base/ticketBooking.controller.base";

@swagger.ApiTags("ticketBookings")
@common.Controller("ticketBookings")
export class TicketBookingController extends TicketBookingControllerBase {
  constructor(protected readonly service: TicketBookingService) {
    super(service);
  }
}
