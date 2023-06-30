import { selected } from "./selectSlice"

export const startSelectedAnime = ({title,images,episodes}) => {

    return (dispatch,getState) => {
        dispatch(selected({title,images,episodes}))
    }


}
