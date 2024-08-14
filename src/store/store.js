import { createStore } from "redux"
import { rootReducer } from "../reducer/rootReducer"


export const configureStorage = initState => {
    return createStore(rootReducer, initState, undefined)
}