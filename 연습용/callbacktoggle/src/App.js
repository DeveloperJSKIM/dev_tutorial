import './App.css';
import {useState} from "react";

function App() {
  const [inputs,setInputs]=useState([
    {name:"1",checked:false,parent: false,children:[
        {name:"2",checked:false,parent: "1",children:[
            {name:"3",checked:true,children:false,parent: "2"},
            {name:"4",checked:true,children:false,parent: "2"},
            {name:"5",checked:true,children:false,parent: "2"},
            {name:"6",checked:true,children:false,parent: "2"},
          ]},
        {name:"7",checked:false,children:false,parent: "1"},
        {name:"8",checked:false,children:false,parent: "1"},
      ]},
  ]);

  const 자식노드다트루인지확인하는함수 =(arr)=>{
      const isCheckAll =(value) => value.checked === true;
      return arr.every(isCheckAll)

  }
  const checkboxHandler=(e)=>{
    setInputs(inputs.map((item)=>e.target.name===item.name
        ?({...item,checked: e.currentTarget.checked})
        :({...item})
    ))
  }

  const checkboxHandler2=(e)=>{
      let selected = {};
      let i =0
      let j =0
      inputs.map((item,index)=>e.target.name===item.name
          ?(selected=item,i=index)
          :(item.children!==false
                  ?(item.children.map((item2,index)=>item2.name===e.target.name
                      ?(selected=item2,j=index)
                      :(console.log("no"))
                  ))
                  :(console.log("no"))
              )
      )
      console.log(selected)
      checkSelected(selected,e.target.checked,i,j)
  }
    const checkboxHandler3=(e)=>{
        let selected = {};
        let i =0;
        let j =0;
        let k =0;
        inputs.map((item,index)=>e.target.name===item.name
            ?(selected=item,i=index)
            :(item.children!==false
                    ?(item.children.map((item2,index)=>item2.name===e.target.name
                        ?(selected=item2,j=index,checkSelected(selected,e.target.checked,i,j))
                        :(item2.children!==false
                            ?((item.children.map((item3,index)=>item3.name===e.target.name
                                ?(selected=item3,k=index,checkSelected2(selected,e.target.checked,i,j,k))
                                :(console.log("no"))
                            )))
                            :(console.log("no")))
                    ))
                    :(console.log("no"))
            )
        )
        console.log(selected)

    }

  const checkSelected = (item,checked,i,j) =>{
      const newItem = {...item,checked:checked}
      const arr = inputs;
      arr[i].children[j]=newItem;
      if(자식노드다트루인지확인하는함수(arr[0].children)){
          arr[0].checked=true;
      }else{
          arr[0].checked=false;
      }
      setInputs([...arr]);
      console.log(item)
  }

    const checkSelected2 = (item,checked,i,j,k) =>{
        const newItem = {...item,checked:checked}
        const arr = inputs;
        arr[i].children[j].children[k]=newItem;
        if(자식노드다트루인지확인하는함수(arr[0].children[0].children)){
            arr[0].children[0].checked=true;
        }else{
            arr[0].children[0].checked=false;
        }
        setInputs([...arr]);
        console.log(item)
    }


  return (
    <div>
      <input type={"checkbox"} name={"1"} checked={inputs[0].checked} onChange={(e)=>{
          checkboxHandler(e)}
      }/>
      <input type={"checkbox"} name={"2"} checked={inputs[0].children[0].checked} onChange={(e)=>{
          checkboxHandler2(e)}
      }/>
      <input type={"checkbox"} name={"7"} checked={inputs[0].children[1].checked} onChange={(e)=>{
          checkboxHandler2(e)}
      }/>
      <input type={"checkbox"} name={"8"} checked={inputs[0].children[2].checked} onChange={(e)=>{
          checkboxHandler2(e)}
      }/>
        <input type={"checkbox"} name={"3"} checked={inputs[0].children[0].children[0].checked} onChange={(e)=>{
            checkboxHandler3(e)}
        }/>
        <input type={"checkbox"} name={"4"} checked={inputs[0].children[0].children[1].checked} onChange={(e)=>{
            checkboxHandler3(e)}
        }/>
        <input type={"checkbox"} name={"5"} checked={inputs[0].children[0].children[2].checked} onChange={(e)=>{
            checkboxHandler3(e)}
        }/>
        <input type={"checkbox"} name={"6"} checked={inputs[0].children[0].children[3].checked} onChange={(e)=>{
            checkboxHandler3(e)}
        }/>
    </div>
  );
}

export default App;
