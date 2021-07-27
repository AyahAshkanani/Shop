import React from 'react'
import cartStore from '../../stores/cartStore'
import cakeStore from '../../stores/cakeStore'
import CartItem from './CartItem'

const CartList = () => {
    if (cakeStore.loading) return <Spinner/>
    const cartList = cartStore.items.map((item)=> cakeStore.getCakeById(item.cakeId)).map((item)=> <CartItem item={item} key={item.id}/>)
    return (
        <List>{cartList}</List>
    )
}

export default CartList
