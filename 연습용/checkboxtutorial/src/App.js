import React, {useEffect, useState} from "react";
import './App.css'
function App() {
    const [inputs, setInputs] = useState([
        {name:"one",level:1,checked:false},
        {name:"two",level:2,checked:false},
        {name:"three",level:2,checked:false},
        {name:"four",level:3,checked:false},
        {name:"five",level:3,checked:false},
        {name:"six",level:3,checked:false},
    ]);
    const [clicker,setClicker]=useState(0);
    useEffect(()=>{
        const A = inputs.filter((item)=>item.level>1).length;
        const B = inputs.filter((item)=>item.level>1 && item.checked===true).length
        if(A===B){
            setInputs(inputs.map((item)=>item.name==="one"
                ?({...item,checked: true})
                :({...item})
            ))
        }else{
            setInputs(inputs.map((item)=>item.name==="one"
                ?({...item,checked: false})
                :({...item})
            ))
        }
    },[clicker])
    const checkboxHandler= (e)=>{
        if(e.target.name!=="one"){
            setInputs(inputs.map(
                (item)=>item.name===e.target.name
                    ?({...item, checked: e.currentTarget.checked})
                    :({...item})
            ))
            setClicker(clicker+1)
        }else{
            setInputs(inputs.map(
                (item)=>({...item, checked: e.currentTarget.checked})
            ))
        }
    }

    // const checkboxHandler2= (e)=>{
    //     if(e.target.name!=="three"){
    //         setInputs(inputs.map(
    //             (item)=>item.name===e.target.name
    //                 ?({...item, checked: e.currentTarget.checked})
    //                 :({...item})
    //         ))
    //         setClicker(clicker+1)
    //     }else{
    //         setInputs(inputs.map(
    //             (item,i)=>i>=2
    //                 ?({...item, checked: e.currentTarget.checked})
    //                 :({...item})
    //         ))
    //         setClicker(clicker+1)
    //     }
    // }

    return(
        <div className={"container"}>
            <div className={"container-father"}>
                <input name="one" type={"checkbox"}
                       checked={inputs[0].checked} onChange={(e)=>{
                       checkboxHandler(e)}}/>
            </div>
            <div className={"container-mother"}>
                <input name="two" type={"checkbox"} onChange={(e)=>{
                    checkboxHandler(e);
                }} checked={inputs[1].checked}
                />
                <input name="three" type={"checkbox"} onChange={(e)=>{
                    checkboxHandler(e);
                }}
                       checked={inputs[2].checked}
                />
            </div>
            <div className={"container-brother"}>
                <input name="four" type={"checkbox"} onChange={(e)=>{
                    checkboxHandler(e);
                }}
                       checked={inputs[3].checked}
                />
                <input name="five" type={"checkbox"} onChange={(e)=>{
                    checkboxHandler(e);
                }}
                       checked={inputs[4].checked}
                />
                <input name="six" type={"checkbox"} onChange={(e)=>{
                    checkboxHandler(e);
                }}
                       checked={inputs[5].checked}
                />
            </div>

        </div>
    )
}

export default App;
