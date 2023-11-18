import { SEOHead } from "@/components/SEOHead";
import Select from "@/components/Select";
import { getCityFromOptions, withSession } from "@/util";
import { Button, LinearProgress, MenuItem, TextField } from "@mui/material";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useLocations } from "@/hooks";
import { useFormik } from "formik";
import MUISelect, { SelectChangeEvent } from "@mui/material/Select";
import { useSnackbar } from "notistack";
import { book } from "@/mutations";
import { useSession } from "next-auth/react";

export type Option = {
  key: string;
  value: string;
};

export type QueryValues = {
  countryFrom: string;
  countryTo: string;
  cityFrom: string;
  cityTo: string;
};

export const DEFAULT_QUERY_VALUES: QueryValues = {
  countryFrom: "",
  countryTo: "",
  cityFrom: "",
  cityTo: "",
};

export default function MainPage() {
  const { data } = useSession();
  console.log(data);
  const [foundTicket, setFoundTicket] = useState();
  const [quantity, setQuantity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const { values, handleChange, isSubmitting, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: DEFAULT_QUERY_VALUES,
      onSubmit: async (values, { resetForm }) => {
        try {
          setIsLoading(true);
          const data = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/ticket/getByDestination`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                destinationFrom: values.cityFrom,
                destinationTo: values.cityTo,
              }),
            }
          );
          if (data.ok) {
            const result = await data.json();
            setIsLoading(false);
            setFoundTicket(result);
          }
        } catch (error) {
          console.log(error);
        }
      },
    });

  const handleChangeQuantity = (event: any) => {
    setQuantity(event.target.value);
  };

  const { countryFrom, countryTo, cityFrom, cityTo } = useLocations({
    cityFrom: values.cityFrom,
    cityTo: values.cityTo,
    countryFrom: values.countryFrom,
    countryTo: values.countryTo,
  });

  return (
    <>
      <SEOHead title={"Home"} />
      <main className="bg-[#f8f7ff] h-full text-black p-10">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold">Find ticket</h1>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center flex-col"
          >
            <div className="flex items-center space-x-20 mt-3">
              <Select
                onChange={(value) => setFieldValue("countryFrom", value.value)}
                selectedOption={values.countryFrom ? values.countryFrom : ""}
                label={"Country from"}
                options={countryFrom}
              />
              <Select
                onChange={(value) => setFieldValue("countryTo", value.value)}
                selectedOption={values.countryTo ? values.countryTo : ""}
                label={"Country to"}
                options={countryTo}
              />
            </div>
            <div className="flex items-center space-x-20 mt-3">
              {cityFrom && cityFrom?.length > 0 && (
                <Select
                  onChange={(value) => setFieldValue("cityFrom", value.value)}
                  selectedOption={values.cityFrom ? values.cityFrom : ""}
                  label={"City from"}
                  options={cityFrom}
                />
              )}
              {cityTo && cityTo.length > 0 && (
                <Select
                  onChange={(value) => setFieldValue("cityTo", value.value)}
                  selectedOption={values.cityTo ? values.cityTo : ""}
                  label={"City to"}
                  options={cityTo}
                />
              )}
            </div>
            {!foundTicket && isLoading && <LinearProgress />}
            {foundTicket && !isLoading && (
              <>
                <p className="font-bold text-xl mt-3">Found tickets:</p>
                <div className="bg-[#101f3f] w-[500px] p-5 rounded-md mt-3 text-white space-y-2">
                  <div className="flex flex-row">
                    <span className="font-bold">FROM:</span>{" "}
                    <p className="font-semibold ml-2">
                      {getCityFromOptions(
                        values.cityFrom,
                        cityFrom as Option[]
                      )}
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <span className="font-bold">TO:</span>{" "}
                    <p className="font-semibold ml-2">
                      {getCityFromOptions(values.cityTo, cityTo as Option[])}
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <span className="font-bold">PRICE:</span>{" "}
                    <p className="font-semibold ml-2">
                      {(foundTicket as any)?.price}
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <span className="font-bold">LEFT:</span>{" "}
                    <p className="font-semibold ml-2">
                      {(foundTicket as any)?.quantity}
                    </p>
                  </div>
                </div>
              </>
            )}
            {foundTicket && !isLoading && (
              <TextField
                label="Quantity"
                value={quantity}
                className="bg-white mt-5 mb-3"
                onChange={handleChangeQuantity}
              />
            )}
            <div className="flex flex-row space-x-5">
              <Button variant="contained" className="mt-3" type="submit">
                Find tickets
              </Button>
              {foundTicket && !isLoading && (
                <Button
                  variant="outlined"
                  className="mt-3"
                  onClick={() =>
                    book(
                      (foundTicket as any).id,
                      +quantity,
                      (data as any)?.user?.id,
                      enqueueSnackbar
                    )
                  }
                >
                  Book ticket
                </Button>
              )}
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
