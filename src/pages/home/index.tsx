import { Hero } from "./hero";
import { TagLine } from "./tagLine";
import { NewsLetter } from "./newsLetter";
import { Testimonial } from "./testimonial";
import { FramerworkChoose } from "./frameworkChoose";
import { WhoUsing } from "./whoUsing";

export default function Home() {
  return (
    <main>
      <div className="gradient top-20 right-[40vw]" />
      <Hero />
      <TagLine />
      <FramerworkChoose />
      <Testimonial />
      <WhoUsing />
      <NewsLetter />
    </main>
  );
}
