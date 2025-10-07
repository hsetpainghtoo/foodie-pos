// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const method = req.method;

  if(method === "GET"){
    res.status(200).json({method: req.method});
  }else if(method === "POST"){
    res.status(200).json({method: req.method});
  }else if(method === "PUT"){
    res.status(200).json({method: req.method});
  }else if(method === "DELETE"){
    res.status(200).json({method: req.method});
  }else{
    // res.status(405).json({message: "Method not allowed"});
    res.status(405).send("Method not allowed");
  }
}
