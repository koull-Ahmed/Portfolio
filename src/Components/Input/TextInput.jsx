const TextInput = ({ isDarkMode, value, handleInputChange, textarea, label }) => {
  const InputComponent = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <InputComponent
        type={textarea ? undefined : "text"}
        rows={textarea ? 4 : undefined}
        className={`w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none ${
          textarea ? "resize-none" : ""
        } ${
          isDarkMode
            ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500"
            : "bg-white/80 border-gray-300 text-gray-900 focus:border-blue-500"
        }`}
        value={value}
        onChange={({ target }) => handleInputChange(target.value)}
      />
      <label className="text-sm absolute left-4 top-2 pointer-events-none origin-left text-gray-400">
        {label}
      </label>
    </div>
  );
};

export default TextInput;