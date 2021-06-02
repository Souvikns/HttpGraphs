import nextConnect from 'next-connect';

const handler = nextConnect();

handler
    .get((req, res) => {
        res.end("Hello")
    })

export default handler;