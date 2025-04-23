// import "./App.css";
// import FetchGetRequest from "./components/FetchGetRequest";
// import OnHover from "./components/OnHover";
// import WarningHover from "./components/WarningHover";
// import ProductInfo from "./components/ProductInfo";
// import ProductList from "./components/ProductList";
// import UserList from "./components/UserList";
// import Person from "./components/Person";
// import Product from "./components/Product";
// import Greeting from "./components/Greeting";
// import UserStatus from "./components/UserStatus";
// import Weather from "./components/Weather";
// import StyledCard from "./components/StyledCard";
// import ProfileCard from "./components/ProfileCard";
// import IconComponent from "./components/IconComponent";
// import Counter from "./components/Counter";
// import ProfileState from "./components/ProfileState";
// import ShoppingList from "./components/ShoppingList";
// import TodoList from "./components/TodoList";
// import FetchDataEffect from "./components/useEffect/FetchDataEffect";
// import BasicEffect from "./components/useEffect/BasicEffect";
// import CounterEffect from "./components/useEffect/CounterEffect";

// import UpdateUser from "./components/useContext/UpdateUser";
import UserContext from "./components/useContext/UserContext";
import { createContext } from "react";
// import UserProfile from "./components/useContext/UserProfile";

export const UserData = createContext();

const App = () => {
  const name = "User 1";

  return (
    <div>
      {
        // React Router
        /* <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile page</Link>
            </li>
          </ul>
        </nav> */
      }
      {/* <FetchGetRequest /> */}
      {/* <OnHover /> */}
      {/* <WarningHover /> */}
      {/* <ProductInfo /> */}
      {/* <UserList /> */}
      {/* <ProductList /> */}
      {/* <Person name={"Jane Doe"} age={20} /> */}
      {/* <Product name={"Laptop"} price={"$299"} /> */}
      {/* <Weather temperature={10} /> */}
      {/* <UserStatus loggedIn={true} isAdmin={false} /> */}
      {/* <Greeting timeOfDay={"afternoon"} /> */}
      {/* <StyledCard /> */}
      {/* <ProfileCard /> */}
      {/* <IconComponent /> */}
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <ProfileState /> */}
      {/* <ShoppingList /> */}
      {/* <BasicEffect /> */}
      {/* <CounterEffect /> */}
      {/* <FetchDataEffect /> */}

      <UserData.Provider value={name}>
        <UserContext />
      </UserData.Provider>

      {/* <UserProfile /> */}
      {/* <UpdateUser /> */}
    </div>
  );
};

export default App;
