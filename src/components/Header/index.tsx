import React from "react";
import { Header } from "./Header";
import { headerProps } from "../Component.config";

const HeaderWithProps = () => <Header {...headerProps} />;

export default HeaderWithProps;
