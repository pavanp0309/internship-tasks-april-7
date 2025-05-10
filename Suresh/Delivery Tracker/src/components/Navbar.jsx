import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav style={{ backgroundColor: '#f8f9fa', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <a style={{ fontWeight: 'bold', fontSize: '1.5rem', textDecoration: 'none', color: '#000' }} href="#">
                        ZOMATO
                    </a>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1.25rem',
                            cursor: 'pointer',
                        }}
                        aria-label="Toggle navigation"
                    >
                        ☰
                    </button>
                    <div>
                        <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
                            {['Home', 'About us', 'Contact', 'Service'].map((item, index) => (
                                <li key={index} style={{ margin: '0 1rem' }}>
                                    <a
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: '1rem',
                                            transition: 'color 0.3s',
                                        }}
                                        href="#"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <section
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '2rem 1rem',
                    textAlign: 'center',
                }}
            >
                <div style={{ marginBottom: '2rem', maxWidth: '600px' }}>
                    <h1 style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '2rem' }}>
                        Get the best food <br /> from the best restaurants
                    </h1>
                    <button
                        style={{
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            borderRadius: '0.25rem',
                        }}
                    >
                        Get Started
                    </button>
                </div>
                <div style={{ maxWidth: '600px' }}>
                    <img
                        src="./src/assets/food.jpg"
                        alt="Delicious food"
                        style={{
                            width: '100%',
                            borderRadius: '0.5rem',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </div>
            </section>
        </>
    );
};

export default Navbar;