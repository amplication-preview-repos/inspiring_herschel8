import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentProcessingService } from "./paymentprocessing.service";
import { PaymentInitiateInput } from "../paymentProcessing/PaymentInitiateInput";

@swagger.ApiTags("paymentProcessings")
@common.Controller("paymentProcessings")
export class PaymentProcessingController {
  constructor(protected readonly service: PaymentProcessingService) {}

  @common.Post("/initiate-payment")
  @swagger.ApiOkResponse({
    type: PaymentInitiateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InitiatePayment(
    @common.Body()
    body: PaymentInitiateInput
  ): Promise<PaymentInitiateInput> {
        return this.service.InitiatePayment(body);
      }

  @common.Post("/verify-payment")
  @swagger.ApiOkResponse({
    type: PaymentInitiateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VerifyPayment(
    @common.Body()
    body: PaymentInitiateInput
  ): Promise<PaymentInitiateInput> {
        return this.service.VerifyPayment(body);
      }
}
