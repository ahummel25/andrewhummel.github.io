import React, { FC } from "react";
import About from "./About";

import { ProfileProps } from "../interfaces";

const Profile: FC<ProfileProps> = ({ refsToForward }): JSX.Element => (
  <>
    <About ref={refsToForward!.aboutRef} />
  </>
);

export default Profile;
