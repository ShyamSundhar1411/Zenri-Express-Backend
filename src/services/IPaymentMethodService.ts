import { ServiceResult } from "../domain/interfaces";
import { PaymentMethod, PaymentMethodCreateRequest, PaymentMethods } from "../domain/paymentMethodSchema";

export interface IPaymentMethodService{
    getMyPaymentMethods(userId: string): Promise<ServiceResult<PaymentMethods>>

    createPaymentMethod(userId: string,paymentMethodData: PaymentMethodCreateRequest): Promise<ServiceResult<PaymentMethod>>
}