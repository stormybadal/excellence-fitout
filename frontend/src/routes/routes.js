// export const routes = [
//   {
//     path: "/",
//     name: "Home",
//     showInNavbar: true,
//     icon: null,
//     protected: false,
//     role: ["user", "admin"],
//   },
//   {
//     path: "/about",
//     name: "About",
//     showInNavbar: true,
//     icon: null,
//     protected: false,
//     role: ["user", "admin"],
//   },
//   {
//     path: "/portfolio",
//     name: "Portfolio",
//     showInNavbar: true,
//     icon: null,
//     protected: false,
//     role: ["user", "admin"],
//   },
//   {
//     path: "/portfolio/$slug",
//     name: "PortfolioDetails",
//     icon: null,
//     showInNavbar: false,
//     protected: false,
//     role: ["user", "admin"],
//   },
//   {
//     path: "/project/$id",
//     name: "ProjectDetails",
//     icon: null,
//     showInNavbar: false,
//     protected: false,
//     role: ["user", "admin"],
//   },

//   // 🔹 New Gallery Routes
//   {
//     path: "/gallery",
//     name: "Gallery",
//     showInNavbar: true,
//     icon: null,
//     protected: false,
//     role: ["user", "admin"],
//   },
//   {
//     path: "/gallery/$id",
//     name: "GalleryDetails",
//     icon: null,
//     showInNavbar: false,
//     protected: false,
//     role: ["user", "admin"],
//   },

//   {
//     path: "/blog",
//     name: "Blog",
//     showInNavbar: true,
//     icon: null,
//     protected: false,
//     role: ["user", "admin"],
//   },
//   {
//     path: "/blog/$slug",
//     name: "BlogDetails",
//     icon: null,
//     showInNavbar: false,
//     protected: false,
//     role: ["user", "admin"],
//   },
//   {
//     path: "/contact",
//     name: "Contact",
//     showInNavbar: true,
//     icon: null,
//     protected: false,
//     role: ["user", "admin"],
//   },
// <<<<<<< Updated upstream
// =======
//   {
//     path: "/services",
//     name: "Services",
//     showInNavbar: true,
//     icon: null,
//   },
//   {
//     path: "/blogs",
//     name: "BlogsSettings",
//     showInNavbar: true,
//     icon: null,
//   },
// >>>>>>> Stashed changes

//   // ----- Dashboard (flat structure) -----
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     layout: "DashboardLayout",
//     showInNavbar: false,
//   },
//   {
//     path: "/dashboard/services",
//     name: "Services",
//     layout: "DashboardLayout",
//     showInNavbar: false,
//     icon: null,
//   },
//   {
//     path: "/dashboard/blogs",
//     name: "BlogsSettings",
//     layout: "DashboardLayout",
//     showInNavbar: false,
//     icon: null,
//   },

//   // 🔹 New Dashboard Gallery Route
//   {
//     path: "/dashboard/gallery",
//     name: "GallerySettings",
//     layout: "DashboardLayout",
//     showInNavbar: false,
//     icon: null,
//   },
// ];

export const routes = [
  {
    path: "/",
    name: "Home",
    showInNavbar: true,
    icon: null,
    protected: false,
    role: ["user", "admin"],
  },
  {
    path: "/about",
    name: "About",
    showInNavbar: true,
    icon: null,
    protected: false,
    role: ["user", "admin"],
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    showInNavbar: true,
    icon: null,
    protected: false,
    role: ["user", "admin"],
  },
  {
    path: "/portfolio/$slug",
    name: "PortfolioDetails",
    icon: null,
    showInNavbar: false,
    protected: false,
    role: ["user", "admin"],
  },
  {
    path: "/project/$id",
    name: "ProjectDetails",
    icon: null,
    showInNavbar: false,
    protected: false,
    role: ["user", "admin"],
  },

  {
    path: "/projects",
    name: "Project",
    icon: null,
    showInNavbar: true,
    protected: false,
    role: ["user", "admin"],
  },

  // 🔹 New Gallery Routes
  {
    path: "/gallery",
    name: "Gallery",
    showInNavbar: false,
    icon: null,
    protected: false,
    role: ["user", "admin"],
  },
  {
    path: "/gallery/$id",
    name: "GalleryDetails",
    icon: null,
    showInNavbar: false,
    protected: false,
    role: ["user", "admin"],
  },

  {
    path: "/blog",
    name: "Blog",
    showInNavbar: true,
    icon: null,
    protected: false,
    role: ["user", "admin"],
  },
  {
    path: "/blog/$slug",
    name: "BlogDetails",
    icon: null,
    showInNavbar: false,
    protected: false,
    role: ["user", "admin"],
  },
  {
    path: "/contact",
    name: "Contact",
    showInNavbar: true,
    icon: null,
    protected: false,
    role: ["user", "admin"],
  },
  {
    path: "/services",
    name: "Services",
    showInNavbar: true,
    icon: null,
  },
  {
    path: "/blogs",
    name: "BlogsSettings",
    showInNavbar: true,
    icon: null,
  },

  // ----- Dashboard (flat structure) -----
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   layout: "DashboardLayout",
  //   showInNavbar: false,
  // },
  {
    path: "/dashboard/services",
    name: "Services",
    layout: "DashboardLayout",
    showInNavbar: false,
    icon: null,
  },
  {
    path: "/dashboard/blogs",
    name: "BlogsSettings",
    layout: "DashboardLayout",
    showInNavbar: false,
    icon: null,
  },

  // 🔹 New Dashboard Gallery Route
  {
    path: "/dashboard/gallery",
    name: "GallerySettings",
    layout: "DashboardLayout",
    showInNavbar: false,
    icon: null,
  },
];
