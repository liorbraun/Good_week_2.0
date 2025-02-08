import { createContext, useEffect, useState } from 'react';
import Papa from "papaparse";

export const DBContext = createContext();

export const DBContextProvider = ({ children }) => {

    const [bless, setBless] = useState();
    const [about, setAbout] = useState();
    const [homoscope, setHomoscope] = useState();
    const [singNShit, setSingNShit] = useState();
    const [gossip, setGossip] = useState();
    
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQdT39Jdb-AiSPDso_cQcpmy3wbfSqz1xfFAIRETMgc_uJvR4MejOYSZ9ZQoBe4_Ts1FOowzmYzUGOJ/pub?gid=0&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setBless(results.data);
            }
        })
        
    },[])
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQdT39Jdb-AiSPDso_cQcpmy3wbfSqz1xfFAIRETMgc_uJvR4MejOYSZ9ZQoBe4_Ts1FOowzmYzUGOJ/pub?gid=899208986&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setAbout(results.data);
            }
        })
        
    },[])
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQdT39Jdb-AiSPDso_cQcpmy3wbfSqz1xfFAIRETMgc_uJvR4MejOYSZ9ZQoBe4_Ts1FOowzmYzUGOJ/pub?gid=1485681861&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setHomoscope(results.data);
            }
        })
        
    },[])
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQdT39Jdb-AiSPDso_cQcpmy3wbfSqz1xfFAIRETMgc_uJvR4MejOYSZ9ZQoBe4_Ts1FOowzmYzUGOJ/pub?gid=2112644146&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setSingNShit(results.data);
            }
        })
        
    },[])
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQdT39Jdb-AiSPDso_cQcpmy3wbfSqz1xfFAIRETMgc_uJvR4MejOYSZ9ZQoBe4_Ts1FOowzmYzUGOJ/pub?gid=1011802712&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setGossip(results.data);
            }
        })
        
    },[])

    return (
        <DBContext.Provider value={{
            bless, about, homoscope, singNShit, gossip
        }}>{ children }
        </DBContext.Provider>
    )
}