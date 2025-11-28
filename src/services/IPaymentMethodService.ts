import { ServiceResult } from "../domain/interfaces";
import { PaymentMethod, PaymentMethodCreateRequest, PaymentMethods, PaymentMethodTypes } from "../domain/paymentMethod";

export interface IPaymentMethodService{
    getMyPaymentMethods(userId: string): Promise<ServiceResult<PaymentMethods>>
    getAllPaymentMethodTypes(): Promise<ServiceResult<PaymentMethodTypes>>
    createPaymentMethod(userId: string,paymentMethodData: PaymentMethodCreateRequest): Promise<ServiceResult<PaymentMethod>>
}