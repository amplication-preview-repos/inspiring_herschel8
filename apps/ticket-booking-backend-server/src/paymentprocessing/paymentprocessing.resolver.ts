import * as graphql from "@nestjs/graphql";
import { PaymentInitiateInput } from "../paymentProcessing/PaymentInitiateInput";
import { PaymentProcessingService } from "./paymentprocessing.service";

export class PaymentProcessingResolver {
  constructor(protected readonly service: PaymentProcessingService) {}

  @graphql.Mutation(() => PaymentInitiateInput)
  async InitiatePayment(
    @graphql.Args()
    args: PaymentInitiateInput
  ): Promise<PaymentInitiateInput> {
    return this.service.InitiatePayment(args);
  }

  @graphql.Mutation(() => PaymentInitiateInput)
  async VerifyPayment(
    @graphql.Args()
    args: PaymentInitiateInput
  ): Promise<PaymentInitiateInput> {
    return this.service.VerifyPayment(args);
  }
}
