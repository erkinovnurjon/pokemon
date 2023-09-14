/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Card from "./Card";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import RightContent from "./RightContent";

const Header =()=>{
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }
    useEffect(()=>{
        pokeFun();
        
    },[url])

   
    return(
        <div className=" w-full">
            <div className="container mx-auto px-8 p-4">
              <div className="flex   gap-10 justify-between ">
                <div className="left-content  ">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                </div>
                  <div  className=" mt-28  my-5 h-12 text-white flex justify-start gap-5">
                        {  prevUrl && <button 
                         className="bg-slate-600 py-2 px-4 rounded-md hover:bg-slate-700 active:bg-slate-500 cursor-pointer"
                        onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</button>}

                        
                        { nextUrl && <button
                        className="bg-slate-600 py-2 px-4 rounded-md hover:bg-slate-700 active:bg-slate-500 cursor-pointer"
                         onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
              

               
                 <div className=" flex justify-center ">
                  <div className="">
                        <RightContent  data={pokeDex}/>
                  </div>
                  
                </div>
                
              </div>
                       <div className=" flex justify-center items-center">
                               <div className=" mt-4 flex gap-2 h-12 pagination ">
                                        <div  className="  h-12 text-black flex justify-start gap-5">
                        {  prevUrl && <button 
                         className="bg-slate-200 py-2 px-4 rounded-md hover:bg-slate-300 active:bg-slate-500 cursor-pointer"
                        onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>&lt;</button>}
                        </div>
                                <div className="flex gap-2">
                                    {[...Array(5)].map((_, index) => {
                                 const page = index + 1;
                                   return (
                                  <button
                                  key={page}
                                      className={`bg-slate-200 py-2 px-4 rounded-md hover:bg-slate-300 active:bg-slate-500 cursor-pointer ${
                                      url === `https://pokeapi.co/api/v2/pokemon/?offset=${index * 20}&limit=20` ? 'bg-slate-500'  : 'text-black'
                                  }`}
                                   onClick={() => {
                                setPokeData([]);
                               setUrl(`https://pokeapi.co/api/v2/pokemon/?offset=${index * 20}&limit=20`);
                                   }}
                                  >
                                {page}
                                   </button>
                                );
                               })}
                                </div>
                                <div  className="  h-12 text-black flex justify-start gap-5">
                                    { nextUrl && <button
                        className="bg-slate-200 py-2 px-4 rounded-md hover:bg-slate-300 active:bg-slate-500 cursor-pointer"
                         onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}> &gt;
                            </button>}

                                </div>
                           </div>
                       </div>

              <div>
              </div>
            </div>
        </div>
    )
}
export default Header ;