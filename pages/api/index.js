import nc from 'next-connect';
import Axios from 'axios';

const handler = nc();

handler
    .get(async (req, res) => {
        let { username } = req.query;

        try {
            let { data } = await Axios({
                url: `https://api.github.com/users/${username}/events/public?per_page=1000`,
                method: 'GET'
            })

            return res.json(data.map(el => ({eventType: el.type, date: `${new Date(el.created_at).getDate()}:${new Date(el.created_at).getUTCMonth()}`})));
        } catch (error) {

        }
    })

export default handler;