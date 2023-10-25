import { CredentialsFooterProps } from "@/util/types";
import Link from "next/link";
import { FC } from "react";



export const CredentialsFooter: FC<CredentialsFooterProps> = ({
  isLoginPage,
}) => {
  return (
    <>
      {isLoginPage ? (
        <div className="text-center mt-2">
          <span className="text-gray-600 text-sm">
            Don{"'"}t have an account?{" "}
          </span>
          <Link href="/sign-up">
            <h5 className="text-blue-500 text-sm">Sign Up</h5>
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <span className="text-gray-600 text-sm">
            Already have an account?{" "}
          </span>
          <Link href="/login" className="text-blue-500 text-sm">
            Log In
          </Link>
        </div>
      )}
    </>
  );
};
