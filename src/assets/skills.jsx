import React from "react";
import "../App.css";

const cards = [
  {
    title: "Ux/Ul Design",
    img: "../assets/images/icon-figma.png",
    text: "doloremque distinctio porro. Alias veniam cupiditate aliquam tempore, libero culpa laudantium.",
    id: 1,
  },
  {
    title: "Javascript and React",
    img: "../assets/images/icon-js.png",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut accusamus assumenda. Incidunt placeat",
    id: 2,
  },
  {
    title: "Ai Tooling",
    img: "../assets/images/ai.png",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut accusamus assumenda. Incidunt placeat",
    id: 3,
  },
  {
    title: "CSS and Tailwind",
    img: "../assets/images/tailwind.png",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut accusamus assumenda. Incidunt placeat",
    id: 4,
  },
  {
    title: "Blockchain",
    img: "../assets/images/blockchain.png",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut accusamus assumenda. Incidunt placeat",
    id: 5,
  },
];

function Skills() {
  return (
    <div className="">
      <div className="bg-gradient-divider h-0.5"></div>
      <section
        id="about"
        className="flex flex-col md:flex-row justify-center xl:p-[10vw] pt-16  place-items-center bg-gradient-introSection "
      >
        <div className=" ml-8 sticky-class  mb-auto ">
          <div className="flex flex-col gap-8 w-2/3">
            <div>
              <h2 className="text-3xl ">ABOUT ME</h2>
            </div>
            <div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                natus, eligendi rerum atque quasi distinctio placeat deleniti
                iusto unde in expedita consectetur pariatur est, temporibus
                vitae rem tempore fugit voluptate perferendis libero. Nam
                exercitationem dicta quod eum nostrum ullam ad.
              </p>
            </div>
            <fieldset className="space-y-1 sm:w-60 text-gray-100">
              <div className="">
                <div className="border-b mb-4 text-center">
                  <h2 className="text-2xl ">Techical sills</h2>
                </div>
                <p className="">UX Design</p>
                <div
                  className="h-2 rounded-full my-2"
                  style={{
                    background:
                      "linear-gradient(to right, #5eeb5b 50%, grey 65%)",
                  }}
                ></div>
                <p className="mt-4">HTML</p>
                <div
                  className="h-2 rounded-full my-2"
                  style={{
                    background:
                      "linear-gradient(to right,  #5eeb5b 75%, grey 90%)",
                  }}
                ></div>
                <p className="mt-4">CSS</p>
                <div
                  className="h-2 rounded-full my-2"
                  style={{
                    background:
                      "linear-gradient(to right,  #5eeb5b 75%, grey 90%)",
                  }}
                ></div>
                <p className="mt-4">Vanilla JS</p>
                <div
                  className="h-2 rounded-full my-2"
                  style={{
                    background:
                      "linear-gradient(to right,  #5eeb5b 50%, grey 60%)",
                  }}
                ></div>
                <p className="mt-4 ">React</p>
                <div
                  className="h-2 rounded-full my-2 skillbar-class"
                  style={{
                    background:
                      "linear-gradient(to right, #5eeb5b 30%, grey 40%)",
                  }}
                ></div>

                {/* <div aria-hidden="true" className="flex justify-between px-1">
                  <span>I</span>
                  <span>II</span>
                  <span>III</span>
                  <span>IV</span>
                  <span>V</span>
                </div> */}
              </div>
            </fieldset>
          </div>
        </div>
        <div className="flex flex-col ">
          {cards.map((card) => {
            return <Card {...card} key={card.id} />;
          })}
        </div>
      </section>
    </div>
  );
}

function Card(props) {
  const { img, title, text, id } = props;

  return (
    <>
      <div className="w-1/2 max-w-xl min-w-[35vw] mr-8 flex bg-background-main bg-opacity-20 flex-col p-8">
        <div className="flex">
          <img className="w-24 mr-auto" src={img} alt={title} />{" "}
          <div className="ml-auto text-outline"> {id} </div>
        </div>
        <div>
          <h2 className="text-3xl"> {title} </h2>
        </div>
        <div>{text}</div>
      </div>
      <div className="bg-gradient-divider h-0.5 max-w-xl min-w-[35vw]"></div>
    </>
  );
}

export default Skills;
