
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebook, FaEyeSlash, FaEye } from "react-icons/fa";
function SocialLogin() {
  const route = useRouter();

  // const handleSocialLogin = (provider) => {
  //   const res = signIn(provider, { redirect: false });
  // };
  // if (section.status === "authenticated") {
  //   route.push("/");
  // }
  return (
    <div>
      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
         
          className="text-orange-600 hover:text-blue-500"
        >
          <FaGoogle size={30} />
        </button>
        <button
          className="text-blue-600 hover:text-blue-600"
        >
          <FaFacebook size={30} />
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
