import logo from './logo.svg';
import './App.css';

function App() {
 return (
   <BrowserRouter>
     <div className="container">
       <Routes>
            <Route path={"/"} exact={true} element={<HelloWorld/>}/>
            <Route path={"/hello"} exact={true} element={<HelloWorld/>}/>
            <Route path={"/labs"} exact={true} element={<Labs/>}/>
            <Route path={"/tuiter"} element={<Tuiter/>}>
              <Route path="explore" element={<ExploreScreen/>}/>
              <Route index element={<HomeScreen/>}/>
            </Route>
       </Routes>
     </div>
   </BrowserRouter>
 );
}

export default App;
