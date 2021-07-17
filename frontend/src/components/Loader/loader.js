import Loader from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <Loader
      type="TailSpin"
      color="#ff5a5f"
      height={70}
      width={70}
      className="flex justify-center mt-12"
    />
  );
}
