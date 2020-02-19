export const initialState = []

export const noteReducer = (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, {note: action.payload, noteToggle: false, id: Date.now()}]
            case 'NOTE_TOGGLE':
                return console.log(`return note toggle`)
        case 'DELETE_NOTE':
            return console.log(`trying to delete note!!!`)
     default:
         console.log(`not working`)
        return ({...state})
    }
}