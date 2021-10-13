import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";

export default function HeaderWrapper() {
    const currentUser = useSelector((state) => state.user.currentUser);
    return <Header currentUser={currentUser} />;
}
