import Category from "@/components/Category";

export default function Ab() {
  return (
    <div className="container center column pad-96-80 gap-48 gray-bg">
      <div className="category center">
        About me
      </div>
      <div className="ab">
        <div className="ab--left-side">
          <img className="ab-img" src="https://s3-alpha-sig.figma.com/img/8781/bda6/7a25952db5724f48492cd455a6e81952?Expires=1701648000&Signature=fs5aPu4CV-9p9l3svTQeCZniGyI27KYBunuKDT8BfUnqALTLbvOH8yrhk1vmkXqtis3YbgRARf8~PSlPCYfvvJdT~MRD-f4CxLoL7i9v4vIOZQoJpn4WBu9YFbqiX~STqDPBzNS7m7fYl-zKj3cMVJvkceHLPUJu6VOXqHgnQF3rfsi0oHSFFZWYZoGIQQgU4zlJTMCRrccDkH3NTQIjFU39bW3g5WVS-3o4cT9SlXUwcVo2wqvA10um5dnxiVxcc-Ntr2QzJKoCKXGVnCmsc~mnIaOj49IeWTohJP-HVaSLwJFnUstxvgPwcVMkODOmgwKfDs0agiH0aacVjM5~iQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <div className="ab-bg"></div>
        </div>
        <div className="ab--right-side">
          <p className="left-side--header">
            Curious about me? Here you have it:
          </p>
          <p className="font-16-gray">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="font-16-gray">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="font-16-gray">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="font-16-gray">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="font-16-gray">Finally, some quick bits about me.</p>
          <div className="flex gap-30">
            <ul>
              <li className="font-16-gray">B.E. in Computer Engineering</li>
              <li className="font-16-gray">Flil time freelancer</li>
            </ul>
            <ul>
              <li className="font-16-gray">Avid learner</li>
              <li className="font-16-gray">Aspiring indie hacker</li>
            </ul>
          </div>

          <p className="font-16-gray">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
}
