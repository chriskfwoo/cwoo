import React from 'react';

import "./App.css"
import avatar from './cw_avatar.png';
import cw1 from './cw_1.jpeg';
import cw2 from './cw_2.jpeg';
import cw3 from './cw_3.jpeg';

const jobs = [
  {
    id: "drw2",
    link: "https://www.drw.com",
    title: "DRW (Dec 19'-now)",
    info: "Worked on the event-driven trading team focused on scheduled news."
  },
  {
    id: "plotly",
    link: "https://www.plotly.com",
    title: "Plotly (May 19'-Aug 19' Intern)",
    info: "Worked on the open-source Dash team to build demo applications for sales team."
  },
  {
    id: "drw",
    link: "https://www.drw.com",
    title: "DRW (Jan 18'-Dec 18' Intern)",
    info: "Worked on the event-driven trading team focused on scheduled news."
  },
  {
    id: "heycarson",
    link: "https://www.heycarson.com/",
    title: "HeyCarson Shopify Partner (May 17'-Aug 17' Intern)",
    info: "Worked on a tool called Storetasker (acquired) to connect owners with freelance Shopify experts."
  },
];

const links = [
  {
    id: "cookbook",
    title: "👨‍🍳 Cookbook",
    link: "https://chriswoo.notion.site/Cookbook-1dfc798f207b80f38e15c3795f64305c?pvs=4",
    info: "family recipes that bring back childhood memories",
    private: false
  },
  {
    id: "chloevywoo",
    title: "👶 Chloe Vy Woo",
    link: "https://nimble.li/a98k5jl9",
    info: "memories with my daugher (curated)",
    private: true
  },
  {
    id: "running-reports",
    title: "🏃‍♂️ Running Reports",
    link: "https://www.papermark.io/view/cm5j4zh0r0003d43ncv8e7u66",
    info: "documenting my pain",
    private: true
  },
  {
    id: "woo",
    title: "📜 Woo History",
    link: "https://www.papermark.io/view/cm5ysldz6000f8hbqs5x9xp2p",
    info: "my family history in Quebec (in-progress)",
    private: true
  }
];

const projects = [
  {
    id: "ongaku",
    title: "Ongaku",
    link: "https://github.com/dojohouse/ongaku",
    info: "Personal IoT vinyl record player. Generate your own Music Cards (NFC tags) and listen with a simple tap on your Raspberry Pi."
  },
  {
    id: "bonjour-hi",
    title: "Bonjour-Hi",
    link: "https://github.com/chriskfwoo/bonjour-hi",
    info: "Multilingual video chat room platform, allowing you to video chat with people from all around the world, without having to speak their language. (1st place Facebook’s Mission @YHacks2018 Yale University)."
  },
  {
    id: "gifs",
    title: "GIFS Against Humanity",
    link: "https://devpost.com/software/cards-against-gifs",
    info: "You've heard of Cards against Humanity, but what about GIFS Against Humanity? (1st place GIPHY API @BostonHacks2018 Boston University)."
  }
];

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className="container mx-auto lg:px-72 md:px-16 sm:px-8 sm:mt-8 lg:mt-16 text-left font-serif">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Chris Woo
            </h1>
            <div>
              <h3 className="font-bold">Hey 👋</h3>
            </div>
          </div>
          <div>
            <img className="rounded-full" src={avatar} alt="avatar" width={70} height={70} />
          </div>
        </div>
        <div className="mt-5 text-neutral-800 leading-6">
          <p>
            I'm a software developer at <a href="https://drw.com/" className="underline" target="_blank">DRW</a> trading firm based in Montreal, Canada.
            I graduated from <a href="https://www.concordia.ca/" className="underline" target="_blank">Concordia</a> with a Bachelor of Engineering in Software Engineering and completed my quest to get the iron ring.
            I also played a key role in organizing ConUHacks IV and V, Montreal's largest hackathon.
          </p>
        </div>
        <div className="mt-5 text-neutral-800 leading-6">
          <p>
            These days, you can often find me running along the Lachine Canal, refining my golf skills, planning my next adventure, or watching my sports team lose.
            I also enjoy hiking, camping, snowboarding, and picking up new skills or hobbies. But most importantly, I'm striving to <mark className="bg-green-100">create lasting memories</mark> with the people I care about the most.
          </p>
        </div>
        <div className="flex align-middle opacity-65 mt-5">
          {/* mail */}
          <a href="mailto:chriskfwoo@gmail.com?subject=Hello!" target="_blank" className="mr-2">
            <svg height="20px" width="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" /></svg>
          </a>
          {/* CV */}
          {/* <a href="https://drive.google.com/file/d/1hpO5qnZ7fpYrLAFhb6lGBzN9rOOks7Mz/view?usp=drive_link" target="_blank" className="mr-1">
          <svg height="20px" width="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"/></svg>
          </a> */}
          {/* linkedin */}
          <a href="https://www.linkedin.com/in/chriskfwoo/" target="_blank" className="mr-2">
            <svg height="20px" width="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
          </a>
          {/* github */}
          <a href="https://github.com/chriskfwoo" target="_blank" className="mr-2">
            <svg height="20px" width="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
          </a>
          {/* instagram */}
          <a href="https://www.instagram.com/chriswoozzie/" target="_blank" className="mr-2">
            <svg height="20px" width="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
          </a>
          {/* strava */}
          <a href="https://www.strava.com/athletes/11843531" target="_blank" className="mr-2">
            <svg height="20px" width="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z" /></svg>          </a>
        </div>
        <div className="mt-5">
        </div>
        <div className="mt-5">
          <h3 className="font-bold">Work</h3>
          <div className="text-sm">
            {
              jobs.map(job => {
                return (<div className="pb-3">
                  <a href={job.link} className="underline" target="_blank">{job.title}</a>: {job.info}
                </div>)
              })
            }
          </div>
        </div>
        <div className="mt-2">
          {
            !isOpen && <button className="py-1 px-2 border-2 border-slate-300 rounded text-xs" onClick={() => setIsOpen(true)}>Show projects</button>
          }
          {
            isOpen && <div className="text-sm rounded-lg border-2 border-slate-500 p-4 m-2">
              <h3 className="font-bold mb-2">Projects</h3>
              {
                projects.map(project => {
                  return (<div className="pb-3">
                    <a href={project.link} className="underline" target="_blank">{project.title}</a>: {project.info}
                  </div>)
                })
              }
              <div className="flex justify-end">
                <button className="py-1 px-2 border-2 border-slate-500 rounded text-xs bg-slate-200" onClick={() => setIsOpen(false)}>Close</button>
              </div>
            </div>
          }
        </div>
        <div className="mt-5">
          <h3 className="font-bold">Notebooks</h3>
          <div className="text-sm">
            {
              links.map(link => {
                return (<div className="pb-3">
                  {link.link !== "" ? <a href={link.link} className="underline" target="_blank">
                    {link.title}</a> : link.title}: {link.info}{link.private && " 🔒"}
                </div>)
              })
            }
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div className="flex">
            <img className="rounded-b-3xl opacity-80 mr-5" src={cw1} alt="cw1" width={'100px'} height={'auto'} />
            {/* <img className="rounded-b-3xl opacity-70" src={cw3} alt="cw3" width={'120px'} height={'auto'} /> */}
          </div>
          <div>
            {/* <img className="rounded-b-3xl opacity-70" src={cw3} alt="cw3" width={'110px'} height={'auto'} /> */}
            <img className="rounded-b-3xl opacity-80" src={cw2} alt="cw2" width={'120px'} height={'auto'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
