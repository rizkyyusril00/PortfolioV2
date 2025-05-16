import CV from "../../../assets/CV2.pdf";
import LogoMangcoding from "../../img/logo-mangcoding.png";
import LogoLikearth from "../../img/logo-likearth.png";
import LogoTailwind from "../../img/tailwind-logo.svg";
import LogoFigma from "../../img/figma.svg";
import LogoVite from "/vite.svg";
import LogoNextJs from "../../img/nextJs.png";

export default function HomeBox2() {
  const skills = [
    {
      id: 1,
      logo: "fa-brands fa-html5 text-[16px] lg:text-[20px] xl:text-[24px] text-[#E44D26]",
      nama: "HTML",
    },
    {
      id: 2,
      logo: "fa-brands fa-css3-alt text-[16px] lg:text-[20px] xl:text-[24px] text-[#4169E1]",
      nama: "CSS",
    },
    {
      id: 3,
      logo: "fa-brands fa-js text-[16px] lg:text-[20px] xl:text-[24px] text-[#F0DB4F]",
      nama: "Java Script",
    },
    {
      id: 4,
      logo: "fa-brands fa-react text-[16px] lg:text-[20px] xl:text-[24px] text-[#00d8ff]",
      nama: "React JS",
    },
    {
      id: 5,
      logo: "fa-brands fa-laravel text-[16px] lg:text-[20px] xl:text-[24px] text-[#cc3534]",
      nama: "Laravel",
    },
    {
      id: 6,
      logo: "fa-brands fa-bootstrap text-[16px] lg:text-[20px] xl:text-[24px] text-[#563d7c]",
      nama: "Bootstrap",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4 slg:gap-6 py-4 border-y border-dashed border-primary px-2 md:px-0">
        {/* Journey */}
        <div className="flex justify-between">
          {/* box kiri */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <i className="bi bi-suitcase-lg text-[20px] slg:text-[24px] lg:text-[28px] text-primary"></i>
              <h2 className="text-[20px] slg:text-[24px] lg:text-[28px] xl:text-[32px] text-primary">
                My Career
              </h2>
            </div>
            <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] text-primary">
              My Profesional  Journey :
            </h2>
          </div>
          {/* box kanan */}
          <div className="flex items-center justify-center">
            <button className="cvBtn px-1 py-1 lg:py-2">
              <a
                href={CV}
                aria-label="my-cv"
                download={CV}
                className="IconContainer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-download icon w-[16px] h-[16px] xl:w-[20px] xl:h-[20px]"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path
                    className="animate-bounce "
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
                  />
                </svg>
              </a>
              <a href={CV} download={CV} className="text">
                My CV
              </a>
            </button>
          </div>
        </div>
        {/* card experience */}
        <div className="flex gap-2">
          {/* mangkoding */}
          <div className="bg-transparent border border-primary rounded-md p-4 w-full md:w-[50%] flex flex-col gap-4 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out h-full">
            <figure className="w-full">
              <img
                src={LogoMangcoding}
                alt="logo_mangcoding"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <span className="text-primary text-[12px] slg:text-[12px] lg:text-[16px] xl:text-[20px] leading-tight group-hover:text-bg">
                  PT. Anugrah Kreasi Digital
                </span>
                <i className="bi bi-dot text-primary text-[12px] slg:text-[10px] lg:text-[14px] leading-tight group-hover:text-bg"></i>
                <p className="text-primary text-[12px] slg:text-[12px] lg:text-[16px] xl:text-[20px] leading-tight group-hover:text-bg">
                  Sukabumi
                </p>
              </div>
              <div className="flex items-center gap-1">
                <h2 className="text-primary text-[12px] slg:text-[10px] lg:text-[12px] xl:text-[18px] leading-tight group-hover:text-bg">
                  Frontend Developer
                </h2>
                <i className="bi bi-dot text-primary text-[12px] slg:text-[10px] lg:text-[14px] xl:text-[18px] leading-tight group-hover:text-bg"></i>
                <p className="text-primary text-[12px] slg:text-[10px] lg:text-[12px] xl:text-[18px] leading-tight group-hover:text-bg">
                  February 2023 ~ June 2024
                </p>
              </div>
            </div>
          </div>
          {/* likearth */}
          <div className="bg-transparent border border-primary rounded-md p-4 w-full md:w-[50%] flex flex-col gap-4 group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out h-full">
            <figure className="w-full">
              <img
                src={LogoLikearth}
                alt="logo_mangcoding"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <span className="text-primary text-[12px] slg:text-[12px] lg:text-[16px] xl:text-[20px] leading-tight group-hover:text-bg">
                  Likearth Studio
                </span>
                <i className="bi bi-dot text-primary text-[12px] slg:text-[10px] lg:text-[14px] leading-tight group-hover:text-bg"></i>
                <p className="text-primary text-[12px] slg:text-[12px] lg:text-[16px] xl:text-[20px] leading-tight group-hover:text-bg">
                  Sukabumi
                </p>
              </div>
              <div className="flex items-center gap-1">
                <h2 className="text-primary text-[12px] slg:text-[10px] lg:text-[12px] xl:text-[18px] leading-tight group-hover:text-bg">
                  Frontend Developer
                </h2>
                <i className="bi bi-dot text-primary text-[12px] slg:text-[10px] lg:text-[14px] xl:text-[18px] leading-tight group-hover:text-bg"></i>
                <p className="text-primary text-[12px] slg:text-[10px] lg:text-[12px] xl:text-[18px] leading-tight group-hover:text-bg">
                  September 2024 ~ January 2025
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <i className="bi bi-wrench-adjustable-circle text-[20px] slg:text-[24px] lg:text-[28px] xl:text-[32px] text-primary"></i>
            <h2 className="text-[20px] slg:text-[24px] lg:text-[28px] xl:text-[32px] text-primary">
              My Services
            </h2>
          </div>
        </div>
        {/* card services */}
        <div className="flex gap-2">
          <div className="flex flex-col gap-4 border border-primary rounded-md p-4 w-[50%] group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out">
            <div className="flex items-center gap-4">
              <i className="bi bi-pc-display-horizontal text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg"></i>
              <h2 className="text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">
                Develope Website or UI/UX
              </h2>
            </div>
            <p className="text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">
              I offer you i can develope or design  an responsive and attractive website or mobile app to
              fulfill your needs
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-primary rounded-md p-4 w-[50%] group hover:bg-primary hover:border-bg transition-all duration-500 ease-in-out">
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-users-line text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg"></i>
              <h2 className="text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">
                Collaboration
              </h2>
            </div>
            <p className="text-[12px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">
              Im very open to collaborating to create a really cool website
            </p>
          </div>
        </div>
        {/* Skills */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <i className="bi bi-code-slash text-[20px] slg:text-[24px] lg:text-[28px] xl:text-[32px] text-primary"></i>
            <h2 className="text-[20px] slg:text-[24px] lg:text-[28px] xl:text-[32px] text-primary">
              My Skills
            </h2>
          </div>
        </div>
        {/* list skills */}
        <div className="flex flex-wrap items-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-2 cursor-pointer border border-primary rounded-xl p-2 group hover:bg-primary hover:border-bg"
            >
              <i className={skill.logo}></i>
              <h2 className="text-[14px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">
                {skill.nama}
              </h2>
            </div>
          ))}
          <div className="flex items-center gap-2 cursor-pointer border border-primary rounded-xl p-2 group hover:bg-primary hover:border-bg">
            <figure className="w-4 h-4 lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]">
              <img
                src={LogoNextJs}
                alt=""
                className="w-full h-full object-fit"
              />
            </figure>
            <h2 className="text-[14px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">
              Next Js
            </h2>
          </div>
          <div className="flex items-center gap-2 cursor-pointer border border-primary rounded-xl p-2 group hover:bg-primary hover:border-bg">
            <figure className="w-4 h-4 lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]">
              <img
                src={LogoTailwind}
                alt=""
                className="w-full h-full object-fit"
              />
            </figure>
            <h2 className="text-[14px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">
              Tailwind
            </h2>
          </div>
          <div className="flex items-center gap-2 cursor-pointer border border-primary rounded-xl p-2 group hover:bg-primary hover:border-bg">
            <figure className="w-4 h-4 lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]">
              <img src={LogoVite} alt="" className="w-full h-full object-fit" />
            </figure>
            <h2 className="text-[14px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">
              Vite
            </h2>
          </div>
          <div className="flex items-center gap-2 cursor-pointer border border-primary rounded-xl p-2 group hover:bg-primary hover:border-bg">
            <figure className="w-4 h-4 lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]">
              <img src={LogoFigma} alt="" className="w-full h-full object-fit" />
            </figure>
            <h2 className="text-[14px] slg:text-[16px] lg:text-[20px] xl:text-[24px] text-primary group-hover:text-bg">
              Figma
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
