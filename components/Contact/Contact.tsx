import Socials from "@/components/Socials";

export const Contact = () => (
  <div className="mt-10 laptop:w-3/5">
    <h2 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold text-primary">
      LET&apos;S WORK
    </h2>
    <h2 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold text-secondary">
      TOGETHER
    </h2>

    <p className="mt-6 opacity-80">
      I am open to both contract and freelance developer projects and would love to hear what your
      ideas are.
    </p>
    <p className="mt-4 mb-6 opacity-80">
      Feel free to drop me an email and I&apos;ll let you know how I can help you!
    </p>

    <a
      href="mailto:mail@benstokoe.co.uk"
      className="mb-6 text-3xl tablet:text-5xl text-bold hover:text-accent"
    >
      mail@benstokoe.co.uk
    </a>

    <div className="mt-10">
      <Socials />
    </div>
  </div>
);
