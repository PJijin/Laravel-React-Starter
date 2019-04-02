function example(state = [], action) {
    switch (action.type) {
        case "DEMO":
            return state; // modify the state and return
        default:
            return state;
    }
}

export default example;
