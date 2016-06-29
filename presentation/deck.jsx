import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text, S
} from "../src/spectacle";

import Interactive from "./interactive";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={800}>
        <Slide>
          <Heading caps fit lineHeight={1}>The Land of</Heading>
          <Heading caps fit lineHeight={1}><s>Isomorpfic</s></Heading>
          <Heading caps fit lineHeight={1}>Universal apps</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>wtf is a universal app?</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>why make it?</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>is fun, <S type='italic'>not really</S></Heading>
          <Heading caps fit lineHeight={1}>its faster, <S type='italic'>nah</S></Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>but your user will ❤️ you!</Heading>
          <Appear>
            <Heading caps fit lineHeight={1}>faster load</Heading>
            <Heading caps fit lineHeight={1}>Better SEO</Heading>
            <Heading caps fit lineHeight={1}>Screenreaders</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>so what does it take?</Heading>
        </Slide>
        <Slide>
          <Heading caps size={2}>node.js</Heading>
          <Heading caps size={2}>webpack</Heading>
          <Heading caps size={2}>react.js</Heading>
          <Heading caps size={2}>good planning</Heading>
          <Heading caps size={2}>straight face</Heading>
        </Slide>
        <Slide bgImage={'https://s-media-cache-ak0.pinimg.com/originals/60/3d/b0/603db088bfc439746087637584a11833.gif'}></Slide>
        <Slide bgImage={'http://i.imgur.com/czslEaq.png'}></Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>webpack</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>isn’t it that very complicated tool?</Heading>
          <Heading caps fit lineHeight={1}>loaders, huh?</Heading>
        </Slide>
        <Slide>
          <Heading caps lineHeight={1} size={2}>Introducing 🎉</Heading>
          <Heading caps fit lineHeight={1}>server-side-rendering-first</Heading>
          <Appear>
            <Heading size={1}>💩</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>web development has gone fully circle</Heading>
        </Slide>
        <Slide bgImage={'https://45.media.tumblr.com/tumblr_m1vqwmzVqR1rsaqlvo1_250.gif'}>
          <Heading caps fit lineHeight={1} textColor={'white'}>you never go</Heading>
          <Heading caps fit lineHeight={1} textColor={'white'}>full retard</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>css modules</Heading>
          <Heading caps fit lineHeight={1} textFont={'tertiary'}>import styles from ‘./styles.css'</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>why?</Heading>
        </Slide>
        <Slide bgImage={'https://aswedetalksmovies.files.wordpress.com/2011/11/bttf_fire_trails.jpg'} bgDarken={0.5}>
          <Heading caps fit lineHeight={1} textColor={'white'}>encapsulate components</Heading>
          <Heading caps fit lineHeight={1} textColor={'white'}>are the future</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>our node.js apps is not</Heading>
          <Heading caps fit lineHeight={1}>a node.js app anymore!!</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1} size={2}>we need to webpack</Heading>
          <Heading caps fit lineHeight={1}>our frontend</Heading>
          <Heading caps fit lineHeight={1} size={2}>we need to webpack</Heading>
          <Heading caps fit lineHeight={1}>our backend</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>backend needs</Heading>
          <Heading caps fit lineHeight={1}>sourcemaps also</Heading>
          <Heading>👻</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>HOW MUCH DEEPER?</Heading>
        </Slide>
        <Slide>
          <Heading caps fit>why not images?</Heading>
          <Heading>🤔</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1} textFont={'monospace'}>import Logo from "./logo.svg"</Heading>
        </Slide>
        <Slide>
        <Heading caps fit lineHeight={1}>automatic optimization</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>making the responsive web</Heading>
          <Heading caps fit lineHeight={1}>responsive again</Heading>
        </Slide>
        <Slide>
          <Heading caps fit textFont={'monospace'}>/public/images</Heading>
          <Heading caps fit lineHeight={1}>no dumpster anymore</Heading>
          <Heading caps fit lineHeight={1}>for images</Heading>
        </Slide>
        <Slide>
          <Heading caps fit>Instant rendering</Heading>
        </Slide>
        <Slide bgImage={'https://pmcvariety.files.wordpress.com/2014/07/youtube-logo-full_color.jpg?w=670&h=377&crop=1'} bgDarken={0.5}>
          <Heading caps fit lineHeight={1} textColor={'white'}>saw an increase</Heading>
        </Slide>
        <Slide>
          <Heading caps>if you wanted a fast website,</Heading>
          <Heading caps fit lineHeight={1} size={2}>why not just plain html?</Heading>
          <Heading caps fit lineHeight={1}><S type='italic'>this sounds complicated?!</S></Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>so lets get a little</Heading>
          <Heading caps fit lineHeight={1} size={2}>more in depth of what it takes</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>start simple</Heading>
          <Heading caps fit lineHeight={1}>it is always is easier to get started in small steps</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>don't boilerplate</Heading>
          <Heading caps size={2}>simply don't! 🤕🔫</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>you end with 💩</Heading>
          <Heading caps size={2}>lots of unnessary things</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>don't aim for perfect</Heading>
          <Heading caps size={2} fit lineHeight={1}>80 / 20</Heading>
          <Heading caps size={2} lineHeight={1}>🙌</Heading>
        </Slide>
        <Slide>
          <Heading caps fit lineHeight={1}>demo</Heading>
        </Slide>
      </Deck>
    );
  }
}
