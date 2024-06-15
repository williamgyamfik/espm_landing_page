import Image from "next/image";
import talent6 from "../public/images/talent6.jpeg";
import talent2 from "../public/images/talent2.jpeg";
import talent4 from "../public/images/talent4.jpeg";
import talent1 from "../public/images/talent1.jpeg";

const Blog = () => {
  return (
    <div className="container mx-auto p-10 m-10">
      <h1 className="font-bold text-4xl">Player profile</h1>
      <div className="border-b-2 border-b-blue-900"></div>

      <h2 className="mt-5">
        Spotlight on
        <span className="text-bold text-black"> our top talent </span>
      </h2>

      <div className="flex justify-start items-start lg:flex-nowrap flex-wrap">
        <div className="mx-auto  p-10">
          <Image src={talent6} alt="player bio" />
        </div>
        <div className="m-5 sm:m-20  leading-relaxed">
          <p className="mb-5">
            A young footballer stole the hearts of many with his skill,
            determination, and beautiful talent. His name?{" "}
            <span className="text-black">Prince Amoako</span>, a rising star
            from FC Nordsjælland U17.
          </p>
          <p className="mb-5">
            Prince Amoako started his football journey at a remarkably young
            age, starting out with FC Siano where his raw talent immediately
            caught the attention of scouts. Recognized for his potential, he was
            scouted and enrolled into the prestigious Right to Dream Academy at
            the age of 12. This marked an important moment in his development,
            as he received top-tier training and education, preparing him for a
            future in European football.
          </p>

          <p className="mb-5">
            Under the guidance of Right to Dream, Prince flourished. The academy
            not only polished his technical abilities but also instilled in him
            the values of discipline, teamwork, and perseverance. These
            qualities would later prove instrumental as he embarked on the next
            chapter of his career as the academy's rigorous training and
            holistic approach helped shape Prince into not just a better player,
            but a well-rounded individual.
          </p>
        </div>
      </div>

      <div className="flex justify-start items-start  lg:flex-nowrap   flex-wrap-reverse">
        <div className="m-5 sm:m-20 leading-relaxed">
          <p className="mb-5">
            After graduating, Prince made the leap to Denmark, joining FC
            Nordsjælland's esteemed academy. This move showed his readiness to
            compete at a higher level, testing his skills against some of
            Europe's finest young talents.{" "}
          </p>
          <p className="mb-5">
            One such stage was the Ajax Future Cup 2024, held at De Toekomst
            sports complex in Amsterdam, Netherlands. This prestigious youth
            tournament attracts top teams from around the world, including
            powerhouse clubs like Ajax and PSG.{" "}
          </p>
          <p className="mb-5">
            Prince Amoako's performances during the tournament were nothing
            short of spectacular, thus highlighting his technical prowess,
            athleticism, and tactical acumen. As a key player for FC
            Nordsjælland U17 during the Ajax Future Cup, Prince demonstrated his
            ability to thrive under pressure and compete at a high level against
            international competition.{" "}
          </p>
        </div>
        <div className="mx-auto  p-10">
          <Image src={talent2} alt="player bio second picture" />
        </div>
      </div>

      <div className="flex justify-start items-start  lg:flex-nowrap flex-wrap">
        <div className="mx-auto  p-10">
          <Image src={talent1} alt="player bio image" />
        </div>
        <div className="m-5 sm:m-20 leading-relaxed">
          <p className="mb-5">
            His contributions on the field were instrumental in FC
            Nordsjælland's success, drawing praise from coaches, scouts, and
            fans alike. As of now, Prince Amoako is on the brink of breaking
            into the first team at FC Nordsjælland. His journey from playing for
            FC Siano to nearing professional football in Denmark is a testament
            to his hard work, determination, and undeniable talent. Prince's
            story is one of perseverance and ambition, with each step bringing
            him closer to his ultimate goal.
          </p>
          <p className="mb-5 ">
            As Prince Amoako continues to chase his dreams on the football
            pitch, one thing is clear: his story is just beginning. With each
            match, each goal, and each challenge overcome, he solidifies his
            place among football's brightest prospects.{" "}
          </p>
          <p className="mb-5">
            The world watches with anticipation as this young star from FC
            Nordsjælland U17 continues to print his name into the annals of
            football history—a name that will forever be associated with talent,
            dedication, and the pursuit of greatness. Prince Amoako is ‘’D’’
            name to remember.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
