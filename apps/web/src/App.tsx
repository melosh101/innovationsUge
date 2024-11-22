function App() {
  return (
    <>
      <main>
        {/* banner */}
        <article className='lg:bg-[url("/cover.jpg")] lg:bg-cover lg:h-[70vh] flex flex-col'>
          <div className='flex flex-col my-auto ml-32 text-balance '>
            <h1 className='flex float-left text-5xl w-fit bg-[#00000005]'>RTS vindmølle projekt</h1>
            <p className='float-left lg:w-[50%] mt-4 lg:text-xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] w-fit bg-[#00000005]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, fugit dicta? Atque mollitia exercitationem quam veritatis excepturi odit vitae laborum quia at laudantium architecto voluptatem, aliquam non aspernatur, totam inventore.</p>
          </div>
        </article>

        {/* Om Projektet */}
        <article className='mt-24 bg-slate-200 w-[90%] mx-auto p-4 rounded-md text-balance'>
          <h2 className='text-2xl font-bold'>Om projektet</h2>
          <p className='mt-4'>
            Idéen til dette projekt opstod som et svar på den stadigt voksende behov for bæredygtige løsninger i både kulturlivet og samfundet generelt. Roskilde Festival er en af de største og mest ikoniske festivaler i verden, men som med mange store events, er der også et stort energiforbrug og miljømæssige udfordringer. Når festivalen er slut, står området ofte tomt – men hvad nu, hvis vi kunne udnytte den plads og energi på en helt ny måde?
          </p>
          <p>
            Vi ønskede at finde en løsning, der kunne hjælpe med at gøre festivalens eftervirkninger bæredygtige, samtidig med at vi bidrager til den grønne omstilling. Ideen om at opstille vindmøller på festivalområdet blev født ud af ønsket om at udnytte vinden til at generere strøm, der kan bruges både til festivalens aktiviteter og til at forsyne andre områder, som vores skole.
          </p>
          <p>
            Målet er at udnytte festivalområdet på en måde, der både gavner miljøet og lokalsamfundet. Når festivalen er overstået, og pladsen står tom, vil vindmøllerne fortsætte med at producere strøm – og denne strøm kan bruges til at forsyne skoler og andre offentlige institutioner med bæredygtig energi. Det er en idé, der bygger på samarbejde, innovation og en forståelse af, at selv store begivenheder som Roskilde Festival kan have en positiv indvirkning på samfundet og klimaet.
          </p>
          <p>
            Med dette projekt går vi skridtet videre mod en grønnere, mere ansvarlig fremtid – hvor energi ikke kun er noget, vi bruger, men også noget, vi skaber på nye, bæredygtige måder.
          </p>
        </article>

        <video src="/movie.mp4" autoPlay loop className='w-[80%] mx-auto my-16'></video>

        {/* Vore plan */}
        <article className='bg-slate-200 w-[90%] mx-auto p-4 rounded-md'>
          <h2 className='text-2xl font-bold'>PLANEN</h2>
          <p className='mt-4 text-balance'>
            Vi ønsker at tænke nyt og udnytte mulighederne for bæredygtig energi. Vores projekt handler om at gøre Roskilde Festivalområdet til en kilde til grøn strøm, ikke kun under festivalen, men hele året rundt. Hvordan? Ved at opstille vindmøller, der kan udnytte vinden til at producere vedvarende energi, selv når området står tomt.
          </p>
          <p>
            Den strøm, der genereres, kan bruges til mange formål, blandt andet at forsyne vores skole med bæredygtig energi. Det betyder, at vi som elever og lærere kan få glæde af grøn strøm til at drive vores hverdag – fra lys i klasseværelserne til opladning af computere. Men det stopper ikke her. Projektet viser, hvordan vi kan kombinere kultur, uddannelse og grøn omstilling på en måde, der gør en reel forskel for fremtiden.
          </p>
          <p>
            Med vindmøllerne skaber vi mere end bare energi – vi skaber et eksempel på, hvordan store arrangementer som Roskilde Festival kan bidrage til samfundet, selv når de er forbi. Vi udnytter pladsen optimalt og gør den til en aktiv del af den bæredygtige omstilling.
          </p>
          <p>
            Dette projekt handler ikke kun om at levere strøm. Det handler om at inspirere og vise, hvordan samarbejde mellem forskellige aktører kan skabe løsninger, der gør verden lidt grønnere for os alle. Sammen skaber vi en fremtid, hvor energi er renere, og ressourcerne udnyttes bedre – fra festivalens åbne marker til vores klasselokaler.
          </p>
        </article>
        <img src="/plakat.webp" alt="plakat"  className='mx-auto mt-16'/>

      </main>
      <footer className="flex mt-16 bg-sky-500">
        <div className="mx-auto my-4">
          <h3>kontakt</h3>
          <p className='mt-2'>Telefon: 12345678</p>
          <p>Email: kontakt@vindmølleprojekt.dk</p>
          <p>Adresse: Vindmøllevej 1, 1234 Vindby</p>
        </div>
      </footer>
    </>
  )
}

export default App
