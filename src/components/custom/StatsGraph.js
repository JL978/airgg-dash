import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import Chart from "react-apexcharts";
import { ChevronDown } from "react-feather";

let primary = "#7367F0",
  dangerLight = "#f29292",
  strokeColor = "#b9c3cd",
  labelColor = "#e7eef7";

const state = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
      dashArray: [0, 8],
      width: [4, 2],
    },
    grid: {
      borderColor: labelColor,
    },
    legend: {
      show: false,
    },
    colors: [dangerLight, strokeColor],

    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        inverseColors: false,
        gradientToColors: [primary, strokeColor],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 0,
      hover: {
        size: 5,
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: strokeColor,
        },
      },
      axisTicks: {
        show: false,
      },
      categories: ["01", "05", "09", "13", "17", "21", "26", "31"],
      axisBorder: {
        show: false,
      },
      tickPlacement: "on",
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        style: {
          color: strokeColor,
        },
        formatter: (val) => {
          return val > 999 ? (val / 1000).toFixed(1) + "k" : val;
        },
      },
    },
    tooltip: {
      x: { show: false },
    },
    noData: {
      text: "No data",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: undefined,
        fontSize: "14px",
        fontFamily: "Poppins",
      },
    },
  },
  series: [
    {
      name: "This Month",
      data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600],
    },
    {
      name: "Last Month",
      data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000],
    },
  ],
};

export default function StatsGraph({ title, updated, height }) {
  const options = ["Last 24 hours", "Last week", "Last month", "All time"];
  const [option, setOption] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <UncontrolledDropdown>
          <DropdownToggle
            tag="small"
            className="text-secondary text-bold-500 cursor-pointer"
          >
            {options[option]} <ChevronDown size={10} />
          </DropdownToggle>
          <DropdownMenu right>
            {options.map((text, index) => {
              if (index === option) return null;

              return (
                <DropdownItem key={index} onClick={() => setOption(index)}>
                  {text}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody className="pt-50">
        <Chart
          options={state.options}
          series={[]}
          type="line"
          height={height}
        />

        <small className="text-secondary">Updated {updated} seconds ago</small>
      </CardBody>
    </Card>
  );
}
