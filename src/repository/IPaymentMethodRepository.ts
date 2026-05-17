import { RepoResult } from "../domain/interfaces";
import { PaymentMethod } from "../generated/client";

export interface IPaymentMethodRepository{
    getPaymentMethodById(paymentMethodId: string, userId: string): Promise<RepoResult<PaymentMethod>>
    getPaymentMethodByQuery(query: string, userId: string): Promise<RepoResult<PaymentMethod>>
}