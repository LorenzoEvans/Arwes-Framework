import React from 'react';
import {Words, Links, Grid, Frame, Header, Content, Arwes, Project, Link} from 'arwes'
const TAO = () => {
  return (
    <div>
      <Arwes>
        <Project animate header='T.A.O.' style={{display: "flex", flexDirection: "column"}}>
          <Words>
            The Ancient Ones say they are to be respected, not feared.

            Fear them nonetheless...
          </Words>
        </Project>
      <Content style={{margin: 20}}>
      <h2>
      The Ancient Ones
      </h2>
      </Content>
      </Arwes>
    </div>
  );
};

export default TAO;
