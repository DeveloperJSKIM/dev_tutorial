import React from "react";
import {Table} from "react-bootstrap";
import {connect, useDispatch, useSelector} from "react-redux";

const Cart = (props) =>{
    let state =useSelector((state)=>state.reducer);
    let onAlert =useSelector((state)=>state.reducer2);
    let dispatch = useDispatch();
    return(
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>번호</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                    {state.map((item,i)=>(
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quan}</td>
                            <td>
                                <button onClick={()=>{dispatch({type:'수량증가',payload:item.id})}}>+</button>
                                <button onClick={()=>{dispatch({type:'수량감소',payload:item.id})}}>-</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {
                onAlert?(
                    <div className={'my-alert'}>
                        <p>지금구매하시면 신규 할인 100%</p>
                        <button onClick={()=>{dispatch({type:'닫기'})}}>닫기</button>
                    </div>
                ):null
            }

        </div>
    );
}

// const cartData=(state)=>{
//     return{
//         state: state.reducer,
//         alertOpen: state.reducer2
//     }
// }

export default Cart
// export default connect(cartData)(Cart)
