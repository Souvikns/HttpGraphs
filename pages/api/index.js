import nextConnect from "next-connect";
import { generateGraph } from "../../lib";

const handler = nextConnect();

handler.get((req, res) => {
  let { config } = req.query;
  // graph = "line" | "bar"
  let svgGraph = generateGraph(JSON.stringify(config));
  res.end(svgGraph);
});

export default handler;
