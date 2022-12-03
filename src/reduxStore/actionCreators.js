import * as ActionTypes from './actionType';

const url="https://private-anon-f0ee351a32-carsapi1.apiary-mock.com/cars"
export const fetchCars = () => dispatch => {
    dispatch(carsLoading());
    return fetch(url)
    .then(response => {
        if(response.ok){
            return response;
        } else {
            const err = new Error(`Error ${response.status}:${response.statusText}`);
            err.res = response;
            throw err;
        }
    }
    )
    .then(res => res.json())
    .then(json => dispatch(addCars(json)))
    .catch(err => dispatch(carsFailed(err.message)));
} 
export const carsLoading = () => ({
    type: ActionTypes.CARS_LOADING
})

export const carsFailed = errMess =>({
    type: ActionTypes.CARS_FAILED,
    payload: errMess,
})

export const addCars = (cars) => ({
    type: ActionTypes.ADD_CARS,
    payload: cars
})
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