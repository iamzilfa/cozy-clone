export default function Button({ children = "hf", primary, className }) {
  return (
    <div>
      <button
        className={`${
          primary
            ? "py-[1.875rem] uppercase px-10 tracking-widest flex text-center font-bold text-xl font-geomanistBold bgk text-sandash rounded-[0.625rem] items-center bg-fieryOrange"
            : "bg-black"
        } ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
