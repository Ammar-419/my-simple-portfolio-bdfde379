import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Construct Jotform data
    const jotformParams = new URLSearchParams();
    jotformParams.append("submission[name]", name);
    jotformParams.append("submission[email]", email);
    jotformParams.append("submission[message]", message);

    const response = await fetch(
      `https://api.jotform.com/form/${process.env.JOTFORM_FORM_ID}/submissions?apiKey=${process.env.JOTFORM_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: jotformParams.toString(),
      }
    );

    const result = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: result.message || "Jotform error" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}