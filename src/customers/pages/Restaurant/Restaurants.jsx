import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurantsAction } from '../../../state/customers/Restaurant/restaurant.action'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'

const Restaurants = () => {
    const { restaurant } = useSelector(store => store)
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")

    useEffect(() => {
        dispatch(getAllRestaurantsAction(jwt))
    }, [dispatch, jwt])

    return (
        <div className="min-h-screen bg-neutral-50 py-10 animate-fade-in">
            <div className="container-custom">
                <h1 className="text-4xl font-display font-bold text-neutral-900 mb-8">All Restaurants</h1>

                {restaurant.restaurants && restaurant.restaurants.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {restaurant.restaurants.map((item) => (
                            <div key={item.id} className="transform transition duration-300 hover:-translate-y-2">
                                <RestaurantCard data={item} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-64">
                        <p className="text-xl text-neutral-500">No restaurants found.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Restaurants
