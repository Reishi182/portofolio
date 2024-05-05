export default function SkillBar({ value, icon, label }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="ml-1 mt-2 flex items-center   space-x-2">
        <span className="inline-block">{icon}</span>
        <span>{label}</span>
      </div>
      <div className="tooltip" data-tip={`${value}%`}>
        <progress
          className="tooltip progress progress-accent h-5 w-full border-2  "
          value={value}
          max="100"
        ></progress>
      </div>
    </div>
  );
}
