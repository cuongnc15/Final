export interface Customer {
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    state: string,
    gender: string,
    orders: [
      {
        itemCost: number,
        productName: string,
      }
    ]
}