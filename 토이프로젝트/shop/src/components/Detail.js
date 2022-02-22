import React,{useEffect,useState} from "react";
import {useHistory} from "react-router-dom";
import '../App.css';
import {Nav} from "react-bootstrap";
import {CSSTransition} from "react-transition-group";
import {connect, useSelector} from "react-redux";


const Detail=(props)=>{
    let [swich,setSwich] = useState(false);
    let [tab,setTab] = useState(0);
    let [alert,setAlert] = useState(true);
    let history = useHistory();
    let selected = useSelector(state=>state.reducer3);
    useEffect(()=>{
        let timer=setTimeout( ()=>{setAlert(false)},2000);
        return ()=>{clearTimeout(timer)}
    },[])

    return(
        <div className="container">

            <div className="row">
                <div className="col-md-6">
                    <img src={props.data[selected].src} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.data[selected].title}</h4>
                    <p>상품설명</p>
                    <p>{props.data[selected].price}</p>
                    <Info oninfo={props.oninfo[0]}/>
                    <button className="btn btn-danger" onClick={()=>{
                        let copy=[...props.oninfo];
                        copy[0]-=1;
                        props.setInfo(copy);
                        props.dispatch({type: '장바구니추가',payload:{id:selected, name:props.data[selected].title,quan:1}});
                        history.push('/cart');
                    }}>주문하기</button>
                    <button className="btn btn-danger" onClick={()=>{history.push('/')}}>뒤로가기</button>
                    {
                        alert?(<div className="my-alert">
                            <p>재고가 얼마 남지 않았습니다</p>
                        </div>):null
                    }

                </div>
            </div>

            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{setTab(0); setSwich(false)}}>1번선택</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{setTab(1); setSwich(false)}}>2번선택</Nav.Link>
                </Nav.Item>
            </Nav>

            <CSSTransition in={swich} classNames={"wow"} timeout={500}>
                <TabContent num={tab} setSwich={setSwich}/>
            </CSSTransition>

        </div>
    );
}

const Info = ({oninfo})=>{
    return(
        <p>재고 : {oninfo}</p>
    );
}

const TabContent=({num,setSwich})=>{
    useEffect(()=>{
        setSwich(true);
    });
    if (num===0) {
        return(
            <div>1번 선택</div>
        )
    }else if(num===1){
        return (
            <div>2번 선택</div>
        )
    }
}
const stateData = (state)=>{
    return {
        state: state.reducer
    };
}
export default connect(stateData)(Detail)
