import { startLoadingData,insertList } from "./bodySlice";

export const getanime = (input) => {
    return async(dispatch,getState) => {
        //console.log(input)
        dispatch(startLoadingData());

        const res = await fetch(` https://api.jikan.moe/v4/anime?q=${input}&limit=25`)
        const resData = await res.json();

        const shortlist = resData.data.map((dat) => {
            
            const {title,images,episodes} = dat

            return {title,images,episodes}
        }) 
        //console.log(shortlist);

        dispatch(insertList(shortlist))
    }

}