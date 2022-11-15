import React from "react"
import loading from "./loading.gif"

function LoadComp(){
    return(
        <div className="flex justify-center m-6">
            <img src={loading} alt="loading" />
        </div>
    )
}

export default LoadComp