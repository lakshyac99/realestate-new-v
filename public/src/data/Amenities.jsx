import Ac from "../../src/svg/ameneties/ac";
import Bbq from "../../src/svg/ameneties/bbq";
import Beach from "../../src/svg/ameneties/beach";
import CarbonMonoxideAlarm from "../../src/svg/ameneties/carbon-monoxide-alarm";
import FireExt from "../../src/svg/ameneties/fire-ext";
import FirePit from "../../src/svg/ameneties/fire-pit";
import FirstAid from "../../src/svg/ameneties/first-aid";
import Gym from "../../src/svg/ameneties/gym";
import HotTub from "../../src/svg/ameneties/hot-tub";
import IndoorFirplace from "../../src/svg/ameneties/indoor-firplace";
import Kitchen from "../../src/svg/ameneties/kitchen";
import Lake from "../../src/svg/ameneties/lake";
import OutdoorDining from "../../src/svg/ameneties/outdoor-dining";
import OutdoorShower from "../../src/svg/ameneties/outdoor-shower";
import PaidParking from "../../src/svg/ameneties/paid-parking";
import Parking from "../../src/svg/ameneties/parking";
import Patio from "../../src/svg/ameneties/patio";
import Piano from "../../src/svg/ameneties/piano";
import Pool from "../../src/svg/ameneties/pool";
import PoolTable from "../../src/svg/ameneties/pool-table";
import Ski from "../../src/svg/ameneties/ski";
import SmokeAlarm from "../../src/svg/ameneties/smoke-alarm";
import Tv from "../../src/svg/ameneties/tv";
import WashingMachine from "../../src/svg/ameneties/washing-machine";
import Wifi from "../../src/svg/ameneties/wifi";
import Workplace from "../../src/svg/ameneties/workplace";

export const AmenetiesType = [
  {
    type: "basic",
    data: [
      { name: "Wifi", svgPath: <Wifi /> },
      { name: "TV", svgPath: <Tv /> },
      { name: "Kitchen", svgPath: <Kitchen /> },
      { name: "Washing Machine", svgPath: <WashingMachine /> },
      { name: "Free parking on premises", svgPath: <Parking /> },
      { name: "Paid parking on premises", svgPath: <PaidParking /> },
      { name: "Air conditioning", svgPath: <Ac /> },
      { name: "Dedicated workplace", svgPath: <Workplace /> },
    ],
  },
  {
    type: "advanced",
    data: [
      { name: "Pool", svgPath: <Pool /> },
      { name: "Hot tub", svgPath: <HotTub /> },
      { name: "Patio", svgPath: <Patio /> },
      { name: "BBQ grill", svgPath: <Bbq /> },
      { name: "Outdoor dining area", svgPath: <OutdoorDining /> },
      { name: "Fire pit", svgPath: <FirePit /> },
      { name: "Pool table", svgPath: <PoolTable /> },
      { name: "Indoor fireplace", svgPath: <IndoorFirplace /> },
      { name: "Piano", svgPath: <Piano /> },
      { name: "Exercise equipment", svgPath: <Gym /> },
      { name: "Lake access", svgPath: <Lake /> },
      { name: "Beach access", svgPath: <Beach /> },
      { name: "Ski-in/Ski-out", svgPath: <Ski /> },
      { name: "Outdoor shower", svgPath: <OutdoorShower /> },
    ],
  },
  {
    type: "safety",
    data: [
      { name: "Smoke alarm", svgPath: <SmokeAlarm /> },
      { name: "First aid kit", svgPath: <FirstAid /> },
      { name: "Fire extinguisher", svgPath: <FireExt /> },
      { name: "Carbon monoxide alarm", svgPath: <CarbonMonoxideAlarm /> },
    ],
  },
];
