import React from "react";
import AddUser from "./Component/AddUser";
import UserList from "./Component/UserList";
import { AppProvider } from "./Store/context";
export default function App() {

  return (
    <div>
      <AppProvider>
        <AddUser />
        <UserList />
      </AppProvider>

    </div>
  )

}


