const express = require("express");
const router = express.Router();
const {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
} = require("../controllers/resource.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
const roleMiddleware = require("../middlewares/role.middleware.js");

// Public routes (Accessible by all authenticated users)
router.get("/all", authMiddleware, getAllResources);
router.get("/byId/:id", authMiddleware, getResourceById);

// Protected routes (Only accessible by Admin)
router.post(
  "/create",
  authMiddleware,
  roleMiddleware(["Admin"]),
  createResource
);
router.put(
  "/update/:id",
  authMiddleware,
  roleMiddleware(["Admin"]),
  updateResource
);
router.delete(
  "/delete/:id",
  authMiddleware,
  roleMiddleware(["Admin"]),
  deleteResource
);

module.exports = router;
