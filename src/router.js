import { 
    createBrowserRouter, //allows us to define paths in react router (the url, our loaders, our actions)
    createRoutesFromElements, //is a helper function that allows paths to be created using Elements for example, we will be using <Route></Route>
    Route //will be put into the helper 
 } from "react-router-dom";
 import App from './App';
 import Landing from './pages/Index';
 import Show from './pages/Show'
 import { peopleLoader, personLoader } from "./loaders";

 const router = createBrowserRouter(
     createRoutesFromElements(
        <Route path='/' element={<App /> }>
            <Route path='' element={<Landing/>} loader={peopleLoader}/>
            <Route path=':id' element={<Show/>} loader={personLoader}/>
            <Route path='create'/> {/*this is an action and doesnt render an element*/}
            <Route path='update/:id'/> {/*this is an action and doesnt render an element*/}
            <Route path='delete/:id'/> {/*this is an action and doesnt render an element*/}
    </Route>
     )
 )

export default router