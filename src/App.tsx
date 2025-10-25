import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";

import { Route, Routes } from "react-router-dom";
import { BasicAppShell } from "./AppShell";

import Index from ".";
import Draging from "./Study/table/draging";

import Chart from "./Study/table/chart";
import Blur from "./Study/table/blur";
import TextEditor from "./Study/table/textEditor";
import InfityTableProvider from "./Study/table/infinityTable";
import CustomTable from "./Study/table/customHeaderTable";
import OrderingTable from "./Study/table/orderingTable";
import ExpandTable from "./Study/table/expandTable";
import VirtualTable from "./Study/table/virtualTable";

export default function App() {
  return (
    <Routes>
      <Route element={<BasicAppShell />}>
        <Route path="/" element={<Index />} />
        <Route path="/VirtualTable" element={<VirtualTable />} />
        <Route path="/Infity" element={<InfityTableProvider />} />
        <Route path="/ExpandTable" element={<ExpandTable />} />
        <Route path="/CustomHeader" element={<CustomTable />} />
        <Route path="/OrderingTable" element={<OrderingTable />} />
        <Route path="/Draging" element={<Draging />} />
        <Route path="/Chart" element={<Chart />} />
        <Route path="/Blur" element={<Blur />} />
        <Route path="/TextEditor" element={<TextEditor />} />
      </Route>
    </Routes>
  );
}
