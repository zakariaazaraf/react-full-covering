export const reducer = (state, action)=>{
        // You always need to return a state
        if(action.type === 'ADD_PERSON'){
            
            return {
                // you always want to keep the last state properties that doesn't changed
                ...state,
                // people: [...state.people, {id: new Date().getTime().toString(), name}],
                people: [...state.people, action.payload],
                isModleOpen: true,
                modleContent: 'Person added'
            }
        }
        
        if(action.type === 'NO_VALUE'){
            return { ...state, isModleOpen: true, modleContent: 'No persom added !' }
        }

        if(action.type === 'REMOVE_ITEM'){
            return { 
                // ...state, 
                people: state.people.filter(person => person.id !== action.payload),
                isModleOpen: true,
                modleContent: 'Item removed !' 
            }
        }

        if(action.type === 'CLOSE_MODLE'){
            return { ...state, isModleOpen: false }
        }

        return state
    }
