import { faGit, faMobileButton } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MtlBadge from '../../components/badge';

const GitInfo = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl md:text-4xl font-MsMadi text-center p-2 border-b mb-2">My Git Repo</h2>
            </div>
            <div className="flex md:hidden justify-between">
                <button className="btn btn-sm ml-2 mr-2">❮</button>
                <button className="btn btn-sm ml-2 mr-2">❯</button>
            </div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="w-full h-full">
                            <div className="ml-2 mr-2 mb-20 md:ml-20 md:mr-20">
                                <div className="card w-full border-2 rounded">
                                    <figure><img src="/bgImages/nodeExressApi.png" className="w-fit" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <div className="flex flex-col items-center justify-center font-RobotoSlab">
                                            <h2 className="card-title">Reward Points : GET API</h2>
                                            <p>A retailer offers a rewards program to its customers awarding points based on each recorded purchase.</p>
                                            <ol>
                                                <li>Every dollar spent over $50 on the transaction, the customer receives one pont</li>
                                                <li>In addition, for every dollar spent over $100, the customer receives another point</li>
                                            </ol>
                                            <code>Ex: for a $120 purchase, the customer receives (120-50) x 1 + (120 - 100) x 1 = 90 points</code>
                                        </div>
                                        <div className="card-actions flex flex-col items-center justify-center bg-white text-white">
                                            <div className='flex'>
                                                <span className="badge m-1">Node.js</span>
                                                <span className="badge m-1">Express.js</span>
                                            </div>
                                            <div className='flex'>
                                                <span className="badge m-1">mocha</span>
                                                <span className="badge m-1">chai</span>
                                                <span className="badge m-1">supertest</span>
                                                <span className="badge m-1">nyc</span>
                                            </div>
                                            <button onClick={() => window.open('https://github.com/sirigireddyskalyani/get-reward-points', '_blank')} className="btn btn-link">
                                                <img src="./icons/git.png" className='w-6 h-6 m-1' /> Code
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <button className="btn btn-circle">❮</button>
                            <button className="btn btn-circle">❯</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GitInfo