import * as ActionTypes from './actionType'

export const addCar = ( make, model) => ({
    type: ActionTypes.ADD_CAR,
    payload: {
        make: make,
        model: model,
    }
})
export const deleteCar = (id) =>({
    type: ActionTypes.DELETE_CAR,
    payload: {id:id}
})

export const updateCar = (id,make,model) =>({
    type: ActionTypes.UPDATE_CAR,
    payload: {
        id: id,
        make: make,
        model: model,
    }
})