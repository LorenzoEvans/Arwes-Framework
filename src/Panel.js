import React from 'react';
import {Content, Header, Link, Project, Table, Words} from "arwes";

export const Panel = () => {
  return (
    <div style={{margin: 20}}>
      <Header animate>
      </Header>
      <Project animate header='T.A.O.' style={{display: "flex", flexDirection: "column"}}>
        <Words>
          What do you know about the universe you live in?
        </Words>
        <Link style={{margin: 20}} href={"/Ynxlxrvae"}>The Ynxlxrvae</Link>
        <Link style={{margin: 20}} href={"/Ancient_Ones"}>The Ancient Ones</Link>
        <Link  style={{margin: 20}}href={"/Hyvaeans"}>The Hyvaeans</Link>
        <Table
          animate
          headers={['Age', 'Home', 'K-Scale', 'Description']}
          dataset={[
            ['The Ancient Ones', 'Unknown', "N/A", 'Very little known.'],
            ['The Ynxlxrvae', 'Afirma', 'V-VII', 'Non-solid, pure consciousness'],
            ['The Hyvaeans', 'Unknown', 'I-III', 'Little known, dimensional travelers'],
          ]}
        />
      </Project>
    </div>
  );
};

