import React from 'react';
import {Header, Link, Project, Words} from "arwes";

const Panel = () => {
  return (
    <div>
      <Header animate>
      </Header>
      <Project animate header='T.A.O.'>
        <Words>
          What do you know about the universe you live in?
        </Words>
        <Link href={"/Ynxlxrvae"}>The Ynxlxrvae</Link>
        <Link href={"/Ancient_Ones"}>The Ancient Ones</Link>
        <Link href={"/Hyvaeans"}>The Hyvaeans</Link>
      </Project>
    </div>
  );
};

export default Panel;
