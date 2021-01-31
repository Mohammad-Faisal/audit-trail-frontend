export const selectRequesting = (state , actionTypes) => {
    return state.requesting[`${actionTypes}`]
}