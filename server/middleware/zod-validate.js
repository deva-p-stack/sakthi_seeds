// import { z } from "zod";

// // Reusable middleware factory
// export default function validateBody(schema) {
//   return (req, res, next) => {
//     const parsed = schema.safeParse(req.body);

//     if (!parsed.success) {
//       const fields = parsed.error.issues.reduce((acc, issue) => {
//         const field = issue.path.join(".") || "form";
//         if (!acc[field]) acc[field] = [];
//         acc[field].push(issue.message);
//         return acc;
//       }, {});

//       return res.status(400).json({
//         error: "Validation failed",
//         fields,
//       });
//     }

//     req.validatedBody = parsed.data;
//     next();
//   };
// }

export default function validateBody(schema) {
  return (req, res, next) => {
    try {
      console.log("RAW BODY RECEIVED:", req.body);
      
      //  fix for multipart/form-data
      const fieldsToParse = [
        "districts",
        "sowing_month",
        "season",
        "water",
        "soil",
        "heat",
        "climate",
        "variants"
      ];

      fieldsToParse.forEach((field) => {
        if (req.body[field]) {
          try {
            console.log(`Parsing ${field}:`, req.body[field], "Type:", typeof req.body[field]);
            req.body[field] = JSON.parse(req.body[field]);
            console.log(`After parsing ${field}:`, req.body[field]);
          } catch (e) {
            console.log(`Failed to parse ${field}:`, e.message);
            // leave as is if not valid JSON
          }
        }
      });

      console.log("PARSED BODY:", req.body);

      const parsed = schema.safeParse(req.body);

      if (!parsed.success) {
        const fields = parsed.error.issues.reduce((acc, issue) => {
          const field = issue.path.join(".") || "form";
          if (!acc[field]) acc[field] = [];
          acc[field].push(issue.message);
          return acc;
        }, {});

        console.log("VALIDATION ERRORS:", fields);

        return res.status(400).json({
          error: "Validation failed",
          fields,
        });
      }

      req.validatedBody = parsed.data;
      next();

    } catch (err) {
      console.error("Validation middleware error:", err);
      return res.status(500).json({
        error: "Validation middleware error"
      });
    }
  };
}