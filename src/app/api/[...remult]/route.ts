// src/pages/api/[...remult].ts
import { remultNextApp } from "remult/remult-next";
import { User } from "../../../models/user";
import { UserSettings } from "../../../models/user-settings";

export const api = remultNextApp({
  entities: [
    User,UserSettings
  ],
});

export const { GET, POST, PUT, DELETE } = api;
