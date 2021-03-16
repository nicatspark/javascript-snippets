

#### Micro frontends
*2019-06-18 01:363* [https://martinfowler.com/articles/micro-frontends.html](https://martinfowler.com/articles/micro-frontends.html) TL;DR In short, micro frontends are all about slicing up big and scary things into smaller, more manageable pieces.

*2019-07-11 07:56* It is not an ideal state to have many front-end frameworks within the company but it is a way to transition to a more homogenic front-end situation. https://link.medium.com/qF4AICBdeY

*2019-11-30 15:37* THIS is a very interesting way of including different frameworks into each other. At 13:50 https://youtu.be/o1Sr39DVdOQ extra interesting in conjunction with the open-wc project.
*2019-12-05 16:59* Embedding a react SPA in a Web Component <https://medium.com/@gilfink/wrapping-react-components-inside-custom-elements-97431d1155bd> to be used in another framework.

In depth about micro frontends architechture <https://lucamezzalira.com/>

*2020-05-23 09:41* Whenever we need to take our micro frontend situation to the next level. <https://link.medium.com/4JOfwA7tI6>

*2020-07-01 22:50* Micro frontends in retrospect https://link.medium.com/tUh7ieT7L7

#### Redux
*2019-06-20 11:33* As mentioned in a private conversation, a new way of connecting react components to redux that is less verbose. Right now in react-redux release candidate. [https://youtu.be/3zoIigieur0](https://youtu.be/3zoIigieur0) This looks promising.

*2019-07-10 01:41* And BOOM! Version 7.1 of React-Redux is officially released. (7.1 uses React hooks to connect to Redux store that I in previous examples got from a alpha release candidate.) More info and a timeline travel through some previous versions here <https://youtu.be/zNs-phgKx3Q> by a Redux dev person.

*2019-08-29 23:14* Removing boilerplate code around Redux can’t be bad. <https://link.medium.com/JQIZvN6ByZ>

*2019-08-30 09:30* Getting started with Redux-Saga https://medium.com/@lavitr01051977/make-your-first-call-to-api-using-redux-saga-15aa995df5b6

*2019-08-30 09:31* React Router with Redux https://medium.com/@lavitr01051977/react-router-redux-app-with-call-to-api-70a324c34ecb
*2019-10-31 08:52* Above is yesterdays news. Today this is how to do it. <https://www.youtube.com/watch?v=CZeulkp1ClA> with React Router v5.

*2019-11-03 22:09* This is a comendable project <https://redux-starter-kit.js.org/> that I wont use for two reasons. 1 - IMO it does create a lot of stuff for you that you will not understand unless you go through the pain of both discover the need for or get to know because you've done all the wiring by yourself. 2 - It is opinionated and not necessarily the way I prefer to set it up. However I will look into it some more because it also has some off the shelf utility functions I have not seen before.

*2019-11-03 22:18* This "getting started with Redux" has one of the best instructions I think on how to wire up Redux Saga and get started. Unfortunately the rest is class based React and thus a bit out of fashion but if one only focus on the non-react parts it has some golden nuggets apart from Sagas aswell. <https://www.valentinog.com/blog/redux/>
_Note to self: The way action creators/action types are set up is the same as in SCadmin and this will come in handy in the upcomming React project._

*2019-11-27 11:03* [Mixing redux with typescript] A bit outdated (from january 2019) but does have the redux part nicely layed out with typescript. <https://medium.com/@ksholla20/react-redux-with-typescript-ad7266896a9b>

*2019-11-28 09:24* Usefull Redux Thunks tips and tricks. <https://youtu.be/xihoZZU0gao>

*2020-07-13 09:33* Is Recoil the new shiny thing that replaces Redux? https://link.medium.com/ywMsgHQ747

#### Configurator
*2019-07-09 15:40* Article about building a configurator. <https://link.medium.com/SdBxX0zrbY>

#### Styled Components
*2019-08-22 15:24* If Styled Components is a keeper then <https://github.com/styled-components/babel-plugin-styled-components> is a thing to add to my React boilerplate for larger apps. Easier debugging of Styled Components.

#### Docker
*019-08-29 23:12* This is above my head but interesting... <https://youtu.be/Td7w0_nD5_4>

#### Optimizations
*2019-09-14 20:58* Optimering genom att planera när script ska laddas. <https://www.youtube.com/watch?v=eDd6Y6Z50Mg>

*2019-10-15 10:00* Error Logging Frontend js errors back to server. <https://medium.com/@devspotlight/best-practices-for-client-side-logging-and-error-handling-in-react-log-analysis-log-monitoring-531fea4a5fae>

*2019-10-26 09:16* An article about doing a controlled startup of a web app the same as we aspire to do. Need to evaluate it. https://medium.com/javascript-in-plain-english/how-to-handle-and-design-the-startup-of-a-react-application-da779f3727e5

*2019-10-31 09:36* Remember the differences android and ios measures window height in respect to the keyboard was a headache when I was doing the mobile version of the current configurator. Now it seems there is a native solution. <https://twitter.com/jesper_vos/status/1179673256925814785?s=09>
(I had to store the viewport height upon onload as an attribute or css style on mobile and lock it to that)

*2019-11-30 02:23* Faster JSON! <https://www.youtube.com/watch?v=1gEoOuixsYs>

*2019-11-30 09:07* App startup orchestration <https://medium.com/javascript-in-plain-english/how-to-handle-and-design-the-startup-of-a-react-application-da779f3727e5>

#### CSS Libraries
*2019-10-07 15:49* Semantic-UI: A jQuery free alternative to Bootstrap. With a React specific fork https://react.semantic-ui.com/

#### UX
*2019-10-19 10:11* Talking about microcopy would be a useful thing to involve Scania in. Talking points: when to use Scania corporate tone and when to use a more casual and emphatic voice, users emotional journey, how this works with translations. <https://medium.com/swlh/my-6-point-microcopy-checklist-for-non-ux-writers-634eb52b29c9>

*2019-10-23 08:53* Microanimations/transitions might be more programmatically readable with this libraries than plain css. <https://reactcommunity.org/react-transition-group/>

*2019-10-31 13:18* All web apps made to mimic native apps should lock screen orientation down and just use it as a feature when it has something extra to offer. <https://code-boxx.com/lock-screen-orientation/>

*2020-01-13 21:58* Finally a css solution to :hover on touch screens <https://link.medium.com/QPKG4ORYd3>

#### React
*2019-10-19 00:26* __Capturing gestures__ won’t happen by itself. We need a library. This is a pretty lowlevel library. Will probably need to look further. <https://dev.to/bmcmahen/building-react-components-with-gesture-support-3nn8>

*2019-10-07 15:15* Cute __micro-animation library__ <https://react.useanimations.com/>

*2019-11-01 14:54* __Sharing React components__ seems to be perhaps even more user frendly than reusing Polymer components using https://bit.dev/

*2019-11-03 23:02* __Axios__ has been the goto alternative to the native javascript fetch. Now comes this little library and it looks really sexy out of the box <https://swr.now.sh/>

*2019-10-06 08:07* This will come in handy. __useBreakpoint hook__ - media query breakpoints in react. <https://link.medium.com/PyNjAQDDy0>
The spinn-off js-in-css library to Styled Components called Polished.js also handles breakpoints. Polished.js works well in combo with Styled Components. <https://polished.js.org/>
Media query function set up in plain js with styled-components <https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053>
Update to first link <https://medium.com/better-programming/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97>

*2019-09-02 18:01* Article describes a way to use multiple projects under the same url:
<https://link.medium.com/n6c43G8SEZ>

*2019-11-16 12:22* Not even forms are straight forward in React. So there are libraries for that like <https://medium.com/better-programming/build-the-next-generation-of-forms-with-react-hooks-forms-b4f2039e51c1> or Formik2 or Redux Forms
Formik <https://github.com/jaredpalmer/formik/releases/tag/v2.0.1>

*2019-11-03 22:34* The react hooks way to detect click outside <https://codesandbox.io/s/9o3lw5792w>
More <https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82>

*2020-01-24 20:53* A few potentially useful React tips here <https://link.medium.com/FlTaGD49v3>

*2020-07-29 19:25* Webpack 5/React will adress some micro frontend issues. <https://link.medium.com/GSi09Mvmw8>

#### Animations
*2019-11-03 23:41* Super interesting talk about __animation__ in webb apps on mobile (vs desktop) <https://www.youtube.com/watch?v=JDDxR1a15Yo&feature=youtu.be&t=10664>

*2019-11-12 08:59* The slider component that needs to work with both gestures and on desktop with super smooth animations probably is going to cost us a lot of developing hours. CSS to the rescue! scroll-snap seems to have full support for all browsers we care about <https://caniuse.com/#search=scroll-snap>
If scroll-snap fails on us this is a good starting point for doing the same in JS/React. https://www.youtube.com/watch?v=3ax9TW2c2bY&list=LLuVFSB0bbZK_B3dciRnBBfw&index=41&t=1008s
More alernate starting points if scroll-snap fails https://medium.com/dailyjs/horizontal-scroll-animation-fc39ae43cbe5

#### Testing
*2019-11-12 23:51* Make __Jest__ also test Styled-Components <https://github.com/styled-components/jest-styled-components>

*2019-11-21 19:53* A good primer for automated tests with Jest an Enzyme https://link.medium.com/BAaUIuWRN1

#### Web components
Polymer without build tools, just __native web components__ <https://stackblitz.com/edit/open-wc-lit-demos?file=01-basic%2F01-basic-setup.js>

#### Analytics
*2019-11-16 18:00* Analytics tool <https://www.hotjar.com/?utm_source=SyndicateAds&utm_medium=display&utm_campaign=NativeCPC&utm_content=8a4a673f623aff992f1a5908b3c3fb94>

#### Typescript

*2019-12-13 15:38* Nice Typescript intro, it's live coding 50 minutes so using the youtube speed setting is recommended <https://youtu.be/IadZyDwfwWI>

#### Router
*2020-01-20 23:45* Lets code a client side router. It very well might be the easiest way forward in a micro frontend lanscape to roll your own orchestrator that ties together underlying spa’s with a few but common functions. One of these is a router function. Here is an article on how to roll your own. <https://link.medium.com/GM2w3MhIp3>

#### PWA
*2020-07-20 11:49* PWA is seriously catching up with native. <https://youtu.be/M0wPM8B6z5c>