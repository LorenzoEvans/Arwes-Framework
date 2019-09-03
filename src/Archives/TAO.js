import React from 'react';
import {Words, Blockquote, Heading, Content, Arwes, Project, Link} from 'arwes'
const TAO = () => {
  return (
    <div style={{margin: 20}}>
      <Arwes>
        <Project animate header='T.A.O.' style={{display: "flex", flexDirection: "column"}}>
          <Words>
            The Ancient Ones say they are to be respected, not feared.

            Fear them nonetheless...
          </Words>
        </Project>
      <Content style={{margin: 20}}>
      <Heading>
      The Ancient Ones
      </Heading>
        <Words>
          The ancient ones do not announce their arrival. Their arrival announces itself.
          There is very little information on them, because of what they do.
          They come from a dying universe, kept on life support, by their technology.
          They keep their universe alive, by siphoning the energy of other universes, to feed their technology, and universe.
          It is said by my people that no one lives long enough to say how long they've been alive.

        </Words>
      <Blockquote>
        It is said that the universe shakes when they arrive.

      </Blockquote>

      </Content>
      </Arwes>
    </div>
  );
};

export default TAO;
