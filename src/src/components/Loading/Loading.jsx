import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Circles
          height="80"
          width="80"
          color="#e11d48"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperclassName=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Loading;
