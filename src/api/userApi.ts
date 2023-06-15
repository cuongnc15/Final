import { Customer } from "../types/Types"
import axiosInstan from "./axiosInstan"

const userApi = {
    getUser: () : Promise<Customer[]> => {
        return axiosInstan.get('customers')
    },
    getUserID: (UserID: number) : Promise<Customer> => {
        return axiosInstan.get('customers/' + UserID + 'details')
    },
    getUserOrder: (UserID: number) : Promise<Customer> => {
        return axiosInstan.get('customers/' + UserID + 'orders')
    }
}

export default userApi