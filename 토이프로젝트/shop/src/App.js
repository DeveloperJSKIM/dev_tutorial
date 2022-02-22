import React,{useState,useContext,createContext} from "react";
import './App.css';
import data from "./data";
import Item from "./components/Item";
import Detail from "./components/Detail";
import {Link,Route,Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown,Container} from "react-bootstrap";
import axios from 'axios';
import Cart from "./components/Cart";
export let 재고context = createContext();


function App() {
    let [shoes,setShoes] = useState(data);
    let [info,setInfo] = useState([10,2,3]);
    let [신발선택,set신발선택]=useState(0);
  return (
    <div className={'App'}>

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/detail"}>Detail</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/cart"}>장바구니</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        <Route exact path={'/'}>
        <div className="background">
            <h1 style={{paddingTop:30}}>20% season Off</h1>
            <p> </p>
            <p>부트스트랩은 디자인 개뿔 모르는 나같은 사람도 적당한 홈페이지를 만들 수 있게 해준다</p>
            <p>부트스트랩 개꿀 모두 부트스트랩 씁시다</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button" style={{marginBottom:50}}>Learn more</a></p>
        </div>

        <재고context.Provider value={info}>
        <div className={'container'}>
            <div className={'row'}>
                {shoes.map(data=>(<Item
                    key={data.id}
                    src={data.src}
                    title={data.title}
                    content={data.content}
                    price={data.price}
                    id={data.id}
                />))}
            </div>
        </div>
        </재고context.Provider>

            <button className="btn btn-primary"
                    onClick={()=>axios.get('http://172.18.202.51:8080/api/file/sendJsonTest')
                        .then((item)=>{setShoes([...shoes,...item.data])})
                        .catch(()=>{
                            console.log('실패했어요')
                        })}>더보기</button>
        </Route>

        <Route exact path={'/detail'}>
            <Detail oninfo={info} setInfo={setInfo} data={shoes}/>
        </Route>


        <Route exact path={'/cart'}>
            <Cart/>
        </Route>


    </div>
  );
}

export default App;
