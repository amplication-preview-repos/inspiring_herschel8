import { Module } from "@nestjs/common";
import { TicketBookingModuleBase } from "./base/ticketBooking.module.base";
import { TicketBookingService } from "./ticketBooking.service";
import { TicketBookingController } from "./ticketBooking.controller";
import { TicketBookingResolver } from "./ticketBooking.resolver";

@Module({
  imports: [TicketBookingModuleBase],
  controllers: [TicketBookingController],
  providers: [TicketBookingService, TicketBookingResolver],
  exports: [TicketBookingService],
})
export class TicketBookingModule {}
