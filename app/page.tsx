"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import React from "react";
import withAuth from "@/lib/withAuth";

function Home() {
  const { user, logout } = useAuth();

  return (
    <>
      <div>{JSON.stringify(user)}</div>
      <Button onClick={() => logout()}>Click me</Button>
    </>
  );
}

export default withAuth(Home);
