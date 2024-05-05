/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

function Input({ label }) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-96 max-w-xs"
      />
    </label>
  );
}
export default Input;
