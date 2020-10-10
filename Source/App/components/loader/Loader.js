import React from "react";

export default function Loader({
  children
}) {
  return (
    <React.Suspense fallback="Loading...">
      {children}
    </React.Suspense>
  );
}
