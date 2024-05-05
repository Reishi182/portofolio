/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

function Input({ label }) {
  return (
    <label className="form-control ">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="md:w-98 input input-bordered w-72 max-w-xs"
      />
    </label>
  );
}
export default Input;
