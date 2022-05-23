import Head from 'next/head';
import React from 'react';
import PortalFooter from '../../components/footer/PortalFooter';
import BestQuoteCard from './bestQuote';
import ExperienceCard from './experience';
import GitInfo from './gitInfo';
import HeroinCard from './heroin';

const ProfileModule = () => {
    return (
        <>
            <Head>
                <title>Kalyani | Profile</title>
                <meta name="description" content="Developed by Kalyani" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HeroinCard />
                <ExperienceCard />
                <BestQuoteCard />
                <GitInfo />
            </main>
            <footer>
                <PortalFooter />
            </footer>
        </>
    )
}

export default ProfileModule;