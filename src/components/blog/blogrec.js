import './blog.css';
import { Footer } from '..';
import { Header } from '..';

import rec1 from '../../assets/rec1.jpeg';
import rec11 from '../../assets/rec11.png';
import rec2 from '../../assets/rec2.jpeg';
import rec21 from '../../assets/rec21.png';
import rec3 from '../../assets/rec3.jpeg';
import rec31 from '../../assets/rec31.png';


function Blogrec() {
    return (
        <>
        <Header/>
        <div>
            <div className="header">
                <h1>Hirect Blogs For Recruiters</h1>
            </div>
            <div className="row">
                <div className="leftcolumn">
                    <div className="card">
                        <h2>CEO Insights: Antonio Kennedy, Supreme Reality Hospitality Group</h2>
                        <h3>Hospitality Has Been a Lifelong Calling for This Founder</h3>
                        <br/><img src={rec1} alt='rec1'></img><br/>
                        <p>While many of us eventually stumble into our chosen profession or sector, Antonio Kennedy is part of the fortunate few who recognized his passion early in life — in fact, with his very first job. As a teenager in Greensboro, North Carolina, he found and fell in love with all things hospitality and has since spent half his life making his mark in one of the country’s most pivotal and influential industries.</p>
                        <p>“My first job was at 14 at a waterpark, Wet’n Wild Emerald Pointe,” said Kennedy, now the founder and CEO of Supreme Reality Hospitality Group, a hands-on hospitality consulting firm and premium task force staffing agency. “By the time I turned 17, I was a kitchen manager at Applebees; by the time I was 18, I was a sous chef and kitchen trainer at Greensboro Coliseum.”</p>
                        <br/><img src={rec11}  alt='rec1'></img><br/>
                        <p>Currently, Kennedy has more than 50 independent contractors in hotel operations, trained and certified in everything from entry level roles, such as maintenance or line staff, to executive leadership positions like managers (general, sales, front office, food & beverage) and directors (sales, operations). Supreme supports more than a dozen entities in Maryland, Virginia, South Carolina, Florida, Georgia, Louisiana, Indiana, and South Dakota.</p>
                    </div>
                </div>
                <div className="leftcolumn">
                    <div className="card">
                        <h2>CEO Insights: Norman L. Kinsey III, Liftoff Agent</h2>
                        <h3>The Brand and Digital Marketing Partner for Real Estate Professionals</h3>
                        <br/><img src={rec2} alt='rec1'></img><br/>                        
                        <p>Like any memorable founder story, Norman L. Kinsey III’s journey from outsider to market disruptor started in relative obscurity in a modest Bay Area bedroom. It was here, after years of dabbling in everything from car sales to nightclub promotion, that he picked up the phone and began to cold-call agents at a boutique real estate company in the East Bay — more than 350 of them to be exact.</p>
                        <p>It was a market he was completely unfamiliar with, aside from a few friends in the commercial real estate sector, but he was eager to garner insight about agents’ experiences and pain points — directly from the source. With each subsequent call he uncovered shared struggles and common frustrations, largely around a need for personal brand development and digital marketing support.</p>
                        <p>“After calling these 350 agents, I started understanding they want to be different with their own branding from their colleagues, competitors, and peers,” said Kinsey, now CEO and co-founder of Liftoff Agent, a single solution positioning agency that helps residential real estate professionals maximize their online marketing efforts. “They want toolsets from broker to broker, because there is a lot of turnover and they have to start all over again with toolsets, website, what have you, and they want to have the same support as a top producer.”</p>
                        <br/><img src={rec21}  alt='rec1'></img><br/>                      
                        <p>“As soon as their [agents] foundation is done after 30 days, on a monthly basis we help them maximize their online marketing strategy,” he said. “Keeping their website up to date, keeping their ads going, the ads will be targeted around the videos that they film, making sure they have videos going on YouTube, making sure their ‘Coming Soon,’ ‘Just Sold,’ ‘Just Listed’ are going out on their social platforms. So, we can help them delegate, save some time to do what they do best, which is focusing on their buyers and sellers and really just maximizing their efforts with us.”</p>
                    </div>
                </div>
                <div className="leftcolumn">
                    <div className="card">
                        <h2>Garg Plays Grinch, Fires 900 in 3 Minutes</h2>
                        <h3>Better.com CEO’s Zoom Call Heard ‘Round the World</h3>
                        <br/><img src={rec3} alt='rec1'></img><br/>                        
                        <p>Just in time for the holidays, Vishal Garg, CEO of mortgage lender and unicorn startup Better.com, recently went full Grinch and axed 900 — yes, 900 — employees during a Zoom call that has since been called “cruel,” “cold,” and “callous” by more sympathetic viewers.</p>
                        <p>The call, which was thankfully recorded by one of the unfortunate employees and has since been viewed hundreds of thousands of times on Twitter, TikTok, and other social channels, starts off fairly ominously.</p>
                        <p>It’s safe to say things didn’t get much better during the next three minutes. Here were some of the greatest hits:“This is the second time in my career I’m doing this, and I do not want to do this. The last time I did it I cried. This time I hope to be stronger.”</p>
                        <br/><img src={rec31} alt='rec1'></img><br/>                       
                        <p>In addition to their pink slips, U.S.-based employees (reportedly Better’s diversity, equity, and inclusion staff) received four weeks of severance, one month of full benefits, and two months of COBRA, the federal health benefits program. At least it wasn’t just a year membership to the jelly of the month club.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}

export default Blogrec;
