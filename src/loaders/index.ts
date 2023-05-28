import { fetcher } from "../utils";
import { ChartTabularData } from "@carbon/charts/interfaces";
import { LoaderFunction } from "react-router-dom";

export const feedbackLoader = (async (): Promise<ChartTabularData> => {
  const vaccinationData = await fetcher("vaccination/vax_state.csv");
  const populationData = await fetcher("static/population.csv");

  const filteredVaccinationData = vaccinationData
    .slice(-17)
    .filter((row: any) => !!row.state);
  const filteredPopulationdata = populationData.filter(
    (row: any) => !!row.state
  );

  let data = filteredVaccinationData.map((row: any) => {
    const state: any = filteredPopulationdata.find(
      ({ state }: any) => state === row.state
    );
    return {
      group: row["state"],
      value: (+row["cumul_full"] / +state["pop"]) * 100,
    };
  });

  return data;
}) satisfies LoaderFunction;

export const stackedBarLoader = (async (): Promise<ChartTabularData> => {
  const death_state = await fetcher('epidemic/deaths_state.csv');
  const case_state = await fetcher('epidemic/cases_state.csv');

  const filtered_death_state = death_state
    .slice(0,16)
    .filter((row: any) => !!row.state);
  const filtered_case_state = case_state
    .slice(0,16)
    .filter((row: any) => !!row.state);

  let data = filtered_death_state.map((row: any) => {
    const cases: any = filtered_case_state.find(
      ({ state }: any) => state === row.state
    )
    let data = [
      {
        key: row["state"],
        group: "deaths_new",
        value: +row["deaths_new"],
      },
      {
        key: row["state"],
        group: "cases_new",
        value: +cases["cases_new"],
      }
    ]
    return data;
  })


  return data;
}) satisfies LoaderFunction;
