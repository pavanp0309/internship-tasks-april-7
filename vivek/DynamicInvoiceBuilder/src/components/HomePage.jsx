export default function HomePage({ setShowInvoice }) {
    
  
    return (
      <div className="home-page">
        <h1 className="text-center p-3">Electronic Items Invoice</h1>
        <div className="container">
      {/* Left side - Electronics content */}
      <div className="content-card">
        <h2>Latest Electronics Products</h2>
        
        <div className="electronic-item">
          <h3>📱 Smartphones</h3>
          <p>
            The newest smartphones feature foldable displays, 200MP cameras, 
            and AI-powered photography. Flagship models now offer 5G connectivity, 
            under-display fingerprint sensors, and all-day battery life.
          </p>
        </div>

        <div className="electronic-item">
          <h3>💻 Laptops</h3>
          <p>
            Modern laptops combine power and portability with Intel 13th Gen 
            and AMD Ryzen 7000 processors. OLED displays, 120Hz refresh rates, 
            and lightweight designs under 1kg are becoming standard.
          </p>
        </div>

        <div className="electronic-item">
          <h3>🎮 Gaming Consoles</h3>
          <p>
            Next-gen consoles deliver 4K/120fps gaming with ray tracing. 
            Cloud gaming services allow playing AAA titles without expensive 
            hardware. VR integration is improving with each generation.
          </p>
        </div>

        <div className="electronic-item">
          <h3>🖥️ Smart TVs</h3>
          <p>
            8K resolution, Mini-LED backlighting, and 144Hz refresh rates 
            are transforming home entertainment. Built-in voice assistants 
            and smart home integration make TVs the center of modern living rooms.
          </p>
        </div>
      </div>

      {/* Right side - Electronics images */}
      <div className="image-card">
       
        <img 
          src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF0ZXN0JTIwbGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
          alt="Modern laptops"
          className="electronic-image"
        />
       
        <img 
          src="https://images.unsplash.com/photo-1571415060716-baff5f717c37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB0dnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
          alt="Smart TVs"
          className="electronic-image"
        />
      </div>
    </div>
      
        
  
        <button 
          className="get-started btn-1" 
          onClick={() => setShowInvoice(true)}
        >
          Get Started
        </button>
      </div>
    );
  }