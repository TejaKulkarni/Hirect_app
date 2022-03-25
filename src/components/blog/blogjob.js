import './blog.css';

import job1 from '../../assets/job1.jpeg';
import job11 from '../../assets/job11.jpeg';
import job2 from '../../assets/job2.jpeg';
import job3 from '../../assets/job3.jpeg';

function Blogjob() {
    return (
        <div>
            <div className="header">
                <h1>Hirect Blogs For Jobseekers</h1>
            </div>
            <div className="row">
                <div className="leftcolumn">
                    <div className="card">
                        <h2>“Founders Got 99 Problems, But Hiring Ain’t One”</h2>
                        <h3>Hirect Pioneers a New Era in Hiring as it Launches the Largest Outdoor Ad Campaign in Bay Area History</h3>
                        <br/><img src={job1} alt='rec1'></img><br/>
                        <p>For founders, small business owners, and many job seekers, the frustration with current hiring and recruiting methods is all too real and continues to grow. Competition for top talent, the lifeblood of startups, is dominated by the deep pockets and brand recognition of established, well-funded companies. For candidates, the interview process is typically overly drawn-out, rife with obscure communication and confusion, and often results in being ghosted altogether.</p>
                        <p>“Traditionally you had to invest a small fortune or engage an echelon of recruiters to attract and land the best talent — with Hirect that’s no longer the reality,” said Stephanie Lovell, Hirect’s Head of Marketing. “The traditional way of hiring, of passive recruitment, is outdated, stale, and can’t keep pace with market trends in founder or job seeker communities. Hiring managers and candidates can now connect instantly and gauge interest and fit immediately. It’s quicker and far more transparent — we’re pioneering the future of hiring; get ready for the new era.”</p>
                        <br/><img src={job11} alt='rec1'></img><br/>
                        <p>Billboards, transit shelters, news racks, bus king/tail placements: the campaign includes several first-in-market creatives, such as two specially designed bus products, a custom paint job of Castro District news racks, and a creative execution on US-101 that spans three consecutive billboards.</p>
                    </div>
                </div>
                <div className="leftcolumn">
                    <div className="card">
                        <h2>This Is Not How Your Parents Found a Job</h2>
                        <h3>Hirect vs. Traditional Hiring Sites: What Distinguishes This Next Generation App?</h3>
                        <br/><img src={job2} alt='rec1'></img><br/>
                        <p>How did people find jobs before the internet? Seriously, we had to look this up. For two generations of job seekers, popular methods such as Sunday edition “Help Wanted” sections, supermarket bulletin boards, cold-calling companies, and trade journal advertisements are about as foreign as rotary phones and Walkmans.</p>
                        <p>Of course, other popular methods like headhunters/recruiters and good old-fashioned networking have withstood the test of time. But there’s no doubt technology has made job hunting more accessible and more competitive than ever before. There are literally thousands of job sites, boards, and blogs — anything from global aggregate sites like Indeed and Glassdoor to niche sites like JournalismJobs focused on specific industries, sectors, or job types.</p>
                        <p>Hirect is completely mobile-based. Everything — we mean everything — is accessible and available through the app. No laptops or desktops are needed to access your full profile or account. With a staggering 95 per cent of U.S. job seekers aged 18 to 49 owning a smartphone, it’s the quickest and most efficient way to engage with the majority of the workforce.</p>
                        <p>Hirect is specifically designed for startups, which means hiring managers/recruiters can have confidence candidates are passionate about the sector and eager to contribute to a growing business. No more struggling to rise above hundreds or thousands of other unrelated posts and positions. Hirect’s matching algorithms deliver you qualified candidates so you can immediately vet, connect, and hire your business’ next star employee.</p>
                    </div>
                </div>
                <div className="leftcolumn">
                    <div className="card">
                        <h2>Best Business Advice to Your Teenage Self</h2>
                        <h3>What business advice would you give to your teenage self?</h3>
                        <br/><img src={job3} alt='rec1'></img><br/>
                        <p>November has officially been designated National Entrepreneurship Month, 30 days to celebrate the innovators, dreamers, mavericks, and future tycoons whose passion, ideas, resilience, and persistence continue to confront our world’s most pressing challenges.</p>
                        <p>At Hirect, we’re immensely proud to be a drop in this vast ocean of entrepreneurship. We recognize the unlimited potential this community has, as well as the incredibly valuable insight and guidance it can offer through the inevitable successes and failures of its unique products, services, and businesses.</p>
                        <p>In honor of National Entrepreneurship Month, we recently reached out to this community on Reddit, specifically through the subreddit r/Entrepreneur, which boasts a million-plus members dedicated to problem solving, networking, and supporting small businesses, from VC-backed startups to one-man bands. We posed a simple question:</p>
                        <p>Financial statements provide a glimpse of a business’ overall fiscal performance — assets and liabilities (and related ratios), expenses, cash flow, etc. — and help illuminate trends that may require additional investment of attention and resources. Additionally, these reports are critical for investors and shareholders and to fulfill reporting obligations to regulatory authorities like the U.S. Securities Exchange Commission.</p>
                        <p>As most founders and entrepreneurs know, there are no traditional working hours and there’s certainly little, if any, downtime. It’s a 24/7 grind, often to the detriment of social circles, optimal nutrition, regular exercise, and appropriate sleep. The extra hours you put in, whether it’s your startup/business or a side hustle, will not only sharpen skills but help you hone new ones and eventually separate yourself from your competition.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Blogjob;