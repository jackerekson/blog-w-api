import jsonPlaceholder from "../apis/jsonPlaceholder"


export const fetchPost = () => async dispatch => {
    const res = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: res })
}

