import React from "react";
import SortPanel from "../components/SortPanel.js";
import UserList from "../components/UserList/UserList.js";

export default function HomePage() {
  return (
    <React.Fragment>
      <SortPanel/>
      <UserList/>
    </React.Fragment>
  );
}
