import React from 'react';
import Footer from 'src/components/Footer';
import AccountSection from './AccountSection';
import CommentSection from './CommentSection';
import IntroSection from './IntroSection';
import RouteSection from './RouteSection';
import RSVPSection from './RSVPSection';
import ShareSection from './ShareSection';
import SplashSection from './SplashSection';
import TimelineSection from './TimelineSection';

const IndexPage = () => {
  return (
    <div>
      {/* <NavBar /> */}

      <SplashSection />
      <IntroSection />
      <TimelineSection />

      <RouteSection />
      <RSVPSection />
      <AccountSection />
      <ShareSection />
      <CommentSection />

      <Footer />
    </div>
  );
};

export default IndexPage;
