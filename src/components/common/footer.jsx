import { Container } from "./container";

export const Footer = () => {
  return (
    <Container className="flex justify-baseline gap-[100px]">
      <div className="">
        <h1 className="text-[18px] font-bold mb-[15px] text-white">Links</h1>
          <div className="flex gap-[150px]">
            <div className="flex flex-col gap-[5px]">
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                Movies
              </a>
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                TV Series
              </a>
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                Short Films
              </a>
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                Most Watched
              </a>
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                Top IMdb
              </a>
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                F2 Movies
              </a>
            </div>
            <div className="flex flex-col gap-[5px]">
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                Action
              </a>
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                Horror
              </a>
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                Sci - Fi
              </a>
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                K Drama
              </a>
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                Romantic
              </a>
            </div>
            <div className="flex flex-col gap-[5px]">
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                Contact
              </a>
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                Request
              </a>
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                Mail
              </a>
              <a className="text-[#B7B7B7] font-bold hover:text-white" href="#">
                {" "}
                Sitemap
              </a>
            </div>
          </div>
      </div>
      <div className="">
        <h1 className="text-[18px] font-bold mb-[15px] text-white">About Us</h1>
        <div className="flex flex-col gap-[20px]">
          <p className="text-white">
            <span className="text-[#b01227] text-[18px]">Movietrex</span> is
            free streaming website with zero ads, it allows you watch series
            online free, <br /> watch tv shows online in high quality for free.
          </p>
          <p className="text-white">
            This site does not store any files on our server, we only linked to
            the media which is hosted on <br /> 3rd party services.
          </p>
        </div>
      </div>
    </Container>
  );
};
