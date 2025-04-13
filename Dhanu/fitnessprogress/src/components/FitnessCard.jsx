import React from 'react'

const FitnessCard = ({ data }) => {
  const {
    heading, para, items, time, cal, liquid,
    images, prograss, dasharray, color, stroke, fill
  } = data;

  const numericProgress = parseInt(prograss);

  const wish = numericProgress >= 96;
  const progress = numericProgress >= 96;
  const isLowPerformance = numericProgress < 50;

  return (
    <div className='col-sm-12 col-md-4 col-lg-4 d-flex'>
      <div
        className="card mt-4 p-3 w-100 d-flex flex-column justify-content-between"
        style={{
          background: `${color}`,
          minHeight: '600px',
          borderRadius: '10px'
        }}
      >
        <div>
          <h4>{heading}</h4>
          <p>{para}</p>
          <img
            src={images}
            alt="fitness"
            style={{ height: "200px", width: '100%', objectFit: 'cover', borderRadius: '8px' }}
          />
          <div className="fit-items my-2">
            <p>{items}</p>
          </div>
          <div className="fit-info mb-3">
            <div><b>TIME 🕕: <span className='text-darker'>{time}</span></b></div>
            <div><b>CALORIES 🔥: <span className='text-darker'>{cal}</span></b></div>
            <div><b>WATER 💧: <span className='text-darker'>{liquid}</span></b></div>
          </div>
        </div>

        {/* 🎯 Goal Met Tag */}
        {wish && (
          <div
            className="badge bg-success text-white mb-2 align-self-start px-3 py-1 rounded-pill"
            style={{ fontSize: '0.9rem', fontWeight: 'bold' }}
          >
            🎯 Goal Met
          </div>
        )}

        {/* ⚠️ Warning Tag */}
        {isLowPerformance && (
          <div
            className="badge bg-danger text-white mb-2 align-self-start px-3 py-1 rounded-pill"
            style={{ fontSize: '0.9rem', fontWeight: 'bold' }}
          >
            ⚠️ Low Performance
          </div>
        )}

        {/* SVG Progress Ring */}
        <div className="prograss border border-white shadow d-flex align-items-center p-3 rounded bg-white mt-auto">
          <svg width="200" height="200" viewBox="-25 -25 250 250" xmlns="http://www.w3.org/2000/svg">
            <circle
              r="90"
              cx="100"
              cy="100"
              fill="transparent"
              stroke="#e0e0e0"
              strokeWidth="16px"
            />
            <circle
              r="90"
              cx="100"
              cy="100"
              stroke={stroke}
              strokeWidth="16px"
              strokeLinecap="round"
              strokeDashoffset="118.692px"
              fill="transparent"
              strokeDasharray={dasharray}
            />
            <text
              x="100"
              y="100"
              textAnchor="middle"
              dominantBaseline="middle"
              fill={fill}
              fontSize="32px"
              fontWeight="bold"
            >
              {prograss}
            </text>
          </svg>

          <div className='greetings ms-3 text-dark'>
            {wish ? (
              <>
                <span className='fw-bold'>Congrats 💐</span><br />
                <span>You Crushed It</span>
              </>
            ) : numericProgress >= 70 ? (
              <>
                <span className='fw-bold'>Please Go On</span><br />
                <span>Keep Going</span>
              </>
            ) : (
              <>
                <span className='fw-bold'>Keep it up!</span><br />
                <span>You’re getting there</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FitnessCard     