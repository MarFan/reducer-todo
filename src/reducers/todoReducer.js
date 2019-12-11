export const initialState = []

export const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TASK":
            return [
                ...state, 
                {
                    item: action.payload.taskText, 
                    completed: false, 
                    id: Date.now(),
                    tags: action.payload.taskTags,
                    completeBy: action.payload.taskDate,
                    completedDate: ''
                }
            ]
        case "COMPLETE_TASK":
            return state.map(task => {
                    if (task.id === action.payload) {
                      return {
                        ...task,
                        completed: !task.completed,
                        completedDate: new Date()
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