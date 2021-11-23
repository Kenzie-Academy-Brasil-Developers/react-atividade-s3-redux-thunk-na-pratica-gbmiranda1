import { addComment } from "./actions";

export const addCommentThunk = (comment) => {
    
    return(dispatch, getState) => {
        const {user} = getState();
        console.log({...user})
        const updatedUser = {...user, comment: [...(user.comment), comment]};
        dispatch(addComment(updatedUser))
    }
}