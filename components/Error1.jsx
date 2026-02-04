import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error1() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      Something went wrong <b>{error.status}</b>
    </div>
  );
}
