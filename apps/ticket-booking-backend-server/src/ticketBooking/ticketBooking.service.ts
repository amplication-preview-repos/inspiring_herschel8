import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TicketBookingServiceBase } from "./base/ticketBooking.service.base";

@Injectable()
export class TicketBookingService extends TicketBookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
