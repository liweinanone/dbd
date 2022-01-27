function createStore(reducer, initState) {
    let currentState = initState
    const listens = []

    function dispatch(action) {
        // TODO if action is a function

        currentState = reducer(action, currentState)

        listens.forEach((listen) => {
            listen()
        })

        return action
    }

    function subscribe(callbackFn) {
        const cancelIndex = listens.push(callbackFn) - 1

        return function () {
            if (listens[cancelIndex] !== callbackFn || listens.length === 0) {
                return
            }
            listens.splice(cancelIndex, 1)
        }
    }

    function getState() {
        return currentState
    }

    store = {
        dispatch,
        getState,
        subscribe,
    }

    return store
}

let userID = 1

// {name: id}
function reducer(action, state) {
    switch (action.type) {
        case 'add': {
            return {
                ...state,
                [action.payload]: userID++,
            }
        }
        case 'delete': {
            return Object.keys(state).reduce((acc, key) => {
                if (key === action.payload) {
                    return acc
                }
                acc[key] = state[key]

                return acc
            }, {})
        }
    }
}

const user = createStore(reducer, {})
const unsubscribe = user.subscribe(() => {
    console.log(user.getState())
})
user.subscribe(() => {
    console.log('Second listen function')
})
user.dispatch({ type: 'add', payload: 'a' })
user.dispatch({ type: 'add', payload: 'b' })
user.dispatch({ type: 'add', payload: 'c' })
user.dispatch({ type: 'delete', payload: 'a' })
user.dispatch({ type: 'add', payload: 'd' })
unsubscribe()
unsubscribe()
user.dispatch({ type: 'add', payload: 'f' })
user.dispatch({ type: 'add', payload: 'e' })
