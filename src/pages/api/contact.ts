import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    const jotformParams = new URLSearchParams();
    // Use your verified Jotform unique names here (e.g., name, email, message)
    jotformParams.append("submission[name]", name);
    jotformParams.append("submission[email]", email);
    jotformParams.append("submission[message]", message);

    const response = await fetch(
      `https://api.jotform.com/form/${process.env.JOTFORM_FORM_ID}/submissions?apiKey=${process.env.JOTFORM_API_KEY}`,
      {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded" 
        },
        body: jotformParams.toString(),
      }
    );

    const result = await response.json();

    if (result.responseCode === 200) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: result.message });
    }
  } catch (error) {
    console.error("Backend Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}