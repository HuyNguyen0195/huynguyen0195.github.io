import * as actionTypes from './actionType'
 
export const carReducer = (state = [
    { make: 'toyota',   model: 'sienna',},
    { make: 'honda',   model: 'accord',},
    { make: 'lexus',   model: 'rx350',},
    { make: 'nissan',   model: 'altima',},
    { make: 'mazda',   model: 'm-x5',},
    ], action) => {
    switch (action.type){
        case actionTypes.ADD_CAR:
            return [...state, action.payload];
        case actionTypes.DELETE_CAR:{
            const deleteState = [...state];  
            deleteState.splice(action.payload.id,1);
            return deleteState;
        };
        case actionTypes.UPDATE_CAR:{
            const updateCar = [...state];
            updateCar.forEach((car,index) => {
                if(index === action.payload.id){
                    car.make = action.payload.make;
                    car.model = action.payload.model;
                }
            });
            return updateCar;
        }
        default: return state
    }
}

