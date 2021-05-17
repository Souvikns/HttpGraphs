import nextConnect from 'next-connect';
import { generateGraph } from '../../lib';

const handler = nextConnect();

handler
    .get((req, res) => {
        let { data, graph } = req.query;
        // graph = "line" | "bar"
        let svgGraph = generateGraph({
            graph,
            data
        });
        res.end(svgGraph);
    })

export default handler;