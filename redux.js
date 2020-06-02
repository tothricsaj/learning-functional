let initialState = {counter: 0}
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

function createStore(reducer, preloadedState) {
    let currentReducer = reduce
    let currentState = preloadedState
    let currentListeners = []
    let nextListeners = currentListeners

    function getState() {
        return currentState
    }

    function dispatch(action) {
        currentState = currentReducer(currentState, action)

        const listeners = currentListeners = nextListeners

        for(let i=0; i<listeners.length; i++) {
            const listener = listener[i]
            listener()
        }

        return action
    }

    function subscribe(listener) {
        nextListeners.push(listener)
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

function render(state) {document.getElementById('counter').textContent = state.counter}

store.subscribe(function() {
    render(store.getState())
})

let store = createStore(reducer, initialState)

function loadRedux() {render(store.getState())}