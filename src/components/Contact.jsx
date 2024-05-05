import Form from "./Form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-auto bg-gradient-to-b from-[#003daf] to-[#00215E]"
    >
      <div className="container mx-auto flex flex-col items-center  space-x-6 px-9 py-10 md:flex-row">
        <div className="px-2 py-2">
          <h1 className="space-y-8 text-justify text-white">
            <span className="block text-3xl">Contact Me</span>
            <span className="block text-lg">
              If you're interested in collaborating, have any inquiries, or just
              want to chat, I'd love to hear from you! Feel free to reach out to
              me via the form below or directly through email at {` `}
              <span className="inline-block font-semibold">
                garytan231@gmail.com
              </span>
              {` `} I'll do my best to respond as promptly as possible. Thank
              you for your interest and for taking the time to visit my
              portfolio!"
            </span>
          </h1>
        </div>
        <div className="">
          <Form />
        </div>
      </div>
    </section>
  );
}
