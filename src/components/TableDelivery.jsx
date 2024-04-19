import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'

const TableDelivery = () => {
    const user_id = "661fdfe5ce2a67a15ead2115"
    const [dataCustomer, setDataCustomer] = useState()

    useEffect(() => {
        const getCustomers = async () => {
            try {
                const response = await fetch(`${BASE_URL}/customer/getCustomers/${user_id}`)
                if (response.ok) {
                    const data = await response.json()
                    console.log(data.data)
                    data.data.forEach((customer) => {
                        console.log(`customer: ----> ${customer.customer.name}`)
                    })
                    setDataCustomer(data.data)
                    

                }
            } catch (error) {

            }
        }
        getCustomers()
    }, [user_id])
    const getDeliveryQuantity = (customer, index) => {
        if (customer.deliveries && customer.deliveries.length > index) {
            return customer.deliveries[index].quantity;
        }
        return '0';
    };

    return (
        <div>TableDelivery
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Precio botella</th>
                        <th>Dia 1</th>
                        <th>Dia 2</th>
                        <th>Dia 3</th>
                        <th>Dia 4</th>
                        <th>Dia 5</th>
                        <th>Dia 6</th>
                        <th>Dia 7</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        dataCustomer ? <>
                            {
                                dataCustomer.map((customer, index) => (
                                    <tr key={index}>
                                    <td>{customer.customer.name}</td>
                                    <td>{customer.customer.price_per_bottle}</td>                                        
                                    {[0, 1, 2, 3, 4, 5, 6].map((deliveryIndex) => (
                                        <td key={deliveryIndex}>{getDeliveryQuantity(customer, deliveryIndex)}</td>
                                    ))}
                                    <td></td>
                                </tr>
                                    
                                ))
                            }

                        </> : <><h1>No hay datos</h1></>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableDelivery