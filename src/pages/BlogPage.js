import { Footer } from "../components/Footer";

export const BlogPage = () => {
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
<section id="header" class="header-five">
	<div class="container">
		<div class="row">

			<div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
          <div class="header-thumb">
              <h1 class="wow fadeIn" data-wow-delay="0.6s">WORKS</h1>
              <h3 class="wow fadeInUp" data-wow-delay="0.9s">Products I make</h3>
          </div>
			</div>

		</div>
	</div>		
</section>


<!-- Blog section
================================================== -->
<section id="blog">
   <div class="container">
      <div class="row">

         <div class="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="1s">
         	  <div class="blog-thumb">
         		   <a href="single-post.html"><img src="src/images/2023-05-24.png" class="img-responsive" alt="Blog"></a>
         		   <a href="single-post.html"><h1>Sản phẩm đầu tiên</h1></a>
         		     <div class="post-format">
						        <span><i class="fa fa-date"></i> 12-10-2022</span>
					       </div>
         		     <p>Đây là sản phẩm đầu tay của tôi thiết kế về một trang web bán ghế sofa. Chúng tôi muốn mang đến cho người dùng những trải nghiệm tốt nhất về dịch vụ của mình.</p>
         		     <a href="single-post.html" class="btn btn-default">Read More</a>
         	    </div>
		    </div>

		    <div class="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="1.6s">
         	  <div class="blog-thumb">
         		   <a href="single-post.html"><img src="src/images/2023-05-24 (1).png" class="img-responsive" alt="Blog"></a>
         		   <a href="single-post.html"><h1>Sản phẩm thứ hai</h1></a>
         			    <div class="post-format">
						        <span><i class="fa fa-date"></i> 10-03-2023</span>
					       </div>
         		     <p>Sản phẩm thứ 2 chúng tôi thiết kế nên trang web bán điện thoại để mang đến những tiện ích cho khách hàng khi mua hàng online.</p>
         		     <a href="single-post.html" class="btn btn-default">Read More</a>
         	  </div>
		    </div>
       </div>
   </div>
</section>
    ${Footer()}
    `
}