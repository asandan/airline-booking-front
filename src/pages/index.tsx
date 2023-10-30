import { SEOHead } from "@/components/SEOHead";
import { withSession } from "@/util";
import { Button } from "@mui/material";

export default function MainPage() {
  return (
    <>
      <SEOHead title={"Home"} />
      <header className="bg-[#101f3f] text-white p-10">
        <div className="flex justify-center items-center flex-col space-y-5">
          <h1 className="text-4xl font-bold">Airfare search</h1>
          <Button
            variant="contained"
            className="py-2 px-4 rounded-lg"
            sx={{ bgColor: "black" }}
          >
            Airline tickets
          </Button>
        </div>
      </header>
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
