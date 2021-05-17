import nextConnect from "next-connect";

const handler = nextConnect();

handler.get((req, res) => {
  console.log(req.query);
  res.end("data");
});

export default handler;
