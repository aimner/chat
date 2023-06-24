import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Chat } from "../chat";
import { Profile } from "../profile";
import { Users } from "../users";
import { Wrapper } from "../wrapper";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="chat" element={<Chat />} />
        <Route path="profile" element={<Profile />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
};
