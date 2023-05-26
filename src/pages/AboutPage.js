import { Footer } from "../components/Footer";

export const AboutPage = () => {
  return `
   <div class="nav-container">
   <nav class="nav-inner transparent">

      <div class="navbar">
         <div class="container">
            <div class="row">
              <div class="navicon">
                <div class="menu-container">
                  <div class="circle dark inline">
                    <i class="icon ion-navicon"></i>
                  </div>
                  <div class="list-menu">
                    <i class="icon ion-close-round close-iframe"></i>
                    <div class="intro-inner">
                     	<ul id="nav-menu">
                         <li><a href="/">Home</a></li>
                       	 <li><a href="/about">About</a></li>
                       	 <li><a href="/blog">Blog</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </div>
   </nav>
</div>


<!-- Header section
================================================== -->
<section id="header" class="header-three">
	<div class="container">
		<div class="row">

			<div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
            	<div class="header-thumb">
              		 <h1 class="wow fadeIn" data-wow-delay="0.6s">About</h1>
              		 
           		</div>
			</div>

		</div>
	</div>		
</section> 
  <section id="about">
   <div class="container">
      <div class="row">

         <div class="wow fadeInUp col-md-4 col-sm-5" data-wow-delay="1.3s">
         	<img src="src/images/z4371059950553_fecb000db591f2029939aca85d5588b0.jpg" class="img-responsive" alt="About">
         	<h1>Skills</h1>
          <p>HTML5/CSS3</p>
          <p>JAVASCRIPT</p>
          <p>JAVA</p>
          <p>SQL</p>
          <p>PHP</p>
		</div>

		<div class="wow fadeInUp col-md-7 col-sm-7" data-wow-delay="1.6s">
			<h1>Đoàn Văn Chiến</h1>
			<p>Date of birth: 06-07-2003</p>
      <p>Phone: +84 388277125</p>
      <p>Email: doanvanchien2003@gmail.com</p><br>
			<img src="src/images/z4331895611669_68d70969addf36e231f220eae8715814.jpg" class="img-responsive" alt="About">
			<p>Don’t cry because it’s over, smile because it happened.</p>
      <p>Life isn’t about finding yourself. Life is about creating yourself.</p>
		</div>

</section>
${Footer()}
  `
}
