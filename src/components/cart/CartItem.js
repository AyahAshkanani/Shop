import {List} from "native-base";
import React from 'react'

const CartItem = ({item}) => {
    return (
        <List.Item>
            <Text>{item.name}</Text>
            <Text>{item.price} x {item.quantity}</Text>
        </List.Item>
    )
}

export default CartItem
