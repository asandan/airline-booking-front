import { useLogout } from "@/hooks";
import { Button } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const logout = useLogout();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" passHref>
          <h3 className="text-black font-bold text-xl no-underline">
            Sky Travel
          </h3>
        </Link>
        <div className="flex items-center">
          <Button
            variant="contained"
            className="bg-blue-500 text-white px-3 py-1 rounded-lg"
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
