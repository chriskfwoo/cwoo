import './App.css'

const jobs = [
  {
    id: 'drw2',
    link: 'https://www.drw.com',
    title: "DRW (Dec 19'-now)",
    info: 'Worked on the event-driven trading team at trading firm.'
  },
  {
    id: 'plotly',
    link: 'https://www.plotly.com',
    title: "Plotly (May 19' - Aug 19' Intern)",
    info: 'Worked on the open-source Dash team to build demo applications for sales team.'
  },
  {
    id: 'drw',
    link: 'https://www.drw.com',
    title: "DRW (Jan 18'-Dec 18' Intern)",
    info: 'Worked on the event-driven trading team at trading firm.'
  },
  {
    id: 'heycarson',
    link: 'https://www.heycarson.com/',
    title: "HeyCarson Shopify Partner (May 17'-Aug 17' Intern)",
    info: 'Worked on a tool called Storetasker (acquired) to connect owners with freelance Shopify experts.'
  },
];

const links = [
  {
    id: "running-reports",
    title: "Running Reports",
    link: "https://www.papermark.io/view/cm5j4zh0r0003d43ncv8e7u66",
    info: "Documenting my pain"
  }
];

function App() {

  return (
    <div className='container mx-auto lg:px-72 md:px-16 sm:px-8 sm:mt-8 lg:mt-16 text-left font-serif'>
      <h1 className='text-4xl font-bold'>
        Chris Woo
      </h1>
      <div>
        <h3 className='font-bold'>Hey 👋</h3>
      </div>
      <div className='mt-5 text-neutral-800 leading-6'>
        <p>
          I'm a software developer at <a href='https://drw.com/' className='underline' target='_blank'>DRW</a> based in Montreal, Canada.
          I graduated from <a href='https://www.concordia.ca/' className='underline' target='_blank'>Concordia</a> in Bachelor of Engineering in Software Engineering and completed my quest to get the iron ring.
          I helped organize ConUHacks IV and V, the biggest hackathon in Montreal.
        </p>
      </div>
      <div className='mt-5'>
      </div>
      <div className='mt-5'>
        <h3 className='font-bold'>Work</h3>
        <div className='text-sm'>
          {
            jobs.map(job => {
              return (<div className='pb-3'>
                <a href={job.link} className='underline' target='_blank'>{job.title}</a>: {job.info}
              </div>)
            })
          }
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='font-bold'>Digital footprint</h3>
        <div className='text-sm'>
          {
            links.map(link => {
              return (<div className='pb-3'>
                <a href={link.link} className='underline' target='_blank'>{link.title}</a>: {link.info}
              </div>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
