export const initialState = []

export const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TASK":
            return [
                ...state, 
                {
                    item: action.payload, 
                    completed: false, 
                    id: Date.now()
                }
            ]
        case "COMPLETE_TASK":
            return state.map(task => {
                    if (task.id === action.payload) {
                      return {
                        ...task,
                        completed: !task.completed
                      }
                    } else {
                      return task;
                    }
                  })
        case "CLEAN_UP":
            return state.filter(task => !task.completed)
        default: return state;
    }    
}