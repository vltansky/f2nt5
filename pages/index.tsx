import { useState } from "react";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Loader from "@/components/Loader";

export default function Home() {
  const [textValue, setTextValue] = useState("init");
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [customColorName, setCustomColorName] = useState("blue");
  return (
    <div>
      <div className="flex flex-col gap-2 my-2 ml-1">
        <div>
          <code>customColorName</code> = "{customColorName}""
        </div>
        <div>
          <code>textValue</code> = "{textValue}"
        </div>
        <div>
          <code>checkboxValue</code> = "{checkboxValue.toString()}"
        </div>
      </div>
      <div className="flex flex-col gap-5 mb-3 justify-center">
        <Checkbox color={customColorName}>Test</Checkbox>
        <Input
          value={textValue}
          onChange={(val) => setTextValue(val)}
          color={customColorName}
        />
        <div className="flex justify-center gap-2">
          <button className="bg-slate-300 rounded-md p-1.5">
            <span className="bg-yellow-300">TODO: form submit</span>
          </button>
          <Loader />
        </div>
      </div>

      <div className="flex space-x-3 items-center justify-center">
        <button
          onClick={() => setCustomColorName("green")}
          className="bg-slate-300 rounded-md p-1.5"
        >
          set green
        </button>
        <button
          onClick={() => setCustomColorName("blue")}
          className="bg-slate-300 rounded-md p-1.5"
        >
          set blue
        </button>

        <button
          onClick={() => setTextValue("new value")}
          className="bg-slate-300 rounded-md p-1.5"
        >
          set input value
        </button>
        {/* This button should toggle checkbox state */}
        <button className="bg-slate-300 rounded-md p-1.5">
          <span className="bg-yellow-300">TODO: toggle checkbox</span>
        </button>
      </div>
      <ol className="list-decimal pl-5 ml-2 mt-5">
        <li>Clicking on toggle checkbox button should toggle checkbox value</li>
        <li>
          <code>checkboxValue</code> and checkbox state should be two way synced
        </li>
        <li>
          Clicking on 'set input value' button should change input current value
        </li>
        <li>
          <code>textValue</code> and input state should be two way synced
        </li>
        <li>
          Input border bottom in focus state should change to green instead of
          blue when <code>customColorName</code> variable is green (changes on
          'set green' button click)
        </li>
        <li>
          Checkbox and Input should implement <code>value</code> and{" "}
          <code>onChange</code> callbacks
        </li>
        <li>
          Implement react hook form:
          <ul className="list-disc pl-5">
            <li>Add 'submit' button</li>
            <li>
              Validate checkbox. required value: <code>true</code>.
            </li>
            <li>
              Validate Input value. minLength: 4, maxLength: 8, only latin
              letters
            </li>
            <li>Show error messages only after submitting</li>
            <li>Make fake post request to any url</li>
            <li>Show loader before http request and hide it after</li>
          </ul>
        </li>
        <li>Add typing - bonus</li>
      </ol>
      <div className="font-bold mt-2">References:</div>
      <ul className="list-disc pl-5">
        <li>
          <a href="https://tailwindcss.com/">Tailwind CSS Docs</a>
        </li>
        <li>
          <a href="https://react-hook-form.com/">React hook form docs</a>
        </li>
      </ul>
    </div>
  );
}
