import Ably from "ably/promises";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  try {
    const client = new Ably.Realtime(process.env.ABLY_API_KEY ?? "");
    const tokenRequestData = await client.auth.createTokenRequest({
      clientId: "ably-nextjs-demo",
    });
    res.status(200).json(tokenRequestData);
  } catch (_) {
    res.status(400);
  }
};

export default handler;
