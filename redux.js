let initialStat = {counter: 0}
function reducer(state, action) {
    if(action.type = 'INCREMENT') state = Object.assign({}, state, {counter: state.counter + 1})
    return state
}

document.getElementById('button').addEventListener('click', () => incrementCounter())

function incrementCounter() {
    store.dispatch({
        type: 'INCREMENT'
    })
}