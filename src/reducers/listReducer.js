
export default function (estado = [], action) {

    switch (action.type) {
        case "ADD_ITEM":
            return [...estado, action.payload]
        case "DELETE_ITEM":
            return estado.filter(item => item.id != action.payload)
        case "CHANGE_DONE":
            return estado.map(item => {
                if (item.id == action.payload) {
                    item.done = !item.done
                }
                return item
            })
        default:
            return estado
    }

}