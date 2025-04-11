import React from 'react'
import data from '../data/data'

const Home = () => {
    return (
        <div className='container my-5'>
            <div className="card bg-dark">
                <div className="left">
                    <div className='head-name mx-3 my-3'>
                        <h3 className='name wel-name text-white'>Hello,Sai</h3>
                        <p className='text text-date text-white'>Thursday,10,April,2025</p>
                    </div>
                    <div className='right my-3 mx-3'>
                        <div className='rightone d-flex mx-2'>
                            <div className='first-right'>
                                <h3 className='name top-name text-white my-3 mx-1'>Saivijaybabu.B</h3>
                            </div>
                            <div className='second-right'>
                                <img src="./src/assets/pic.jpg" alt="np image" className='img  my-3'/>
                            </div>
                        </div>
                        <div className='righttwo d-flex mx-3 my-3'>
                            <button className='btn btn-info mx-3 p-2' id='btn'><i className="bi bi-gear"></i></button>
                            <button className='btn btn-info p-2' id='btn'><i className="bi bi-bell"></i></button>
                        </div>
                    </div>
                </div>
                <h1 className='text-center text-white'>FITNESS DASHBOARD</h1>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                        <div className="card mx-2 my-2" id='card1'>
                            <h4 className='text-center'>{data[0].title[0]}</h4>
                            <div className='icons'>
                                <button className='btn btn-success '><i class="bi bi-heart-pulse" id='icon'></i></button>
                                <p className='icon '><i class="bi bi-box-arrow-up-right" id='icon'></i></p>
                            </div>
                            <h5 className='mx-4'>{data[0].heading[0]}</h5>
                            <p className='mx-2'>Goals:<span className='time'>{data[0].Goal[0]}</span> Min</p>
                            <p className='mx-2'> Achived: <span className='time'>{data[0].Achived[0]}</span> Min</p>
                            <div className="card p-4 mb-4" id='card1pro' style={{ background: 'linear-gradient(to right, #ef687c, #ef6852)', color: 'white' }}>
                                <div className="row align-items-center">
                                    <div className="col-md-4 text-center">
                                        <div className="position-relative d-inline-block">
                                            <svg width="120" height="120">
                                                <circle cx="60" cy="60" r="50" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="8" fill="none" />
                                                <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="8" fill="none" strokeDasharray="378.16" strokeDashoffset="62.83" />
                                            </svg>
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <strong>100%</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h5 className='mx-4'>{data[0].wish[0]?"Congrates 💐":"Please Go On"}</h5>
                                        <p className='mx-4'>{data[0].progress[0] ? "You Crushed It" : "Keep Going"}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                        <div className="card my-2" id='card2'>
                            <h4 className='text-center'>{data[0].title[1]}</h4>
                            <div className='icons'>
                                <button className='btn btn-success'><i class="bi bi-person-walking" id='icon'></i></button>
                                <p className='icon'><i class="bi bi-box-arrow-up-right" id='icon'></i></p>
                            </div>
                            <h5 className='mx-4'>{data[0].heading[2]}</h5>
                            <p className='mx-2'>Goals:<span className='time'>{data[0].Goal[1]}</span>Steps</p>
                            <p className='mx-2'> Achived: <span className='time'>{data[0].Achived[1]}</span> Steps</p>
                            <div className="card p-4 mb-4" style={{ background: 'linear-gradient(to right, #667eea, #764ba2)', color: 'white' }}>
                                <div className="row align-items-center">
                                    <div className="col-md-4 text-center">
                                        <div className="position-relative d-inline-block">
                                            <svg width="120" height="120">
                                                <circle cx="60" cy="60" r="50" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="8" fill="none" />
                                                <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="8" fill="none" strokeDasharray="324.16" strokeDashoffset="62.83" />
                                            </svg>
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <strong>88%</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h5 className='mx-4'>{data[0].wish[1]?"Congrates 💐":"Please Go On"}</h5>
                                        <p className='mx-4'>{data[0].progress[1]?"You Crushed It":"Keep Going"}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                        <div className="card my-2" id='card3'>
                            <h4 className='text-center'>{data[0].title[2]}</h4>
                            <div className='icons'>
                                <button className='btn btn-success'><i class="bi bi-fire" id='icon'></i></button>
                                <p className='icon'><i class="bi bi-box-arrow-up-right" id='icon'></i></p>
                            </div>
                            <h5 className='mx-4'>{data[0].heading[1]}</h5>
                            <p className='mx-2'>Goals:<span className='time'>{data[0].Goal[2]}</span> Kcal</p>
                            <p className='mx-2'> Achived: <span className='time'>{data[0].Achived[2]}</span> Kcal</p>
                            <div className="card p-4 mb-4" style={{ background: 'linear-gradient(to right, #4ac793, #4ac739)', color: 'white' }}>
                                <div className="row align-items-center">
                                    <div className="col-md-4 text-center">
                                        <div className="position-relative d-inline-block">
                                            <svg width="120" height="120">
                                                <circle cx="60" cy="60" r="50" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="8" fill="none" />
                                                <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="8" fill="none" strokeDasharray="354.16" strokeDashoffset="62.83" />
                                            </svg>
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <strong>91.2%</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h5 className='mx-4'>{data[0].wish[2]?"Congrates 💐":"Please Go On"}</h5>
                                        <p className='mx-4'>{data[0].progress[2]?"You Crushed It":"Keep Going"}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                        <div className="card my-2 mx-2" id='card4'>
                            <h4 className='text-center'>{data[0].title[3]}</h4>
                            <div className='icons'>
                                <button className='btn btn-success'><i class="bi bi-droplet-fill" id='icon'></i></button>
                                <p className='icon'><i class="bi bi-box-arrow-up-right" id='icon'></i></p>
                            </div>
                            <h5 className='mx-4'>{data[0].heading[3]}</h5>
                            <p className='mx-2'>Goals:<span className='time'>{data[0].Goal[3]}</span> Glasses</p>
                            <p className='mx-2'> Achived: <span className='time'>{data[0].Achived[3]}</span> Glasses</p>
                            <div className="card p-4 mb-4" style={{ background: 'linear-gradient(to right, #0cbfcfde, #0cbfc198)', color: 'white' }}>
                                <div className="row align-items-center">
                                    <div className="col-md-4 text-center">
                                        <div className="position-relative d-inline-block">
                                            <svg width="120" height="120">
                                                <circle cx="60" cy="60" r="50" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="8" fill="none" />
                                                <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="8" fill="none" strokeDasharray="378.16" strokeDashoffset="62.83" />
                                            </svg>
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <strong>100%</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h5 className='mx-4'>{data[0].wish[3]?"Congrates 💐":"Please Go On"}</h5>
                                        <p className='mx-4'>{data[0].progress[3]?"You Crushed It":"Keep Going"}</p>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
