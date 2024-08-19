import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { characterInfo, valuesDropdown } from '../utils/constants';

const Topbar = () => {
  const { image, armor, classes, hitPoints, name, race } = characterInfo;
  const navigate = useNavigate();
  const location = useLocation();

  const listCLasses = classes.map((characterClass) => (
    <div
      className="flex gap-1"
      key={characterClass.level + characterClass.name}
    >
      <p>{characterClass.name}</p>
      <p>{characterClass.level}</p>
    </div>
  ));
  const optionDropwdown = valuesDropdown.map((path) => (
    <option key={path.value} value={path.value}>
      {path.label}
    </option>
  ));

  const changeRoute = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target?.value) {
      navigate(e.target.value);
    }
  };
  return (
    <div className="container px-5 my-4 mx-auto">
      <div className="flex justify-between items-center w-full text-sm">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold">{name}</p>
          <div className="flex items-center gap-2 text-gray-300">
            <p>{race}</p>
            <span>|</span>
            <div className="flex flex-col justify-center items-center gap-2">
              {listCLasses}
            </div>
          </div>
        </div>
        <img
          className="object-cover w-12 rounded-lg"
          alt={image.name}
          src={image.link}
        />
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-1 ">
          <p className="text-gray-300">Armatura</p>
          <p className="font-bold">{armor}</p>
        </div>
        <div className="flex flex-col items-center justify-center  border border-gray-300 rounded-lg p-1">
          <p className="text-gray-300">Punti vita</p>
          <p className="font-bold">
            {hitPoints.total} / {hitPoints.remain}
          </p>
        </div>
      </div>
      <hr className="text-gray-400 mt-4" />
      <div className="flex justify-center my-4">
        <div className="relative inline-block w-64">
          <select
            aria-label="Select a information you want to see"
            name="information character"
            onChange={changeRoute}
            value={location.pathname}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
          >
            {optionDropwdown}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-4-4h8l-4 4z" />
            </svg>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Topbar;
