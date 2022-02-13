import clsx from "clsx";

export default function Checkbox(props) {
  const { checked, onChange, children, color = "blue", ripple = true } = props;

  return (
    <>
      <label className="inline-flex items-center mx-auto w-64">
        <div
          className={clsx(
            "inline-flex relative justify-center items-center cursor-pointer group",
            "md:text-red-500"
          )}
        >
          <input
            id="test"
            type="checkbox"
            className="peer sr-only"
            color={color}
          />
          <div
            className={clsx(
              "h-6 w-6 bg-gray-100 border-gray-500 border-3 rounded",
              {
                "peer-checked:bg-blue-500 peer-checked:border-blue-500":
                  color === "blue",
                "peer-checked:bg-green-500 peer-checked:border-green-500":
                  color === "green",
              }
            )}
          ></div>
          <div
            className={clsx(
              "absolute scale-0 transition-transform origin-center shadow-stone-700  pb-1 left-0 w-6 h-6 flex justify-center items-center",
              "hover:ease-in peer-checked:scale-110"
            )}
          >
            <div className="w-2 h-4 rotate-45 border-b-2 border-r-2 border-white"></div>
          </div>
          <div className="ml-3"></div>
          <div
            className={clsx(
              "absolute left-[-8px] scale-0",
              "group-hover:scale-125 group-hover:-z-20"
            )}
          >
            <div className="left-2 rounded-full h-10 w-10 bg-blue-50"></div>
          </div>
          <div
            className={clsx("absolute left-0 scale-0 ", {
              "group-active:scale-100 group-active:-z-20 ": ripple,
            })}
          >
            <div className="animate-ping-slow h-6 w-6 rounded-full bg-gray-300 opacity-100 "></div>
          </div>
        </div>
        {children}
      </label>
    </>
  );
}
