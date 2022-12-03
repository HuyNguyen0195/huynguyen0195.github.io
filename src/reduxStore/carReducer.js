import * as actionTypes from './actionType'
 
export const carReducer = (state = {
    isLoading: true,
    errMess: null,
    cars: [],
    }, action) => {
    switch (action.type){
        case actionTypes.CARS_LOADING:{
            return {...state,isLoading:true,errMess:null}
        }
        case actionTypes.CARS_FAILED:{
            return {...state, isLoading:false, errMess:action.payload}
        }
        case actionTypes.ADD_CARS:{
            return {...state,isLoading:false, errMess:null, cars:action.payload};
        }
        case actionTypes.ADD_CAR:
            return [...state, action.payload];
        case actionTypes.DELETE_CAR:{
            const deleteState = [...state];  
            deleteState.splice(action.payload.id,1);
            return deleteState;
        }
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

