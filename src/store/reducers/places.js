import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

const initialState = {
    places: [],
    selectedPlace: null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: prevState.places.concat({
                    key: Math.random(), 
                    name: action.placeName,
                    image2: {
                      uri: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/19/1494327191-better-call-saul-season-3.jpg?crop=0.637xw:0.956xh;0.190xw,0&resize=480:*'
                    }
                  })
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: prevState.places.filter(place  => {
                    return place.key !== prevState.selectedPlace.key;
                  }),
                  selectedPlace: null
            }
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: prevState.places.find(place => {
                    return place.key === action.placeKey;
                  })
            }
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            }
        default:
            return state;
    }
}

export default reducer