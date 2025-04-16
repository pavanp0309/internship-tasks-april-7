import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='footer border py-5'>
        <div className="row row-cols-1 row-cols-md-3 text-center  ">
        <i class="bi bi-geo-alt-fill fs-5 ">333 Middle Winchendon Rd, Rindge,NH 03461</i>
        <i class="bi bi-phone-fill fs-5">125-711-811 | 125-668-886</i>
        <i class="bi bi-envelope fs-5"> Support.gymcenter@gmail.com</i>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 my-5 text-center">
        <div>
        <h2>GYM</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.</p>
        </div>
        <div>
        <h3>UseFul Links</h3>
          <a class="nav-link active"  href="#">About</a>   
          <a class="nav-link active"  href="#">Blog</a>
          <a class="nav-link active"  href="#">Classes</a>
          <a class="nav-link active"  href="#">Contact</a>
          </div>
          <div>
          <h3>Support</h3>
          <a class="nav-link active"  href="#">Login</a>   
          <a class="nav-link active"  href="#">My account</a>   
          <a class="nav-link active"  href="#">Subscribe</a>   
          <a class="nav-link active"  href="#">Contact</a> 
          </div>
          </div>  
          <div className='icons text-center mx-5'>
            <a href=""><i class="bi bi-facebook mx-2"></i></a>
            <a href=""><i class="bi bi-twitter mx-2"></i></a>
            <a href=""><i class="bi bi-instagram mx-2"></i></a>
            <a href=""><i class="bi bi-linkedin mx-2"></i></a>
            <a href=""><i class="bi bi-envelope mx-2"></i></a>     
          </div>
          <hr />
          <p className='text-center'>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
          
        </div>


    </footer>
  )
}

export default Footer
