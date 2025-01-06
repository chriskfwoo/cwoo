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
    id: "running-reports",
    title: "Running Reports",
    link: "https://www.papermark.io/view/cm5j4zh0r0003d43ncv8e7u66",
    info: "documenting my pain"
  },
  {
    id: "adventures",
    title: "Adventures",
    link: "https://www.papermark.io/view/cm5j52czw000357vc0pgov3ef",
    info: "memories with my partner"
  }
];

function App() {

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
            I'm a software developer at <a href="https://drw.com/" className="underline" target="_blank">DRW</a> based in Montréal, Canada.
            I graduated from <a href="https://www.concordia.ca/" className="underline" target="_blank">Concordia</a> in Bachelor of Engineering in Software Engineering and completed my quest to get the iron ring.
            I also played a key role in organizing ConUHacks IV and V, Montreal's largest hackathon.
          </p>
        </div>
        <div className="mt-5 text-neutral-800 leading-6">
          <p>
            These days, you can often find me running along the Lachine Canal, refining my golf skills, planning my next adventure, or watching my sports team lose.
            I also enjoy hiking, camping, snowboarding, and picking up new skills or hobbies. But most importantly, I'm striving to <mark className="bg-green-200">create lasting memories</mark> with the people I care about the most.
          </p>
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
        <div className="mt-5">
          <h3 className="font-bold">Posts</h3>
          <div className="text-sm">
            {
              links.map(link => {
                return (<div className="pb-3">
                  <a href={link.link} className="underline" target="_blank">{link.title}</a>: {link.info}
                </div>)
              })
            }
          </div>
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
  )
}

export default App
