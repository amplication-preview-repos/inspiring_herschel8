import { Injectable } from "@nestjs/common";
import { PaymentInitiateInput } from "../paymentProcessing/PaymentInitiateInput";

@Injectable()
export class PaymentProcessingService {
  constructor() {}
  async InitiatePayment(args: PaymentInitiateInput): Promise<PaymentInitiateInput> {
    throw new Error("Not implemented");
  }
  async VerifyPayment(args: PaymentInitiateInput): Promise<PaymentInitiateInput> {
    throw new Error("Not implemented");
  }
}
