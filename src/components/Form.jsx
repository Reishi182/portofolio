import Input from "./Input";

export default function Form() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className=" card bg-base-200 -z-1 mt-10 flex h-auto w-full items-center justify-center px-6 py-6"
    >
      <Input label="Your Email" />
      <Input label="Subject" />

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Message</span>
        </div>
        <textarea
          type="text"
          placeholder="Type here"
          className="input input-bordered w-96 max-w-xs"
        />
      </label>

      <button className="mt-2 rounded-xl bg-blue-700 px-2 py-2 text-white">
        Submit
      </button>
    </form>
  );
}
