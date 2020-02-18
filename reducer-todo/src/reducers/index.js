export const initialState = [{
    note: '',
    noteToggle: false,
    id: ''
}]

export const noteReducer = (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            console.log(`working`)
            return [...state, {note: action.payload, id: Date.now()}]
     default:
         console.log(`not working`)
        return ({...state})
    }
}