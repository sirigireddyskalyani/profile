import React from 'react';
import * as moment from 'moment';
import MtlBadge from '../../components/badge';

const ExperienceCard = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h2 className="text-2xl md:text-4xl font-MsMadi text-center p-2 border-b mb-2">My Tech Skillset</h2>
            <div className="flex flex-col justify-center items-center">
                <div className="m-2 grid grid-rows-1 grid-cols-1 gap2">
                    <MtlBadge id="javascript" type='warning' path={"./icons/javascript.png"} tooltip="Javascript">
                        Javascript (9+ years)
                    </MtlBadge>
                </div>
                <div className="m-2 grid grid-rows-1 grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 items-center">
                    <MtlBadge id="nodeJS" type='warning' path={"./icons/nodeJs.png"} tooltip="Node.JS">
                        Node.js (2+ years)
                    </MtlBadge>
                    <MtlBadge id="nextJS" type='warning' path={"./icons/commonJSLogo.png"} tooltip="Next.JS">
                        Next.JS (3+ years)
                    </MtlBadge>
                    <MtlBadge id="expressJS" type='warning' path={"./icons/node-js-black.png"} tooltip="Express.JS">
                        Express.JS (3+ years)
                    </MtlBadge>
                    <MtlBadge id="graphQL" type='warning' path={"./icons/graphql.png"} tooltip="GraphQL">
                        GraphQL (2 years)
                    </MtlBadge>
                </div>
                <div className="m-2 grid grid-rows-2 gap-4 grid-cols-2 md:grid-cols-3">
                    <MtlBadge id="reactJS" type='warning' path={"./icons/react-js.png"} tooltip="React.JS">
                        React.JS (9+ years)
                    </MtlBadge>
                    <MtlBadge id="redux" type='warning' path={"./icons/redux.svg"} tooltip="Redux">
                        Redux (6+ years)
                    </MtlBadge>
                    <MtlBadge id="formik" type='warning' path={"./icons/formik.svg"} tooltip="Formik">
                        Formik (3+ years)
                    </MtlBadge>
                    <MtlBadge id="mui" type='warning' tooltip="Mui">
                        <span className="m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 32" fill="none" className="css-1170n61"><path fillRule="evenodd" clipRule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg>
                        </span>
                        Mui-Ui (3 years)
                    </MtlBadge>
                    <MtlBadge id="tailwind" type='warning' path={"./icons/tailwind-css.png"} tooltip="Tailwind CSS">
                        Tailwind CSS (2 years)
                    </MtlBadge>
                    <MtlBadge id="bootstrap" type='warning' path={"./icons/bootstrap-5-logo.png"} tooltip="Bootstrap">
                        Bootstrap 4,5  (5 years)
                    </MtlBadge>
                </div>
                <div className="m-2 grid grid-rows-1 grid-cols-2 gap2">
                    <MtlBadge id="CSS" type='warning' path={"./icons/css.png"} tooltip="CSS">
                        CSS3 (9+ years)
                    </MtlBadge>
                    <MtlBadge id="html5" type='warning' path={"./icons/html.png"} tooltip="HTML5">
                        HTML5 (9+ years)
                    </MtlBadge>
                </div>
            </div>
            <div className="divider font-MsMadi text-2xl">My Work Experience</div>
            <div className="flex justify-center p-4">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    {
                        [
                            {
                                name: 'Standard Chartered Financial services',
                                role: 'Technical Lead',
                                icon: '/icons/standardChartered.png',
                                from: { month: '08', year: '2021', day: '16', displayVal: 'Aug, 2021' },
                                to: { month: moment().format('MM'), year: moment().format('yyyy'), day: moment().format('DD'), displayVal: 'till date' },
                                about: `I am working at a Hong Kong-based core banking financial control with a cheque clearance module. 
                                    I have worked as a front-end developer with Node.js, Next.js, React.js, Redux, HTML5, CSS3 technical stack. 
                                    I have taken responsibility of giving training for new joiners on topics of core functionality, workflow and process to be followed  and make 
                                    them contribute as individual contributors to work in the project.`
                            },
                            {
                                name: 'Tech Mahindra',
                                role: 'Senior Sofware Engineer',
                                icon: '/icons/techM.png',
                                from: { month: '04', year: '2012', day: '01', displayVal: 'April 2012' },
                                to: { month: '08', year: '2021', day: '14', displayVal: 'August 2021' },
                                about: `Tech Mahindra Limited is an Indian multinational technology company, providing information technology and business process outsourcing services. 
                                    In my career with Tech Mahindra, I have worked with KPN, BT telecom domain clients.`
                            },
                        ].map((item) => {
                            const startDate = moment(`${item.from.year}-${item.from.month}-${item.from.day}`, 'YYYY-MM-DD');
                            const endDate = moment(`${item.to.year}-${item.to.month}-${item.to.day}`, 'YYYY-MM-DD');
                            const duration = moment.duration(endDate.diff(startDate));
                            const years = Math.round(duration.asYears() * 10) / 10;

                            if (item.isInActive) return null;
                            return (
                                <li className="mb-10 ml-6">
                                    <div className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-white border-base-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <img src={item.icon} className="p-1 text-black border-2 rounded-full" />
                                    </div>
                                    <h3 className="flex items-center mb-1 text-lg font-RobotoSlab">
                                        {item.name}
                                        <span className="bg-orange-400 text-blue-800 text-sm font-RobotoSlab mr-2 px-2.5 py-0.5 rounded dark:bg-orange-500 dark:text-blue-800 ml-3">{years}</span>
                                    </h3>
                                    <time className="block mb-2 text-sm font-RobotoSlab leading-none">{item.role}, {item.from.displayVal} to {item.to.displayVal}</time>
                                    <p className="mb-4 text-base font-RobotoSlab break-words">{item.about}</p>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default ExperienceCard;