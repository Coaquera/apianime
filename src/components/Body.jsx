import { Box } from "@mui/material"
import { Search } from "./Search"
import { Modelocard } from "./Modelocard"
import { useDispatch, useSelector } from "react-redux"
import { getanime } from "../store/body/thunks"
import { useEffect } from "react"

export const Body = () => {

  const dispatch = useDispatch();
  const {input} = useSelector(state => state.searched)
  const {listanime} =useSelector(state => state.body)

  useEffect(() => {
    dispatch(getanime(input))
    
  }, [input])
  

  return (
    <>
      <Search/>
      <Box 
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="center"
            >
                { 
                   
                    listanime.map((dat,index)=>(
                    <Modelocard 
                    key={index} {...dat}/>
                  ))
                  


                }
            </Box>
    </>
  )
}
