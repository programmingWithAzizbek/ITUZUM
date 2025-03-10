import { useEffect, useState } from "react";

const Carousel = () => {
  const slides = [
    "https://images.uzum.uz/cv3eg7ei4n36ls3t0770/main_page_banner.jpg",
    "https://images.uzum.uz/cug7q9tht56sc95cis1g/main_page_banner.jpg",
    "https://images.uzum.uz/cv4o265pb7f9qcng1frg/main_page_banner.jpg",
    "https://images.uzum.uz/cuuoplei4n36ls3rla6g/main_page_banner.jpg",
    "https://images.uzum.uz/cuuljv3vgbkm5ehgnhcg/main_page_banner.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full rounded-xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            index === current ? "block" : "hidden"
          }`}
        >
          <img src={slide} className="w-full" alt={`Slide ${index + 1}`} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
              }
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
