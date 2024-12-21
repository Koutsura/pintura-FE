import React from "react";
import Slider from "react-slick";

const TrustedSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Jumlah logo yang terlihat sekaligus
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Waktu jeda antar slide (3 detik)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const logos = [
    { src: "/logo-companies/telkom.png", alt: "Telkom Indonesia" },
    { src: "/logo-companies/microsoft.png", alt: "Microsoft" },
    { src: "/logo-companies/ui.png", alt: "Universitas Indonesia" },
    { src: "/logo-companies/google.png", alt: "Google" },
    { src: "/logo-companies/ugm.png", alt: "Universitas Gadjah Mada" },
    { src: "/logo-companies/unilever.png", alt: "Unilever" },
    { src: "/logo-companies/accenture.png", alt: "Accenture" },
    { src: "/logo-companies/its.png", alt: "ITS" },
    { src: "/logo-companies/gojek.png", alt: "Gojek" },
    { src: "/logo-companies/itb.png", alt: "ITB" },
    { src: "/logo-companies/tokopedia.png", alt: "Tokopedia" },
    { src: "/logo-companies/mandiri.png", alt: "Mandiri" },
  ];

  return (
    <div className="bg-white py-16 font-poppins">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-blue-800 font-bold text-2xl text-center mb-8">
          Trusted by leading educational institutions and companies
        </h2>
        <div className="w-full max-w-6xl mx-auto mb-8"> {/* Membatasi lebar slider */}
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center py-6" // Set ukuran seragam
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-16 object-contain" // Menjaga proporsi logo
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
