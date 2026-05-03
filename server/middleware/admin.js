export function requireAdmin(req, res, next) {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  console.log(`Checking admin privileges for user ${req.user.username}`);
  if (req.user.role !== "admin") {
    console.log(`Access denied for user ${req.user.username} with role ${req.user.role}`);
    return res.status(403).json({ error: "Access denied: Admins only" });
  }
  next();
}
