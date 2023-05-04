import React from 'react'
import Skeleton from '../UI/Skeleton';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
function SkeletonItems() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
      
      function Arrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style ,display: "block", background: "#CECECE", borderRadius:"60%", right: "1%",width:"30px", height:"30px", textAlign:"center" ,paddingTop:"6px"}}
            onClick={onClick}
          />
        );
      }

  return (
    <div>
         <Slider {...settings} >
                     {  new Array(4).fill(0).map((_, index) => (
                       <div className=""   >
                   
                       <div className="nft_coll ml-3"   key={index}>
                         <div className="nft_wrap " style={{height:"350px" }}>
                         <div className="nft_coll_pp ml-5">
                           <Link  to="/author">
                   <Skeleton width="50px" height="50px" backgroundColor="#ECECEC" borderRadius="50%"  marginTop="40px"/>
                           </Link>
                         
                           <i className="fa fa-check"></i>
                         </div>

                           <Link to={``}>
                            <Skeleton width="460px" height="730px" backgroundColor="#ECECEC" borderRadius={5}/>
                           </Link>
                         </div>
                         
                         <div className="nft_coll_info">
                <div className="d-flex flex-column justify-content-center align-items-center">
       <Skeleton width="80px"  height="16px" backgroundColor="#ECECEC" marginTop="22px"/>
                          
                          <Skeleton width="100px"  height="12px" marginTop="10px" backgroundColor="#ECECEC"/>
              </div>
                     
                   
                     
                         </div>
                     
                       </div>
                     
                     </div>
                    
                         ) )}
                     </Slider>
    </div>
  )
}

export default SkeletonItems