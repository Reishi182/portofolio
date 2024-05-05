import Input from "./Input";

export default function Form() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className=" -z-1 card -ml-6 mt-10 flex h-auto items-center justify-center bg-base-200 px-6 py-6"
    >
      <Input label="Your Email" />
      <Input label="Subject" />

      <label className="form-control ">
        <div className="label">
          <span className="label-text">Message</span>
        </div>
        <textarea
          type="text"
          placeholder="Type here"
          className="md:w-98 input input-bordered w-72 max-w-xs"
        />
      </label>

      <button className="mt-6 rounded-xl bg-blue-700 px-2 py-2 text-white">
        Submit
      </button>
    </form>
  );
}
