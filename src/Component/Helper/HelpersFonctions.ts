import { Bounce, toast } from "react-toastify";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const filterData = (data: any, value: any) => {
  const dataFilted = data.filter((datas: any) =>
    datas.typeActivite.toLowerCase().includes(value.toLowerCase())
  );

  return dataFilted;
};
