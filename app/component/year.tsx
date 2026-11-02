"use client";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function Year() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(), 
    () => null,
  );
  return <span>{year}</span>;
}
