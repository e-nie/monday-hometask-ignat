const initState:InitialStateType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionsType): InitialStateType => { // fix any
    debugger
    switch (action.type) {

        case "CHANGE_LOADING":
            debugger
            return {
                ...state, isLoading: action.isLoading
            }

        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
} )

//types
type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

type InitialStateType = {
    isLoading: boolean
}
type ActionsType = LoadingActionType


