export const initialState = {
    array: []
}

export const noteReducer = (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return {...state, array: [...state.array, {note: action.payload, noteToggle: false, id: Date.now()}]}
         case 'NOTE_TOGGLE':
                return {...state, array: state.array.map((notes) => {
                    if(notes.id === action.payload){
                        return {...notes, noteToggle: !notes.noteToggle}
                    } else {
                        return notes
                    }
                })
            }
        case 'DELETE_NOTE':
            return {...state, array: state.array.filter((item) => {
                console.log(item)
            })}
     default:
         console.log(`not working`)
        return ({...state})
    }
}