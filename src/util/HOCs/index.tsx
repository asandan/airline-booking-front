import { FC, PropsWithChildren, useMemo } from "react";
import {
  MutationCache,
  QueryCache,
  QueryClientProvider,
  QueryClient as _QueryClient,
} from "@tanstack/react-query";
import { useSnackbar } from "notistack";

export const QueryClient: FC<PropsWithChildren> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const queryClient = useMemo(
    () =>
      new _QueryClient({
        queryCache: new QueryCache({
          onSuccess: ({ error, statusCode }: any) => {
            if (statusCode >= 200 && statusCode < 300) {
              enqueueSnackbar("Данные успешно загружены", {
                variant: "success",
              });
            } else if (statusCode >= 400 && statusCode < 500) {
              enqueueSnackbar(
                `Ошибка: не удалось загрузить данные \n ${statusCode}: ${error} `,
                { variant: "error", style: { whiteSpace: "pre-line" } }
              );
            } else if (statusCode >= 500) {
              enqueueSnackbar(`Ошибка сервера \n ${statusCode}: ${error}`, {
                variant: "error",
                style: { whiteSpace: "pre-line" },
              });
            }
          },
        }),
        mutationCache: new MutationCache({
          onSuccess: ({ error, statusCode }: any) => {
            if (statusCode >= 200 && statusCode < 300) {
              enqueueSnackbar("Данные успешно обновлены", {
                variant: "success",
              });
            } else if (statusCode >= 400 && statusCode < 500) {
              enqueueSnackbar(
                `Ошибка: не удалось обновить данные \n ${statusCode}: ${error} `,
                { variant: "error", style: { whiteSpace: "pre-line" } }
              );
            } else if (statusCode >= 500) {
              enqueueSnackbar(`Ошибка сервера \n ${statusCode}: ${error}`, {
                variant: "error",
                style: { whiteSpace: "pre-line" },
              });
            }
          },
        }),
      }),
    []
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};