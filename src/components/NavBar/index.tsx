import { useLogout } from "@/hooks";
import { Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const logout = useLogout();
  const [userEmail, setUserEmail] = useState<undefined | string>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setUserEmail(JSON.parse(localStorage.getItem("email") as string));
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src={"/logo.png"}
            quality={100}
            width={150}
            height={20}
            className="cursor-pointer"
            alt="logo"
          />
        </Link>
        <div className="flex items-center space-x-5">
          <span
            className="text-[#101f3f] cursor-pointer font-semibold"
            onClick={handleClick}
          >
            {userEmail}
          </span>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/my-tickets">My tickets</Link>
            </MenuItem>
          </Menu>
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
