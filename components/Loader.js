import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader color="#2563eb" size={50} />
    </div>
  );
};

export default Loader;
