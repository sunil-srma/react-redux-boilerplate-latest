import Action from "../actions/index.js";

const initialState = {
    user: [
        {
            name: 'ram'
        },
        {
            name: 'shyam'
        },
        {
            name: 'radha'
        }
    ]
};

export default function(state = initialState, action) {
    switch(action.type){
        case Action.TEST_ACTION :
            return Object.assign(
                {},
                state,
                {
                    ...action.payload
                }
            );
        default :
            return state;
    }
}