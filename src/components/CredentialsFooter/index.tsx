import { CredentialsFooterProps } from "@/util/types";
import Link from "next/link";
import { FC } from "react";

export const CredentialsFooter: FC<CredentialsFooterProps> = ({
  isLoginPage,
}) => {
  return (
    <>
      {isLoginPage ? (
        <section className="text-center mt-2">
          <span className="text-gray-600 text-sm">
            Don{"'"}t have an account?{" "}
          </span>
          <Link href="/auth/sign-up">
            <h5 className="text-blue-500 text-sm">Sign Up</h5>
          </Link>
        </section>
      ) : (
        <section className="text-center mt-2">
          <span className="text-gray-600 text-sm">
            Already have an account?{" "}
          </span>
          <Link href="/auth/login" className="text-blue-500 text-sm">
            Log In
          </Link>
        </section>
      )}
    </>
  );
};
