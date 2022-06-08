import React, {useEffect, useState} from "react";
import '../CSS/admin.css'

const Admin =()=>{
    const [data,setData]=useState('1');
    const [title,setTitle]=useState('');
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const [instance,setInstance]=useState(0);
    const [viewItem,setViewItem]=useState([]);
    const [inputBox,setInputBox]=useState(0);
    useEffect(()=>{
        document.getElementById('drag1').ondrag = function(e) {
            setData("Paragraph")
        };
        document.getElementById('drag2').ondrag = function(e) {
            setData("Button")
        };
        document.getElementById('drop').ondragover = function(e) {
            e.preventDefault(); // 필수 이 부분이 없으면 ondrop 이벤트가 발생하지 않습니다.
            console.log('드롭가능')
        };
        document.getElementById('drop').ondrop = function(e) {
            setTitle(data)
            AddItem(data)
        };
        document.getElementById('drop').onmousemove = function (e){
            setX(e.clientX);
            setY(e.clientY);
        }
    },[data,instance,viewItem])

    const AddItem = (item)=>{
        console.log(item)
        setInstance(instance+1)
        setViewItem([...viewItem,{
            id:instance,
            type: item,
            title:item,
            message: item,
        }])
        console.log(viewItem)
    }
    const [nowPost,setNowPost]=useState((0))
    const PostMessage = (text)=>{
        if(text){
            setViewItem(viewItem.map((item)=>item.id===nowPost?{...item,message:text}:{...item}))
        }else{
            setViewItem(viewItem.map((item)=>item.id===nowPost?{...item,message:'Title'}:{...item}))
        }

    }
    const PostTitle = (text)=>{
        if(text){
            setViewItem(viewItem.map((item)=>item.id===nowPost?{...item,title:text}:{...item}))
        }else{
            setViewItem(viewItem.map((item)=>item.id===nowPost?{...item,title:'Button'}:{...item}))
        }

    }


    return(
        <>
            <div className={'container'}>
                <div className={'border-box'}>
                    메뉴
                </div>
                <div className={'row-box'}>
                    <div className={'colum-box border-box left-box'}>
                        <p id="drag1" draggable="true">Paragraph</p>
                        <p id="drag2" draggable="true">Button</p>
                    </div>
                    <div className={'colum-box border-box right-box'}>
                        <div className={'border-box right-box-inner-top'}>
                            <div id={"drop"} className={'inner-box'}>
                                <p>Dragging:{title}</p>
                                <p>Mouse:({x},{y})</p>
                                <p>Instance:{instance}</p>
                                <p>Config:{}</p>
                            </div>
                            <div className={'inner-box colum-box'}>
                                {viewItem&&
                                    viewItem.map(item=>item.type==="Button"?(
                                        <button key={item.id} className={'button-type'} onClick={()=>{
                                            setInputBox(2)
                                            setNowPost(item.id)
                                        }}>{item.title}</button>
                                    ):(
                                        <p key={item.id} onClick={()=>{
                                            setInputBox(1)
                                            setNowPost(item.id)
                                        }}>{item.message}</p>
                                    ))

                                }
                            </div>


                        </div>
                        <div className={'border-box right-box-inner-bottom'}>
                            {
                                inputBox===1&&
                                <>
                                    <input type={'text'} placeholder={'Paragraph-text'} onChange={e=>{PostMessage(e.target.value)}}/>
                                </>
                            }
                            {
                                inputBox===2&&
                                <>
                                    <input type={'text'} placeholder={'Button-Title'} onChange={e=>{PostTitle(e.target.value)}}/>
                                    <input type={'text'} placeholder={'Alert-Text'} onChange={e=>{PostMessage(e.target.value)}}/>
                                </>
                            }
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Admin
