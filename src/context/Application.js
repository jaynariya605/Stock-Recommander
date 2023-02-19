import { createContext } from "react";

const Application = createContext({
    state: null,
    dispatch: null
})

export default Application