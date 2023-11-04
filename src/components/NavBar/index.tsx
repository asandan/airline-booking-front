import { useLogout } from "@/hooks";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const logout = useLogout();
  const [userEmail, setUserEmail] = useState<undefined | string>();
  useEffect(() => {
    setUserEmail(JSON.parse(localStorage.getItem("email") as string));
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="container relative mx-[10vw] flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src={"/logo.png"}
            quality={100}
            width={150}
            height={20}
            className="relative right-40"
            alt="logo"
          />
        </Link>
        <div className="flex items-center space-x-5">
          <span className="text-[#101f3f] cursor-pointer font-semibold">
            {userEmail}
          </span>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className="text-white px-3 py-1 rounded-lg"
            onClick={() => logout()}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
